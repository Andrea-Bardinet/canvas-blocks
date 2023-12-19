import { useState, useRef, useEffect } from 'react'
import './App.css'
import Blockly, { IBlockly } from './components/Blockly/Blockly'
import playSvg from './assets/play.svg'
import blockSvg from './assets/block.svg'
import editorSvg from './assets/editor.svg'
import minimizeSvg from './assets/minimize.svg'
import maximizeSvg from './assets/maximize.svg'
import canvasFunctions from './utils/canvas-functions'
import SwitchButton from './components/SwitchButton/SwitchButton'
import { Tooltip } from 'react-tooltip';
import Terminal, { ITerminal } from './components/Terminal/Terminal'
import CodeEditor, { ICodeEditor } from './components/CodeEditor/CodeEditor'

enum LeftPanelStates {
  Blockly,
  Editor,
  Terminal
}



function App() {

  const codeEditorRef = useRef<ICodeEditor>();
  const blocklyRef = useRef<IBlockly>()
  const terminalRef = useRef<ITerminal>()
  const [leftPanelState, setLeftPanelState] = useState(LeftPanelStates.Blockly)
  const [canvasMaximize, setCanvasMaximize] = useState(true)

  const execute = () => {
    let code = (leftPanelState == LeftPanelStates.Editor ?
      codeEditorRef?.current?.getCode() :
      blocklyRef.current?.getJs())
    console.log(code);
    terminalRef.current?.execute(canvasFunctions + "\n" + code)
  }

  const onKeyEvent = (event: React.KeyboardEvent<any>) => {
    if (event.code === 'Enter' && event.ctrlKey) execute()
  }

  useEffect(() => {
    blocklyRef.current?.setIsHidden(leftPanelState != LeftPanelStates.Blockly)
    codeEditorRef.current?.setIsHidden(leftPanelState != LeftPanelStates.Editor)
  }, [leftPanelState])

  return (
    <>
      <div className='app' onKeyUpCapture={onKeyEvent}>

        <div className='left-side'>
          <Blockly
            onMount={(blockly: IBlockly) => {
              blocklyRef.current = blockly
              codeEditorRef.current?.setBlockly(blockly)
            }}
            isHiddenDefault={leftPanelState != LeftPanelStates.Blockly}
          ></Blockly>
          {
            blocklyRef.current != undefined ?

              <CodeEditor
                isHiddenDefault={leftPanelState != LeftPanelStates.Editor}
                onMount={(codeEditor: ICodeEditor) => { codeEditorRef.current = codeEditor }}
                blockly={blocklyRef.current}
              ></CodeEditor>
              : <></>
          }
        </div>

        <div className='right-side'>

          <nav>
            <div className='left-panel'>
              <SwitchButton
                img1={blockSvg}
                img2={editorSvg}
                value1={LeftPanelStates.Blockly}
                value2={LeftPanelStates.Editor}
                default={leftPanelState == LeftPanelStates.Editor}
                tooltip1='Blockly'
                tooltip2='Code editor'
                onChange={(value: any) => { setLeftPanelState(value) }}
              ></SwitchButton>
            </div>

            <div className='execution'>
              <img className='nav-svg' onClick={execute} src={playSvg}
                data-tooltip-id="my-tooltip"
                data-tooltip-content={"Run code (Ctrl+Shift+E)"}
              ></img>
            </div>

            <div className='right-panel'>
              <SwitchButton
                img1={minimizeSvg}
                img2={maximizeSvg}
                value1={false}
                value2={true}
                default={true}
                tooltip1='Minimize canvas'
                tooltip2='Maximize canvas'
                onChange={(value: any) => { setCanvasMaximize(value) }}
              ></SwitchButton>

            </div>
          </nav>

          <div className='canvas-wrapper'>
            <canvas className='main-canvas'
              id='main-canvas'
              height="100"
              width="100"
              style={{ width: canvasMaximize ? "80%" : "auto" }}></canvas>
          </div>

          <Terminal isOpenDefault={false} onMount={(value: ITerminal) => { terminalRef.current = value }}></Terminal>


        </div>
      </div >
      <Tooltip id="my-tooltip"></Tooltip>
    </>
  )
}

export default App
