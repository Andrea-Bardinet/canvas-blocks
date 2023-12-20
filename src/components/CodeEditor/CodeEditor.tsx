import { Editor } from '@monaco-editor/react';
import { useState, useRef, useEffect } from 'react'
import './style.css'
import xmlFileSvg from './assets/xml-file.svg'
import jsFileSvg from './assets/js-file.svg'
import SwitchButton from '../SwitchButton/SwitchButton';
import { IBlockly } from '../Blockly/Blockly';
import loadingSvg from './assets/loading.svg'


enum CodeEditorFile {
    Js,
    Xml
}

export interface CodeEditorProps {
    onMount: Function
    blockly: IBlockly
}

export interface ICodeEditor {
    setBlockly: Function
    getCode: Function
    getEditor: Function
    setCode: Function
}

declare global {
    interface IEditorRef {
        getValue: Function
        setValue: Function
    }
}


const CodeEditor = (props: CodeEditorProps) => {

    const [editorFile, setEditorFile] = useState<any>(CodeEditorFile.Js)
    const editorFileRef = useRef(CodeEditorFile.Js)
    const [mounted, setMounted] = useState<boolean>(false)
    const editorRef = useRef<IEditorRef>();
    const monacoRef = useRef();
    const blocklyRef = useRef<IBlockly>(props.blockly)

    const getEditor = () => {
        return editorRef.current
    }

    const getCode = () => {
        if (editorFileRef.current != CodeEditorFile.Js) return ""
        return editorRef?.current?.getValue() ?? ""
    }

    const setCode = (value: string) => {
        editorRef?.current?.setValue(value)
    }

    const setBlockly = (blockly: IBlockly) => {
        blocklyRef.current = blockly
    }

    const handleEditorDidMount = (editor: any, monaco: any) => {
        editorRef.current = editor;
        monacoRef.current = monaco
        props.onMount({
            getCode,
            getEditor,
            setCode,
            setBlockly
        } as ICodeEditor)
        setMounted(true)
    }


    useEffect(() => {
        let code = ""
        if (editorFile == CodeEditorFile.Js) code = blocklyRef.current.getJs()
        if (editorFile == CodeEditorFile.Xml) code = blocklyRef.current.getXml()
        setCode(code)
    })

    return (
        <div className={'Editor ' }>
            <div className='EditorNav'>
                <SwitchButton
                    default={editorFile == CodeEditorFile.Xml}
                    img1={jsFileSvg}
                    img2={xmlFileSvg}
                    onChange={(value: CodeEditorFile) => {
                        setEditorFile(value)
                        editorFileRef.current = value
                    }}
                    tooltip1='JS code'
                    tooltip2='Workspace XML'
                    value1={CodeEditorFile.Js}
                    value2={CodeEditorFile.Xml}
                ></SwitchButton>
            </div>
            {
                !mounted ? <img src={loadingSvg} className='EditorLoading'></img> :
                    <></>
            }

            <Editor className={'monaco-editor'}
                defaultLanguage={editorFile == CodeEditorFile.Js ? "javascript" : "xml"}
                theme='vs-dark'
                defaultValue={editorFile == CodeEditorFile.Js ? blocklyRef.current.getJs() : blocklyRef.current.getXml()}
                onMount={handleEditorDidMount}></Editor>


        </div>
    )
}

export default CodeEditor;