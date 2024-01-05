import { useEffect, useState } from "react";
import format from "date-fns/format";
import './style.css'
// import openSvg from "./assets/open-terminal.svg"

interface TerminalProps {
    onMount: Function,
    isOpenDefault: boolean
}

export interface ITerminal {
    execute: Function
}

declare global {
    interface Window {
        nbTerminalLine: number;
        addTerminalLine: Function
    }
}

const MAX_LINES = 100;


window.nbTerminalLine = 0

window.addTerminalLine = (str: string) => {
    const terminalLines = document.getElementById("TerminalLines")
    if (!terminalLines) return

    let date = format(Date.now(), "HH:mm:ss")
    if (window.nbTerminalLine > MAX_LINES) {
        if (terminalLines.firstElementChild)
            terminalLines.removeChild(terminalLines.firstElementChild);
    } else {
        window.nbTerminalLine++
    }

    terminalLines.innerHTML = `` + terminalLines?.innerHTML + `
    <div class="TerminalLine">
            <div>${date}</div>
            <div>${str}</div>
        </div>`

    return
    return (
        <div className="TerminalLine">
            <div>${date}</div>
            <div>${str}</div>
        </div>
    )
}




const ReactTerminal = (props: TerminalProps) => {


    const [isOpen,] = useState(props.isOpenDefault)

    const execute = (code: string) => {
        eval(code)
    }

    useEffect(() => {
        props.onMount({
            execute
        } as ITerminal)
    }, [])

    return (
        <div className={"Terminal " + (isOpen ? "TerminalOpen " : "TerminalClose")}>
            <div className="TerminalBanner">
                <h1>Terminal  </h1>
                {/* <img src={openSvg}
                    className={"TerminalImage" + (isOpen ? " TerminalImageFlip" : "")}
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}></img> */}

            </div>
            <div className="TerminalLines" id="TerminalLines"></div>
        </div>
    );
};


export default ReactTerminal;