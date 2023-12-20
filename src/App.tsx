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
import SplitPane from 'split-pane-react'


function App() {

  const codeEditorRef = useRef<ICodeEditor>();
  const blocklyRef = useRef<IBlockly>()
  const terminalRef = useRef<ITerminal>()
  const [, setBlocklyMountState] = useState(false)
  const [canvasMaximize, setCanvasMaximize] = useState(true)


  const [centralPanelSizes, setCentralPanelSizes] = useState<(number | string)[]>([300, 200,]);
  const [leftPanelSizes, setLeftPanelSizes] = useState<(number | string)[]>([300, 200,]);
  const [rightPanelSizes, setRightPanelSizes] = useState<(number | string)[]>([200, 200,]);


  const execute = () => {
    let code = blocklyRef.current?.getJs()
    console.log(code);
    terminalRef.current?.execute(canvasFunctions + "\n" + code)
  }

  const onKeyEvent = (event: React.KeyboardEvent<any>) => {
    if (event.code === 'Enter' && event.ctrlKey) execute()
  }

  return (
    <>
      <div className='app' onKeyUpCapture={onKeyEvent}>
        <SplitPane
          className=''
          split='vertical'
          sizes={centralPanelSizes}
          onChange={(sizes) => setCentralPanelSizes(sizes)}
        >


          <SplitPane
            className='left-side'
            split='horizontal'
            sizes={leftPanelSizes}
            onChange={(sizes) => setLeftPanelSizes(sizes)}
          >

            <Blockly
              onMount={(blockly: IBlockly) => {
                blocklyRef.current = blockly
                codeEditorRef.current?.setBlockly(blockly)
                setBlocklyMountState(true)
              }}
            ></Blockly>
            {
              blocklyRef.current != undefined ?

                <CodeEditor
                  onMount={(codeEditor: ICodeEditor) => { codeEditorRef.current = codeEditor }}
                  blockly={blocklyRef.current}
                ></CodeEditor>
                : <></>
            }
          </SplitPane>


          <div className='right-side'>


            <nav>
              <div className='left-panel'>
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


            <SplitPane
              className='test'
              split='horizontal'
              sizes={rightPanelSizes}
              onChange={(sizes) => setRightPanelSizes(sizes)}
            >
              <div className='canvas-wrapper'>
                <canvas className='main-canvas'
                  id='main-canvas'
                  height="100"
                  width="100"
                  style={{ width: canvasMaximize ? "80%" : "auto" }}></canvas>
              </div>

              <Terminal isOpenDefault={false} onMount={(value: ITerminal) => { terminalRef.current = value }}></Terminal>


            </SplitPane>
          </div>
        </SplitPane>
      </div>
      {/* </div > */}
      <Tooltip id="my-tooltip"></Tooltip>
    </>
  )
}

export default App
