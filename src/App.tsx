import { useState, useRef, useEffect, useReducer } from 'react'
import './App.css'
import Blockly, { IBlockly } from './components/Blockly/Blockly'
import { Tooltip } from 'react-tooltip';
import Terminal, { ITerminal } from './components/Terminal/Terminal'
import /* CodeEditor, */ { ICodeEditor } from './components/CodeEditor/CodeEditor'
import SplitPane, { Pane, SashContent } from 'split-pane-react'
import MainNav from './components/MainNav/MainNav';
import darkOakPlanks from './assets/textures/dark_oak_planks.png'
import { Translation } from './langs/translation';
import 'split-pane-react/esm/themes/default.css';

// import WorkspaceMenu from './components/WorkspaceMenu/WorkspaceMenu';

const MIN_SIZE = '70px'
const MAX_SIZE = "700px"
const MIN_IN_MAX_SIZE = "200px"

function App() {

  const codeEditorRef = useRef<ICodeEditor>();
  const blocklyRef = useRef<IBlockly>()
  const terminalRef = useRef<ITerminal>()

  const [, setBlocklyMountState] = useState(false)
  const [canvasMaximize, setCanvasMaximize] = useState(true)
  const [navSize, setNavSize] = useState(false)

  const [centralPanelSizes, setCentralPanelSizes] = useState<(number | string)[]>([MIN_SIZE, 'auto', '300px',]);
  const [rightPanelSizes, setRightPanelSizes] = useState<(number | string)[]>(['auto', '300px',]);


  const [, forceUpdate] = useReducer(x => x + 1, 0);


  useEffect(() => {
    Translation.getTranslation().addOnChangeCallback(forceUpdate)
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
          sashRender={() => (
            //@ts-ignore
            <SashContent style={{ 
              backgroundColor: 'brown', 
              width: '2px' }} />
        )}

        >

          <Pane minSize={navSize ? MIN_IN_MAX_SIZE : MIN_SIZE} maxSize={navSize ? MAX_SIZE : MIN_SIZE}  >


            <MainNav
              onClickExecute={execute}
              onCanvasMaximize={setCanvasMaximize}
              bigSize={false}
              onSizeEvent={setNavSize}></MainNav>

          </Pane>
          <Pane className='left-side'>
            {
              blocklyRef.current != undefined ?
                <></>//<WorkspaceMenu></WorkspaceMenu> 
                :
                <></>
            }
            <Blockly
              onMount={(blockly: IBlockly) => {
                blocklyRef.current = blockly
                codeEditorRef.current?.setBlockly(blockly)
                setBlocklyMountState(true)
              }}
            ></Blockly>


          </Pane>

          {/*           <Pane>
          {
              blocklyRef.current != undefined ?

                <CodeEditor
                  onMount={(codeEditor: ICodeEditor) => { codeEditorRef.current = codeEditor }}
                  blockly={blocklyRef.current}
                ></CodeEditor>
                : <></>
            }
          </Pane>
 */}
 

          <div className='right-side'>
            <SplitPane
              sashRender={() => (
                //@ts-ignore
                <SashContent style={{ 
                  backgroundColor: 'brown',
                  height: '2px',
                 }} />
            )}
              className='test'
              split='horizontal'
              sizes={rightPanelSizes}
              onChange={(sizes) => setRightPanelSizes(sizes)}>
              <div className='canvas-wrapper' style={{ backgroundImage: `url(${darkOakPlanks})` }}>
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
