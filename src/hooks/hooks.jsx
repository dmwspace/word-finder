import {useState} from 'react'
import letterCubes from "../components/tiles";

export default function Hooks() {

    const [tileOrder, setTileOrder] = useState([])
    // const [cubeArr, setCubeArr] = useState(letterCubes)

    function restartButtonClick() {
        let gridArr = []
                
        for (let i = 0; i < 25; i++) {
            let randInt = Math.floor(Math.random() * letterCubes.length)
            let randLetterInt = Math.floor(Math.random() * letterCubes[randInt].length)
            let cubeArr = letterCubes[randInt]
            gridArr.push(cubeArr[randLetterInt])
            letterCubes.splice(randInt, 1)
        }
        console.log(gridArr)

    }
    
    return (
        {
            restartButtonClick
        }
    )


}
