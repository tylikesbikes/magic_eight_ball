import React, {useState} from 'react';

const DEFAULT_MSG = 'Ask me a question';
const DEFAULT_COLOR = 'black';

function getRandomElementFromArray(arr) {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
}

const EightBall = ({answers}) => {
    let [msg, setMsg] = useState(DEFAULT_MSG);
    let [color, setColor] = useState(DEFAULT_COLOR);
    let [redCount, setRed] = useState(0);
    let [orangeCount, setOrange] = useState(0);
    let [greenCount, setGreen] = useState(0);

    function incrementColor(color) {
        switch(color) {
            case 'red':
                setRed(redCount+1);
                return 0;
            case 'green':
                setGreen(greenCount+1);
                return 0;
            case 'goldenrod':
                setOrange(orangeCount+1);
            default:
                return 0;
        }
    }

    function resetColors() {
        setRed(0);
        setGreen(0);
        setOrange(0);
    }

    function askEightBall() {
        const ans = getRandomElementFromArray(answers);
        setMsg(ans.msg);
        setColor(ans.color);
        incrementColor(ans.color);
    }

    function resetEightBall() {
        setMsg(DEFAULT_MSG);
        setColor(DEFAULT_COLOR);
        resetColors();
    }

    return (

        <div className = "eightBallContainer">
            <div className = {`eightBall ${color}`}>
                <div className = "eightBallMessage">
                    {msg}
                </div>
            </div>
            <div className = "eightBall-Buttons">
                <button className="eightBall-ShakeButton" onClick={askEightBall}>Ask the Magic Eight Ball</button>
                <button className="eightBall-ResetButton" onClick={resetEightBall}>Reset the Magic Eight Ball</button>
            </div>
            <div className= "eightBall-Stats">
                <span id="green">Green Count: {greenCount}</span>
                <span id="orange">Orange Count: {orangeCount}</span>
                <span id="red">Red Count: {redCount}</span>
                
                
            </div>

        </div>
    );
};

export default EightBall;