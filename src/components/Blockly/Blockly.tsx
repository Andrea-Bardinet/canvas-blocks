import { useEffect, useRef } from 'react'
import BlocklyApp from 'blockly'
import toolbox from './toolbox';
import addCustomBlocks from './block-definition';
import addCodeGenerator from './code-generator'
import addCanvasFunction from '../../utils/canvas-functions';
// @ts-ignore
import { BlocklyWorkspace } from 'react-blockly';
import { javascriptGenerator } from 'blockly/javascript';
import './style.scss'
import { Lang, Translation } from '../../langs/translation';

interface BlocklyProps {
    onMount: Function,
}

export interface IBlockly {
    getJs: Function,
    getXml: Function,
    setXml: Function,
}

export class SingletonBlockly {
    private static blockly: IBlockly;

    constructor(blockly: any) {
        if (!SingletonBlockly.blockly) {
            SingletonBlockly.blockly = blockly
        }
    }

    static getBlockly = (): IBlockly => {
        return SingletonBlockly.blockly
    }
}

const Blockly = (props: BlocklyProps) => {

    const workspaceRef = useRef<BlocklyApp.Workspace>()
    const xmlRef = useRef<string>(localStorage.getItem("workspaceXml") ?? "")

    const getJs = (): string => {
        return javascriptGenerator.workspaceToCode(workspaceRef.current);
    }

    const getXml = (): string => {
        return xmlRef.current
    }

    const setXml = (xmlString: string) => {
        let workspace = workspaceRef.current
        workspace?.clear();
        var parser = new DOMParser();
        var xmlDom = parser.parseFromString(xmlString, 'text/xml');

        if (workspace) {
            BlocklyApp.Xml.domToWorkspace(xmlDom.documentElement, workspace);
        }
    }

    useEffect(() => {
        addCanvasFunction()
        Translation.getTranslation().addOnChangeCallback((lang: Lang) => {
            addCustomBlocks(BlocklyApp)
            setXml(xmlRef.current)
            BlocklyApp.setLocale(lang.blocklyTranslation)
        })
    }, [])

    const onBlocklyInject = (workspace: any) => {
        workspaceRef.current = workspace
        addCustomBlocks(BlocklyApp)
        addCodeGenerator()
        new SingletonBlockly({
            getJs,
            getXml,
            setXml
        } as IBlockly)
        props.onMount(SingletonBlockly.getBlockly())
        BlocklyApp.setLocale(Translation.getTranslation().getLang().blocklyTranslation)

    }

    return (
        <BlocklyWorkspace
            toolboxConfiguration={toolbox}
            initialXml={xmlRef.current}
            className={"Blockly "}
            workspaceConfiguration={{
                collapse: true,
                comments: false,
                disable: false,
                maxBlocks: Infinity,
                trashcan: true,
                horizontalLayout: false,
                toolboxPosition: 'end',
                css: true,
                media: 'https://blockly-demo.appspot.com/static/media/',
                rtl: false,
                scrollbars: true,
                sounds: true,
                oneBasedIndex: true,
                grid: {
                    spacing: 20,
                    length: 1,
                    colour: '#888',
                    snap: false
                },
                zoom: {
                    controls: true,
                    wheel: true,
                    startScale: 1,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2
                }
            }}
            onInject={onBlocklyInject}
            onXmlChange={(xml) => {
                xmlRef.current = xml
                localStorage.setItem("workspaceXml", xml);
            }}
        />
    )
}

export default Blockly;