import { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx'
import './style.scss'
import arrowSvg from "./assets/arrow.svg"
import { SingletonBlockly } from '../Blockly/Blockly'
import WorkspaceXML from '../../utils/default-xml'
import stoneBrickBg from '../../assets/textures/stone_bricks.png'
import oakPlanksBg from '../../assets/textures/oak_planks.png'
import { Translation } from '../../langs/translation'

const t: Function = Translation.translate;

enum Level {
    basic = "Basic",
    easy = "Easy",
    medium = "Medium",
    hard = "Hard"
}

export interface IExercise {
    title: Function,
    mdFile: string,
    lvl: Level,
    workspace: string
}

const EXERCISES: Array<IExercise> = [
    {
        title: ()=>t("block_programming"),
        mdFile: "tutorial",
        lvl: Level.basic,
        workspace: WorkspaceXML.tutorial
    },
    {
        title: ()=>t("moving_fade"),
        mdFile: "moving-fade",
        lvl: Level.easy,
        workspace: WorkspaceXML.movingFade
    },
    {
        title: ()=>t("1DGameOfLife"),
        mdFile: "1DGameOfLife",
        lvl: Level.medium,
        workspace: WorkspaceXML.gameOfLife1D
    },
    {
        title: ()=>t("Guess_the_number"),
        mdFile: "guess-the-number",
        lvl: Level.easy,
        workspace: WorkspaceXML.plusOuMoins
    },
]

type ExerciseProps = {
    exercise: IExercise
}

const Exercise = (props: ExerciseProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [md, setMd] = useState<string>("")

    const onWorkspaceButtonClick = (xml: string) => {
        let blockly = SingletonBlockly.getBlockly()
        blockly.setXml(xml)
    }

    const getMd =() => Translation.getExercise(props.exercise.mdFile,setMd)

    useEffect(()=>{
       Translation.getTranslation().addOnChangeCallback(getMd) 
    },[])

    useEffect(() => {  
        if(isOpen)
            getMd()
    },[isOpen])

    return (
        <div className='Exercise' style={{
            height: isOpen ? "100%" : "50px",
            overflowY: isOpen ? "scroll" : "hidden",
            backgroundImage: `url(${oakPlanksBg})`
        }}>
            <div
                className='ExerciseTitle'
                onClick={() => setIsOpen(!isOpen)}>
                <h1>{props.exercise.title()}</h1>
                <img src={arrowSvg}
                    className={isOpen ? "flip" : ""}
                ></img>
            </div>
            {
                <div className='MD'>
                    <button onClick={() => onWorkspaceButtonClick(props.exercise.workspace)}>{t("Exercise-import-workspace") + " ➡️"}</button>
                    <Markdown>{md}</Markdown>
                </div>
            }
        </div>
    )
}

const Exercises = (/* props: ExercisesProps */) => {

    return (
        <div className='Exercises'
            style={{
                backgroundImage: `url(${stoneBrickBg})`
            }}>
            {
                EXERCISES.map((exercise: IExercise, key: number) => {
                    return (
                        <Exercise key={key} exercise={exercise}></Exercise>
                    )
                })
            }
        </div>
    )
}

export default Exercises;