import { useState } from 'react'
import playSvg from './assets/play.svg'
// import editorSvg from './assets/editor.svg'
import minimizeSvg from './assets/minimize.svg'
import maximizeSvg from './assets/maximize.svg'
import tableSvg from "./assets/table.svg"
import SwitchButton from "../SwitchButton/SwitchButton"

import './style.scss'
import LockableButton from '../LockableButton/LockableButton'
import Exercises from '../Exercises/Exercises'
import oakLogBg from '../../assets/textures/oak_log.png'
import { Translation, langs } from '../../langs/translation'
import { Tooltip } from 'react-tooltip'

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

    const t: Function = Translation.translate;
    const [sizeState, setSizeState] = useState<boolean>(props.bigSize)

    const onSizeEvent = (value: boolean) => {
        setSizeState(value)
        props.onSizeEvent(value)
    }

    return (
        <nav className={'MainNav ' + (props.bigSize ? "MainNavBig" : "MainNavSmall")}
            style={{
                backgroundImage: `url(${oakLogBg})`
            }}>

            {sizeState ?
                <Exercises></Exercises>
                : <></>}


            <div className={'MainNavControl ' + (props.bigSize ? "MainNavControlBig" : "MainNavControlSmall")}>

                <img className='nav-svg' src={playSvg}  //onClick={() => props.onClickExecute()} 
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={t('MainNav-tooltipRun') + " (Ctrl+Enter)"}
                    onClick={() => props.onClickExecute()}
                ></img>


                <LockableButton
                    default={false}
                    img={tableSvg}
                    onChange={(value: boolean) => onSizeEvent(value)}
                    tooltip={t('MainNav-contentTable')}></LockableButton>

                <SwitchButton
                    img1={minimizeSvg}
                    img2={maximizeSvg}
                    value1={false}
                    value2={true}
                    default={true}
                    tooltip1={t("MainNav-resize-tooltip1")}
                    tooltip2={t("MainNav-resize-tooltip2")}
                    onChange={(value: any) => { props.onCanvasMaximize(value) }}
                    vertical={true}
                    backgroundColor='#ffffff77'
                ></SwitchButton>

                <select className='language-select' value={Translation.getTranslation().getLang()} onChange={(event) => Translation.getTranslation().setLang(event.target.value)}>
                    {
                        langs.map((lang: any, key: number) => {
                            return (
                                <option key={key} value={lang.code}>
                                    {lang.flag}
                                </option>
                            )
                        })
                    }
                </select>

            </div>
            <Tooltip id="my-tooltip"></Tooltip>

        </nav>



    )
}

export default MainNav;