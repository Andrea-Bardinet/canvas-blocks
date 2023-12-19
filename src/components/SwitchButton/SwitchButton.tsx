import { useState} from 'react'
import { Tooltip } from 'react-tooltip';
import './style.css'

interface SwitchButtonProps {
    img1: string,
    img2: string,
    value1: any,
    value2: any,
    default: boolean,
    tooltip1: string,
    tooltip2: string,
    onChange: Function | undefined
}

const SwitchButton = (props: SwitchButtonProps) => {

    const [active, setActive] = useState(props.default)

    const clickEvent = (value : any) => {
        setActive(value)
        if(props.onChange !== undefined){
            props.onChange(!value?props.value1:props.value2)
        }
    }

    return (
        <>
            <div className='SwitchButton'>
                <img src={props.img1}
                    className={!active ? "active" : ""}
                    onClick={() => { clickEvent(false) }}
                    data-tooltip-id="my-tooltip" 
                    data-tooltip-content={props.tooltip1}
                ></img>

                <img src={props.img2}
                    className={active ? "active" : ""}
                    onClick={() => { clickEvent(true) }}
                    data-tooltip-id="my-tooltip" 
                    data-tooltip-content={props.tooltip2}
                ></img>

            </div>
            <Tooltip id="my-tooltip" />
        </>
    )
}

export default SwitchButton;