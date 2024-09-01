import {useState} from 'react'
import letterCubes from "../components/tiles"

export default function Hooks() {

    const [gridLetters, setGridLetters] = useState([])

    function startGame() {

        setGridLetters([])
        
        for (let i = 0; i < 25; i++) {
            let randInt = Math.floor(Math.random() * letterCubes.length)
            let randLetterInt = Math.floor(Math.random() * letterCubes[randInt].length)
            let cubeArr = letterCubes[randInt]
            let letter = cubeArr[randLetterInt]
            setGridLetters(prevGridLetters => [...prevGridLetters, letter])
            letterCubes.splice(randInt, 1)
        }

    }

    function restartButtonClick() {
        startGame()
    }
    
    return (
        {
            restartButtonClick,
            startGame,
            gridLetters,
        }
    )


}
