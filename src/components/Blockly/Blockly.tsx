import { useState, useRef } from 'react'
import BlocklyApp from 'blockly'
import toolbox from './toolbox';
import addCustomBlocks from './block-definition';
import addCodeGenerator from './code-generator'
import DarkTheme from '@blockly/theme-dark';
import { BlocklyWorkspace } from 'react-blockly';
import { javascriptGenerator } from 'blockly/javascript';
import defaultXml from '../../utils/default-xml'
import './style.css'

interface BlocklyProps {
    onMount: Function,
}

export interface IBlockly {
    getJs: Function,
    getXml: Function,
}

const Blockly = (props: BlocklyProps) => {

    const workspaceRef = useRef("")
    const xmlRef = useRef(defaultXml)

    const getJs = (): string => {
        return javascriptGenerator.workspaceToCode(workspaceRef.current);
    }

    const getXml = (): string => {
        return xmlRef.current
    }

    const onBlocklyInject = (workspace: any) => {
        workspaceRef.current = workspace
        addCustomBlocks(BlocklyApp)
        addCodeGenerator()
        props.onMount({
            getJs,
            getXml
        } as IBlockly)
    }

    return (
        <BlocklyWorkspace
            toolboxConfiguration={toolbox}
            initialXml={xmlRef.current}
            className={"Blockly " }
            workspaceConfiguration={{
                grid: {
                    spacing: 20,
                    length: 3,
                    colour: "#555",
                    snap: true,
                },
                theme: DarkTheme,
                zoom: {
                    controls: true,
                    wheel: true,
                    startScale: 1.0,
                    maxScale: 3,
                    minScale: 0.3,
                    scaleSpeed: 1.2,
                    pinch: true
                }
            }}
            onInject={onBlocklyInject}
            // onWorkspaceChange={workspaceDidChange}
            onXmlChange={(xml) => {
                xmlRef.current = xml
            }}
        />
    )

}

export default Blockly;