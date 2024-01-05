import { useState} from 'react'
import playSvg from './assets/play.svg'
// import editorSvg from './assets/editor.svg'
import minimizeSvg from './assets/minimize.svg'
import maximizeSvg from './assets/maximize.svg'
import tableSvg from "./assets/table.svg"
import SwitchButton from "../SwitchButton/SwitchButton"

import './style.css'
import LockableButton from '../LockableButton/LockableButton'
import Exercises from '../Exercises/Exercises'

type MainNavProps = {
    onClickExecute: Function
    onCanvasMaximize: Function
    onSizeEvent: Function
    bigSize: boolean
    // onXmlWorkspace : boolean
}

type MainNav = {
    onSizeChange: Function;
}




const MainNav = (props: MainNavProps) => {

    const [sizeState, setSizeState] = useState<boolean>(props.bigSize)

    const onSizeEvent = (value : boolean)=>{
        setSizeState(value)
        props.onSizeEvent(value)
    }

    return (
        <nav className={'MainNav ' + (props.bigSize ? "MainNavBig" : "MainNavSmall")}>

            {
                sizeState ?
                    <Exercises></Exercises>
                    : <></>
            }


            <div className={'MainNavControl ' + (props.bigSize ? "MainNavControlBig" : "MainNavControlSmall")}>


                <img className='nav-svg' src={playSvg}  //onClick={() => props.onClickExecute()} 
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={"Run code (Ctrl+Shift+E)"}
                    onClick={() => props.onClickExecute()}
                ></img>


                <LockableButton
                    default={false}
                    img={tableSvg}
                    onChange={(value: boolean) => onSizeEvent(value)}
                    tooltip='Table of content'></LockableButton>



                <SwitchButton
                    img1={minimizeSvg}
                    img2={maximizeSvg}
                    value1={false}
                    value2={true}
                    default={true}
                    tooltip1='Minimize canvas'
                    tooltip2='Maximize canvas'
                    onChange={(value: any) => { props.onCanvasMaximize(value) }}
                    vertical={true}
                    backgroundColor='#ffffff77'
                ></SwitchButton>

            </div>
        </nav>



    )
}

export default MainNav;