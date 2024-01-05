import { useState } from 'react'
import Markdown from 'markdown-to-jsx'
import './style.scss'
import tutorialMD from '../../exercises/tutorial/tutorial.md?raw'
import movingFadeMD from '../../exercises/easy/moving-fade.md?raw'
import arrowSvg from "./assets/arrow.svg"
import { SingletonBlockly } from '../Blockly/Blockly'
import WorkspaceXML from '../../utils/default-xml'


enum Level {
    basic = "Basic",
    easy = "Easy",
    medium = "Medium",
    hard = "Hard"
}

export interface IExercise {
    title: string,
    mdFile: string,
    lvl: Level,
    workspace: string
}

const EXERCISES : Array<IExercise> = [
    {
        title: "Bloc programming",
        mdFile: tutorialMD,
        lvl: Level.basic,
        workspace: WorkspaceXML.tutorial
    },
    {
        title: "Moving fade",
        mdFile: movingFadeMD,
        lvl: Level.easy,
        workspace: WorkspaceXML.movingFade
    },
    {
        title: "1D Game of Life",
        mdFile: tutorialMD,
        lvl: Level.easy,
        workspace: WorkspaceXML.gameOfLife1D
    }

]


type ExerciseProps = {
    exercise: IExercise
}

const Exercise = (props: ExerciseProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onWorkspaceButtonClick = (xml : string)=>{
        let blockly = SingletonBlockly.getBlockly()
        blockly.setXml(xml)
    }

    return (
        <div className='Exercise' style={{
            height: isOpen ? "100%" : "50px",
            backgroundColor: isOpen ? "rgba(200, 200, 255, 0.2)" : "",
            overflowY: isOpen?"scroll":"hidden"
        }}
        // onClick={() => (isOpen?()=>{}:setIsOpen(!isOpen))}
        >
            <div
            className='ExerciseTitle'
             onClick={()=>setIsOpen(!isOpen)}>
                <h1>{props.exercise.title}</h1>
                <img src={arrowSvg}
                    className={isOpen ? "flip" : ""}
                    ></img>
            </div>
            {
                <div className='MD'>
                    <button onClick={()=>onWorkspaceButtonClick(props.exercise.workspace)}>Importer le workspace ➡️</button>
                    <Markdown>{props.exercise.mdFile}</Markdown>
                </div>
            }
        </div>
    )
}

const Exercises = (/* props: ExercisesProps */) => {

    return (
        <div className='Exercises'>
            {
                EXERCISES.map((exercise: IExercise,key: number)=>{
                    return (
                        <Exercise key={key} exercise={exercise}></Exercise>
                    )
                })
            }
        </div>
    )
}

export default Exercises;