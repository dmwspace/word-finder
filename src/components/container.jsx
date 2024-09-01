import Hooks from "../hooks/hooks.jsx"

function Container() {
        
    const {
        restartButtonClick,
        startGame,
        gridLetters,
        isTimeRunning,
        timeRemaining
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
                    <div className="tile" name="zero">{gridLetters[0]}</div>
                    <div className="tile" name="one">{gridLetters[1]}</div>
                    <div className="tile" name="two">{gridLetters[2]}</div>
                    <div className="tile" name="three">{gridLetters[3]}</div>
                    <div className="tile" name="four">{gridLetters[4]}</div>
                    <div className="tile" name="five">{gridLetters[5]}</div>
                    <div className="tile" name="six">{gridLetters[6]}</div>
                    <div className="tile" name="seven">{gridLetters[7]}</div>
                    <div className="tile" name="eight">{gridLetters[8]}</div>
                    <div className="tile" name="nine">{gridLetters[9]}</div>
                    <div className="tile" name="ten">{gridLetters[10]}</div>
                    <div className="tile" name="eleven">{gridLetters[11]}</div>
                    <div className="tile" name="twelve">{gridLetters[12]}</div>
                    <div className="tile" name="thirteen">{gridLetters[13]}</div>
                    <div className="tile" name="fourteen">{gridLetters[14]}</div>
                    <div className="tile" name="fifteen">{gridLetters[15]}</div>
                    <div className="tile" name="sixteen">{gridLetters[16]}</div>
                    <div className="tile" name="seventeen">{gridLetters[17]}</div>
                    <div className="tile" name="eighteen">{gridLetters[18]}</div>
                    <div className="tile" name="nineteen">{gridLetters[19]}</div>
                    <div className="tile" name="twenty">{gridLetters[20]}</div>
                    <div className="tile" name="twentyone">{gridLetters[21]}</div>
                    <div className="tile" name="twentytwo">{gridLetters[22]}</div>
                    <div className="tile" name="twentythree">{gridLetters[23]}</div>
                    <div className="tile" name="twentyfour">{gridLetters[24]}</div>
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