import { useState, useEffect } from 'react'
import letterCubes from "../components/tiles"

export default function Hooks() {

    const [gridLetters, setGridLetters] = useState([])
    const [timeRemaining, setTimeRemaining] = useState(240)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [newWord, setNewWord] = useState("")
    const [buttonLetters, setButtonLetters] = useState([])
    const [usedButtons, setUsedButtons] = useState([])
    const [prevName, setPrevName] = useState("")
    const [submittedWord, setSubmittedWord] = useState([])
    const [wordCount, setWordCount] = useState(0)
    const [pointCount, setPointCount] = useState(0)
    const [buttonStyle, setButtonStyle] = useState(
        {
            zero: "button",
            one: "button",
            two: "button",
            three: "button",
            four: "button",
            five: "button",
            six: "button",
            seven: "button",
            eight: "button",
            nine: "button",
            ten: "button",
            eleven: "button",
            twelve: "button",
            thirteen: "button",
            fourteen: "button",
            fifteen: "button",
            sixteen: "button",
            seventeen: "button",
            eighteen: "button",
            nineteen: "button",
            twenty: "button",
            twentyone: "button",
            twentytwo: "button",
            twentythree: "button",
            twentyfour: "button"
        })

    function startGame() {

        setUsedButtons([])
        setButtonLetters([])
        setNewWord("")
        setSubmittedWord([])
        resetStyle()
        setTimeRemaining(180)
        setIsTimeRunning(true)
        setWordCount(0)
        setPointCount(0)
                
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

    function handleClick(e) {
        const {name, value} = e.target
        if (usedButtons.length === 0) {
                setNewWord(lowerCase)
                setUsedButtons([...usedButtons, name])
                setPrevName(name)
                setButtonStyle(prevStyle => ({...prevStyle, [name]: "clicked-button"}))
        } else if ((!usedButtons.includes(name)) && (legalMoves[`${name}`].includes(`${prevName}`))) {
            setNewWord(prevState => prevState + lowerCase)
            setUsedButtons([...usedButtons, name])
            setPrevName(name)
            setButtonStyle(prevStyle => ({...prevStyle, [name]: "clicked-button"}))
        } else {}
    }

    function endGame() {
        setIsTimeRunning(false)
    }

    function restartButtonClick() {
        startGame()
    }

    function resetStyle() {
        for (let key in buttonStyle) {
            setButtonStyle(prevStyle => ({...prevStyle, [key]: "button"}))
        }       
    }
    
    return (
        {
            restartButtonClick,
            startGame,
            gridLetters,
            isTimeRunning,
            timeRemaining,
            newWord,
            handleClick
        }
    )


}
