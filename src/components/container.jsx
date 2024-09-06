import Hooks from "../hooks/hooks.jsx"

function Container() {
        
    const {
        restartButtonClick,
        startGame,
        gridLetters,
        isTimeRunning,
        timeRemaining,
        newWord,
        handleClick
    } = Hooks()

    let min = Math.floor(timeRemaining / 60)
    let sec = timeRemaining % 60

    let formattedTime = (timeRemaining === 0) ?
        "Time's up!" :
        ((min < 1 ? "" : min + ":") + (sec < 10 ? "0" + sec : sec))
    
    return (
        <>
            <div id="container">
                <div id="word-entry"><h2>Word Entry</h2></div>
                <div id="restart" onClick={restartButtonClick}><h2>Restart</h2></div>
                <div id="letter-grid">
                    <div 
                        className="tile" 
                        name="zero"
                        onClick={handleClick}
                    >{gridLetters[0]}</div>
                    <div 
                        className="tile" 
                        name="one"
                        onClick={handleClick}
                    >{gridLetters[1]}</div>
                    <div 
                        className="tile" 
                        name="two"
                        onClick={handleClick}
                    >{gridLetters[2]}</div>
                    <div 
                        className="tile" 
                        name="three"
                        onClick={handleClick}
                    >{gridLetters[3]}</div>
                    <div 
                        className="tile" 
                        name="four"
                        onClick={handleClick}
                    >{gridLetters[4]}</div>
                    <div 
                        className="tile" 
                        name="five"
                        onClick={handleClick}
                    >{gridLetters[5]}</div>
                    <div 
                        className="tile" 
                        name="six"
                        onClick={handleClick}
                    >{gridLetters[6]}</div>
                    <div 
                        className="tile" 
                        name="seven"
                        onClick={handleClick}
                    >{gridLetters[7]}</div>
                    <div 
                        className="tile" 
                        name="eight"
                        onClick={handleClick}
                    >{gridLetters[8]}</div>
                    <div 
                        className="tile" 
                        name="nine"
                        onClick={handleClick}
                    >{gridLetters[9]}</div>
                    <div 
                        className="tile" 
                        name="ten"
                        onClick={handleClick}
                    >{gridLetters[10]}</div>
                    <div 
                        className="tile" 
                        name="eleven"
                        onClick={handleClick}
                    >{gridLetters[11]}</div>
                    <div 
                        className="tile" 
                        name="twelve"
                        onClick={handleClick}
                    >{gridLetters[12]}</div>
                    <div 
                        className="tile" 
                        name="thirteen"
                        onClick={handleClick}
                    >{gridLetters[13]}</div>
                    <div 
                        className="tile" 
                        name="fourteen"
                        onClick={handleClick}
                    >{gridLetters[14]}</div>
                    <div 
                        className="tile" 
                        name="fifteen"
                        onClick={handleClick}
                    >{gridLetters[15]}</div>
                    <div 
                        className="tile" 
                        name="sixteen"
                        onClick={handleClick}
                    >{gridLetters[16]}</div>
                    <div 
                        className="tile" 
                        name="seventeen"
                        onClick={handleClick}
                    >{gridLetters[17]}</div>
                    <div 
                        className="tile" 
                        name="eighteen"
                        onClick={handleClick}
                    >{gridLetters[18]}</div>
                    <div 
                        className="tile" 
                        name="nineteen"
                        onClick={handleClick}
                    >{gridLetters[19]}</div>
                    <div 
                        className="tile" 
                        name="twenty"
                        onClick={handleClick}
                    >{gridLetters[20]}</div>
                    <div 
                        className="tile" 
                        name="twentyone"
                        onClick={handleClick}
                    >{gridLetters[21]}</div>
                    <div 
                        className="tile" 
                        name="twentytwo"
                        onClick={handleClick}
                    >{gridLetters[22]}</div>
                    <div 
                        className="tile" 
                        name="twentythree"
                        onClick={handleClick}
                    >{gridLetters[23]}</div>
                    <div 
                        className="tile" 
                        name="twentyfour"
                        onClick={handleClick}
                    >{gridLetters[24]}</div>
                </div>
                <div id="timer"><h2>{formattedTime}</h2> </div>
                <div id="answers"><h2>Answers</h2></div>
                <div id="enter"><h2>Enter</h2></div>
                <div id="undo"><h2>Undo</h2></div>
                <div id="score"><h2>Score</h2></div>
            </div>
        </>

    )
}

export default Container