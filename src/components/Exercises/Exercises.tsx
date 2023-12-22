import { useState, useRef, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import './style.scss'
import tutorialMD from '../../exercises/tutorial/tutorial.md?raw'
import arrowSvg from "./assets/arrow.svg"
import WorkspaceButton from '../WorkspaceButton/WorkspaceButton'

enum Level {
    basic = "Basic",
    easy = "Easy",
    medium = "Medium",
    hard = "Hard"
}

export interface IExercise {
    title: string,
    mdFile: string,
    lvl: Level
}

const EXERCISES : Array<IExercise> = [
    {
        title: "Bloc programming",
        mdFile: tutorialMD,
        lvl: Level.basic
    },{
        title: "1D Game of Life",
        mdFile: tutorialMD,
        lvl: Level.easy
    }

]

type ExercisesProps = {

}

type ExerciseProps = {
    exercise: IExercise
}

const Exercise = (props: ExerciseProps) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className='Exercise' style={{
            height: isOpen ? "80vh" : "50px",
            backgroundColor: isOpen ? "rgba(200, 200, 255, 0.2)" : ""  
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
                    <
                    <Markdown>{tutorialMD}</Markdown>
                </div>
            }
        </div>
    )
}

const Exercises = (props: ExercisesProps) => {

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