import { useState, useRef, useEffect } from 'react'
import './App.css'
import Blockly, { IBlockly } from './components/Blockly/Blockly'
import { Tooltip } from 'react-tooltip';
import Terminal, { ITerminal } from './components/Terminal/Terminal'
import CodeEditor, { ICodeEditor } from './components/CodeEditor/CodeEditor'
import SplitPane, { Pane } from 'split-pane-react'
import MainNav from './components/MainNav/MainNav';
import darkOakPlanks from './assets/textures/dark_oak_planks.png'

const MIN_SIZE = '70px'
const MAX_SIZE = "500px"
const MIN_IN_MAX_SIZE = "200px"

function App() {

  const codeEditorRef = useRef<ICodeEditor>();
  const blocklyRef = useRef<IBlockly>()
  const terminalRef = useRef<ITerminal>()
  const [, setBlocklyMountState] = useState(false)
  const [canvasMaximize, setCanvasMaximize] = useState(true)
  const [navSize, setNavSize] = useState(false)

  const [centralPanelSizes, setCentralPanelSizes] = useState<(number | string)[]>([MIN_SIZE, 'auto', '300px',]);
  const [leftPanelSizes, setLeftPanelSizes] = useState<(number | string)[]>([500, 1,]);
  const [rightPanelSizes, setRightPanelSizes] = useState<(number | string)[]>([300, 200,]);

  useEffect(() => {
    // setCentralPanelSizes([MIN_SIZE, 3, 1,])
  }, [])

  const execute = () => {
    let blockly_code: string = blocklyRef.current?.getJs()
    // ${canvasFunctions}
    let code: string = `
    console.log("heyeye");
    (async ()=>{${blockly_code}})()`

    console.log(code);

    terminalRef.current?.execute(code)
  }

  const onKeyEvent = (event: React.KeyboardEvent<any>) => {
    if (event.code === 'Enter' && event.ctrlKey) execute()
  }

  useEffect(() => {
    if (navSize) {
      setCentralPanelSizes([MAX_SIZE, centralPanelSizes[1], centralPanelSizes[2],])
    } else {
      setCentralPanelSizes([MIN_SIZE, 'auto', '300px',])
    }
  }, [navSize])

  return (
    <>
      <div className='app' onKeyUpCapture={onKeyEvent}>

        <SplitPane
          className=''
          split='vertical'
          sizes={centralPanelSizes}
          onChange={(sizes) => setCentralPanelSizes(sizes)}
          sashRender={() => { return "" }}        >

          <Pane minSize={navSize ? MIN_IN_MAX_SIZE : MIN_SIZE} maxSize={navSize ? MAX_SIZE : MIN_SIZE}  >


            <MainNav
              onClickExecute={execute}
              onCanvasMaximize={setCanvasMaximize}
              bigSize={false}
              onSizeEvent={setNavSize}></MainNav>

          </Pane>
          <SplitPane
            sashRender={() => { return "" }}
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
            <SplitPane
              sashRender={() => { return "" }}
              className='test'
              split='horizontal'
              sizes={rightPanelSizes}
              onChange={(sizes) => setRightPanelSizes(sizes)}>
              <div className='canvas-wrapper' style={{backgroundImage: `url(${darkOakPlanks})`}}>
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


      <Tooltip id="my-tooltip"></Tooltip>
    </>
  )
}

export default App
