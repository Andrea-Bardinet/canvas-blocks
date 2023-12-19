import { useState } from 'react'
import { Tooltip } from 'react-tooltip';
import './style.css'


interface LockableButtonProps {
    img: string,
    tooltip: string | undefined,
    onChange: Function,
    default: boolean
}

const LockableButton = (props: LockableButtonProps) => {

    const [isLocked, setIsLocked] = useState(props.default)

    const clickEvent = () => {
        props.onChange(!isLocked)
        setIsLocked(!isLocked)
    }

    return (
        <>
            <div className={'LockableButton ' + (isLocked ? "LockableButtonActive" : "")} onClick={clickEvent}>
                <img src={props.img}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={props.tooltip}

                ></img>
            </div>
            <Tooltip id="my-tooltip" />

        </>
    )
}

export default LockableButton;

// Example
// <LockableButton
// tooltip=''
// onChange={(value: boolean) => { setIsTerminal(value) }}
// img={terminalSvg}
// default={isTerminal}
// ></LockableButton> 