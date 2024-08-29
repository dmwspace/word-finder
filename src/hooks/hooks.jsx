import {useState} from 'react'
import letterCubes from "../components/tiles"

export default function Hooks() {

    const [gridLetters, setGridLetters] = useState([])

    //console.log('tileOrder: ', tileOrder)

    function startGame() {
        setGridLetters([])
        //const gridArr = []
        
        for (let i = 0; i < 25; i++) {
            let randInt = Math.floor(Math.random() * letterCubes.length)
            let randLetterInt = Math.floor(Math.random() * letterCubes[randInt].length)
            let cubeArr = letterCubes[randInt]
            //console.log('cubeArr: ', cubeArr)
            //console.log('cubeArr: ', cubeArr)
            let letter = cubeArr[randLetterInt]
            //console.log('letter: ', letter)
            setGridLetters(prevGridLetters => [...prevGridLetters, letter])
            //console.log('letter: ', letter)
            //gridArr.push(letter)
            letterCubes.splice(randInt, 1)
            //console.log('letterCubes: ', letterCubes)
            //console.log('tileOrder: ', tileOrder)
            //letterCubes.splice(randInt, 1)
        }
        //setGridLetters(gridArr)
        //console.log('gridLetters: ', gridLetters)
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
