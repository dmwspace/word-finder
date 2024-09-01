import { useState, useEffect } from 'react'
import letterCubes from "../components/tiles"

export default function Hooks() {

    const [gridLetters, setGridLetters] = useState([])
    const [timeRemaining, setTimeRemaining] = useState(240)
    const [isTimeRunning, setIsTimeRunning] = useState(false)

    function startGame() {

        setGridLetters([])
        setTimeRemaining(240)
        setIsTimeRunning(true)
        
        for (let i = 0; i < 25; i++) {
            let randInt = Math.floor(Math.random() * letterCubes.length)
            let randLetterInt = Math.floor(Math.random() * letterCubes[randInt].length)
            let cubeArr = letterCubes[randInt]
            let letter = cubeArr[randLetterInt]
            setGridLetters(prevGridLetters => [...prevGridLetters, letter])
            letterCubes.splice(randInt, 1)
        }

    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)}, 1000)
        } else if (timeRemaining === 0) {
            endGame()
        }
    }, [isTimeRunning, timeRemaining])

    function endGame() {
        setIsTimeRunning(false)
    }

    function restartButtonClick() {
        startGame()
    }
    
    return (
        {
            restartButtonClick,
            startGame,
            gridLetters,
            isTimeRunning,
            timeRemaining
        }
    )


}
