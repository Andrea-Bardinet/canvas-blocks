import { useState } from 'react'
import playSvg from './assets/play.svg'
// import editorSvg from './assets/editor.svg'
import minimizeSvg from './assets/minimize.svg'
import maximizeSvg from './assets/maximize.svg'
import importSvg from './assets/import.svg'
import exportSvg from './assets/export.svg'
import tableSvg from "./assets/table.svg"
import infoSvg from "./assets/info.svg"
import deleteSvg from "./assets/delete.svg"
import SwitchButton from "../SwitchButton/SwitchButton"

import './style.scss'
import LockableButton from '../LockableButton/LockableButton'
import Exercises from '../Exercises/Exercises'
import oakLogBg from '../../assets/textures/oak_log.png'
import ochreFroglight from '../../assets/textures/ochre_froglight_top.png'
import { Translation, langs } from '../../langs/translation'
import FileSaver from 'file-saver'
import { SingletonBlockly } from '../Blockly/Blockly'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const t: Function = Translation.translate;
const MySwal = withReactContent(Swal)

const infos = () => {
    MySwal.fire({
        title: t("information"),
        html: <>
            <a href='https://github.com/Andrea-Bardinet/canvas-blocks'>{t("information_github")}</a>
            {/* <p>{t("information_content")} <a href='http://andreabardinet.fr'>Andréa Bardinet</a></p> */}
        </>,

    })
}

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

    const onSizeEvent = (value: boolean) => {
        setSizeState(value)
        props.onSizeEvent(value)
    }

    const importXML = () => {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
            let file = Array.from(input.files ?? [])[0];
            if (!file) return;
            let reader = new FileReader();
            reader.onload = _ => {
                SingletonBlockly.getBlockly().setXml(reader.result as string);
            };
            reader.readAsText(file);

        };
        input.click();
    }

    const exportXML = () => {
        var blob = new Blob([SingletonBlockly.getBlockly().getXml()], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, "workspace.xml");
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

                <div className='nav-button'
                    onClick={() => { importXML() }}
                    style={{ backgroundImage: `url(${ochreFroglight})` }}>
                    <img src={importSvg}  //onClick={() => props.onClickExecute()} 
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={t('MainNav-import')}
                    ></img>
                </div>

                <div className='nav-button'
                    onClick={() => { exportXML() }}
                    style={{ backgroundImage: `url(${ochreFroglight})` }}>
                    <img src={exportSvg}  //onClick={() => props.onClickExecute()} 
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={t('MainNav-export')}
                        style={{ rotate: "-90deg" }}

                    ></img>
                </div>

                <div className='nav-button'
                    onClick={() => { SingletonBlockly.getBlockly().clearWorkspace() }}
                    style={{ backgroundImage: `url(${ochreFroglight})` }}>
                    <img src={deleteSvg}  //onClick={() => props.onClickExecute()} 
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={t('MainNav-clear')}
                        // style={{ rotate: "-90deg" }}
                    ></img>
                </div>

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

                <select className='language-select'
                    value={Translation.getTranslation().getLang().code}
                    onChange={(event) => Translation.getTranslation().setLang(event.target.value)}
                    data-tooltip-id='my-tooltip'
                    data-tooltip-content={t('MainNav-language')}>
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

                <button onClick={() => {
                    infos()
                }}
                    data-tooltip-id='my-tooltip'
                    data-tooltip-content={t('MainNav-info')}>
                    <img src={infoSvg}  ></img>
                </button>
            </div>


        </nav>
    )
}

export default MainNav;