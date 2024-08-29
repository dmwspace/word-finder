import Hooks from "../hooks/hooks.jsx"

function Container() {
        
    const {
        restartButtonClick
    } = Hooks()

    return (
        <>
            <div id="container">
                <div id="word-entry"><h2>Word Entry</h2></div>
                <div id="restart" onClick={restartButtonClick}>
                    <h2>Restart</h2>
                </div>
                <div id="letter-grid">
                    <div className="tile" name="zero"></div>
                    <div className="tile" name="one"></div>
                    <div className="tile" name="two"></div>
                    <div className="tile" name="three"></div>
                    <div className="tile" name="four"></div>
                    <div className="tile" name="five"></div>
                    <div className="tile" name="six"></div>
                    <div className="tile" name="seven"></div>
                    <div className="tile" name="eight"></div>
                    <div className="tile" name="nine"></div>
                    <div className="tile" name="ten"></div>
                    <div className="tile" name="eleven"></div>
                    <div className="tile" name="twelve"></div>
                    <div className="tile" name="thirteen"></div>
                    <div className="tile" name="fourteen"></div>
                    <div className="tile" name="fifteen"></div>
                    <div className="tile" name="sixteen"></div>
                    <div className="tile" name="seventeen"></div>
                    <div className="tile" name="eighteen"></div>
                    <div className="tile" name="nineteen"></div>
                    <div className="tile" name="twenty"></div>
                    <div className="tile" name="twentyone"></div>
                    <div className="tile" name="twentytwo"></div>
                    <div className="tile" name="twentythree"></div>
                    <div className="tile" name="twentyfour"></div>
                </div>
                <div id="timer"><h2>Timer</h2></div>
                <div id="answers"><h2>Answers</h2></div>
                <div id="enter"><h2>Enter</h2></div>
                <div id="undo"><h2>Undo</h2></div>
                <div id="score"><h2>Score</h2></div>
            </div>
        </>

    )
}

export default Container