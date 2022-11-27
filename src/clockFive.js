import { type } from '@testing-library/user-event/dist/type';
import useSound from 'use-sound';
import successBell from './sounds/success-bell.wav';
import failureSound from './sounds/failure-wrong-action.wav'
import gameStart from './sounds/game-start.wav'
import stopSound from './sounds/congrats.wav';
import {useEffect, useState } from 'react';
import Coin from './coin'

function ClockFive() {
    const [count, countSet] = useState(0);
    const [countPass, countPassSet] = useState(false);
    const [changeTotal, changeTotalSet] = useState("N/A");
    const [genNumber, changeGenNumber] = useState("N/A");
    const [genNumberCost, changeGenCost] = useState(0);
    const [genNumberCostDiff, changeGenDiff] = useState(0); 
    const [numCorrect, getNumCorrect] = useState("N/A");
    const [finalNumCorrect, getFinalNum] = useState("N/A");
    const [finalTime, finalTimeSet] = useState("N/A");
    const [intervalNum, finalIntNum] = useState("No input detected.");
    const [useInterval, setUseInterval] = useState(false);
    const [diff, setDiff] = useState(1);
    const [timeMax, setTimeMax] = useState("No input detected.");
    const [showOne, setShowOne] = useState(true);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showFive, setShowFive] = useState(false);
    const [errorVal, setErrorVal] = useState("N/A");
    const [personImage, setPersonImage] = useState(0);
    const [foodImage, setFoodImage] = useState(0);
    const [showTimer, setShowTimer] = useState(false);
    const [showSix, setShowSix] = useState(true);
    const [diffTwo, setDiffTwo] = useState(0);
    let interval;
    const [play] = useSound(successBell);
    const [playWrong] = useSound(failureSound);
    const [playEnd] = useSound(stopSound);
    const [playStart] = useSound(gameStart);
    useEffect(() => {
        if (countPass === true){
            if ((isNaN(intervalNum) == true && isNaN(timeMax) == true) || (intervalNum != numCorrect && timeMax != count)){
            interval = setTimeout(() => countSet(count + 1), 1000)
            }
            else{
                countSet(0)
                onAndOffSwitch(true)
            }
        }
        else{
            countSet(0)
        }
    }, [count]);
    const imageChange = () => {
        let randomPerson = Math.floor(Math.random()*11);
        setPersonImage(randomPerson)
        let randomFood = Math.floor(Math.random()*10);
        setFoodImage(randomFood)
    }
    const onAndOffSwitch = countPass => {
        if (countPass === false){
            if (isNaN(intervalNum) == false && intervalNum != "") {
                finalIntNum(parseInt(intervalNum))
                setUseInterval(true)
            }
            countPassSet(true)
            setTimeout(() => countSet(count + 1), 1000)
            changeTotalSet(0)
            generateNumber()
            getNumCorrect(0)
            finalTimeSet("N/A")
            getFinalNum("N/A")
            setShowOne(false)
            setShowTwo(false)
            if (showTimer == true){
                setShowSix(false)
            }
            imageChange()
            playStart()
        }
        else{
            setUseInterval(false)
            finalTimeSet(count)
            getFinalNum(numCorrect)
            countPassSet(false)
            clearTimeout(interval)
            changeGenCost(0)
            changeGenDiff(0)
            countSet(0)
            changeTotalSet("N/A")
            changeGenNumber("N/A")
            getNumCorrect("N/A")
            setShowOne(true)
            setShowTwo(true)
            setShowThree(false)
            setShowFour(false)
            setShowFive(false)
            setShowSix(true)
            playEnd()
        }
    }
    const addChange = value => {
        if (changeTotal != "N/A"){
            if ((100*(genNumber - parseFloat(changeTotal, 10))).toFixed(2) % 5 != 0){
                if(value == .01){
                    let newValue = (parseFloat(changeTotal, 10) + value).toFixed(2)
                    changeTotalSet(newValue)
                    setShowThree(false)
                    setShowFour(false)
                    setShowFive(false)
                }
                else{
                    playWrong()
                    setErrorVal("$.01")
                    setShowFour(false)
                    if (value > .01){
                        setShowThree(false)
                        setShowFive(true)
                    }
                    else{
                        setShowThree(true)
                        setShowFive(false)
                    }
                }
            }
            else if (((100*(genNumber - parseFloat(changeTotal, 10))).toFixed(2) % 25 == 5 || (100*(genNumber - parseFloat(changeTotal, 10)).toFixed(2) % 25 == 15))){
                if(value == .05){
                    let newValue = (parseFloat(changeTotal, 10) + value).toFixed(2)
                    changeTotalSet(newValue)
                    setShowThree(false)
                    setShowFour(false)
                    setShowFive(false)
                }
                else{
                    playWrong()
                    setErrorVal("$.05")
                    setShowFour(false)
                    if (value > .05){
                        setShowThree(false)
                        setShowFive(true)
                    }
                    else{
                        setShowThree(true)
                        setShowFive(false)
                    }
                }
            }
            else if ((100*(genNumber - parseFloat(changeTotal, 10))).toFixed(2) % 25 != 0){
                if(value == .1){
                    let newValue = (parseFloat(changeTotal, 10) + value).toFixed(2)
                    changeTotalSet(newValue)
                    setShowThree(false)
                    setShowFour(false)
                }
                else{
                    playWrong()
                    setErrorVal("$.1")
                    setShowFour(false)
                    if (value > .1){
                        setShowThree(false)
                        setShowFive(true)
                    }
                    else{
                        setShowThree(true)
                        setShowFive(false)
                    }
                }
            }
            else if ((100*(genNumber - parseFloat(changeTotal, 10))).toFixed(2) % 100 != 0){
                if(value == .25){
                    let newValue = (parseFloat(changeTotal, 10) + value).toFixed(2)
                    changeTotalSet(newValue)
                    setShowThree(false)
                    setShowFour(false)
                }
                else{
                    playWrong()
                    setErrorVal("$.25")
                    setShowFour(false)
                    if (value > .25){
                        setShowThree(false)
                        setShowFive(true)
                    }
                    else{
                        setShowThree(true)
                        setShowFive(false)
                    }
                }
            }
            else if ((100*(genNumber - parseFloat(changeTotal, 10))).toFixed(2) % 500 != 0){
                if(value == 1){
                    let newValue = (parseFloat(changeTotal, 10) + value).toFixed(2)
                    changeTotalSet(newValue)
                    setShowThree(false)
                    setShowFour(false)
                }
                else{
                    playWrong()
                    setErrorVal("$1")
                    setShowFour(false)
                    if (value > 1){
                        setShowThree(false)
                        setShowFive(true)
                    }
                    else{
                        setShowThree(true)
                        setShowFive(false)
                    }
                }
            }
            else if ((100*(genNumber - parseFloat(changeTotal, 10))).toFixed(2) % 1000 != 0){
                if(value == 5){
                    let newValue = (parseFloat(changeTotal, 10) + value).toFixed(2)
                    changeTotalSet(newValue)
                    setShowThree(false)
                    setShowFour(false)
                }
                else{
                    playWrong()
                    setErrorVal("$5")
                    setShowFour(false)
                    if (value > 5){
                        setShowThree(false)
                        setShowFive(true)
                    }
                    else{
                        setShowThree(true)
                        setShowFive(false)
                    }
                }
            }
            else if ((100*(genNumber - parseFloat(changeTotal, 10))).toFixed(2) % 2000 != 0){
                if(value == 10){
                    let newValue = (parseFloat(changeTotal, 10) + value).toFixed(2)
                    changeTotalSet(newValue)
                    setShowThree(false)
                    setShowFour(false)
                }
                else{
                    playWrong()
                    setErrorVal("$10")
                    setShowFour(false)
                    if (value > 1){
                        setShowThree(false)
                        setShowFive(true)
                    }
                    else{
                        setShowThree(true)
                        setShowFive(false)
                    }
                }
            }
            else if ((genNumber - parseFloat(changeTotal, 10)).toFixed(2) >= 20){
                if(value == 20){
                    let newValue = (parseFloat(changeTotal, 10) + value).toFixed(2)
                    changeTotalSet(newValue)
                    setShowThree(false)
                    setShowFour(false)
                }
                else{
                    playWrong()
                    setErrorVal("$20")
                    setShowFour(false)
                    if (value > 20){
                        setShowThree(false)
                        setShowFive(true)
                    }
                    else{
                        setShowThree(true)
                        setShowFive(false)
                    }
                }
            }
            else{
                playWrong()
                setErrorVal("$0")
                setShowThree(false)
                setShowFour(false)
                setShowFive(true)
            }
        }
    }
    const difficulty = value => {
        if (countPass == false){
        setDiff(value)
        }
    }
    const timerSwitch = value => {
        setShowTimer(value)
    }
    const generateNumber = () => {
        let valDiff = 0
        if (diff == 1){
            valDiff = 200
        }
        else if (diff == 2){
            valDiff = 1000
        }
        else if (diff == 3){
            valDiff = 5000
        }
        let newCost = 0
        let newCostTwo = 0
        let newCostDiff = 0
        if (diffTwo == 0){
            newCost = Math.floor(Math.random()*valDiff)/100;
            newCostTwo = Math.floor(Math.random()*valDiff)/100 + newCost;
        }
        else if (diffTwo == 1){
            newCost = Math.floor(Math.random()*valDiff)/100;
            newCostDiff = Math.ceil(Math.floor(Math.random()*valDiff)/100 + newCost);
            newCostTwo = newCostDiff - newCost;
        }
        else{
            newCost = Math.ceil(Math.floor(Math.random()*valDiff)/100);
            newCostDiff = Math.ceil(Math.floor(Math.random()*valDiff)/100 + newCost);
            newCostTwo = newCostDiff - newCost;
        }
        if (useInterval == false){
            changeGenNumber(newCost);
            changeGenCost(newCostTwo.toFixed(2));
            changeGenDiff((newCostTwo + newCost).toFixed(2));
        }
        else{
            if (intervalNum == numCorrect){
                onAndOffSwitch(countPass)
            }
            else{
                changeGenNumber(newCost);
                changeGenCost(newCostTwo.toFixed(2));
                changeGenDiff((newCostTwo + newCost).toFixed(2));
            }
        }
    }
    const diffTwoChange = value => {
        if (countPass == false){
            setDiffTwo(value)
        }
    }
    const checkCorrect = () => {
        if (changeTotal != "N/A"){
        if (changeTotal == genNumber){
            getNumCorrect(numCorrect + 1)
            play()
            setShowThree(false)
            setShowFour(false)
            setShowFive(false)
            changeTotalSet(0)
            generateNumber()
            imageChange()
        }
        else{
            playWrong()
            setShowThree(false)
            setShowFour(true)
            setShowFive(false)
        }
    }
    }
    const onKeyPress = (e) => {
        if (e.key == 't'){
            onAndOffSwitch(countPass)
        }
        else if (e.key == 'c'){
            checkCorrect()
        }
        else if (e.key == 'q'){
            addChange(1)
        }
        else if (e.key == 'w'){
            addChange(5)
        }
        else if (e.key == 'e'){
            addChange(10)
        }
        else if (e.key == 'r'){
            addChange(20)
        }
        else if (e.key == 'a'){
            addChange(.25)
        }
        else if (e.key == 's'){
            addChange(.1)
        }
        else if (e.key == 'd'){
            addChange(.05)
        }
        else if (e.key == 'f'){
            addChange(.01)
        }
    }
    return(
        <>
        <div onKeyDown={(e) => onKeyPress(e)}>
        <div style = {{margin: '0px'}}>
            <button className = "Time-button" onClick={() => onAndOffSwitch(countPass)}>
                Start/Stop
            </button>
        </div>
        <div style = {showTwo ? {margin: '20px', fontWeight: 'bold', fontSize: '40px'} : {display: 'none'}}>
            You have completed {finalNumCorrect} transactions in {finalTime} seconds!
        </div>
        <div className="Timer" style = {showSix ? {display: 'none'} : {}}>
            Timer: {count}
        </div>
        <div style = {showOne ? {display:'none'} : {display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={require('./images/6Big8Gjc8.png')} height = {150} style = {foodImage == 0 ? {margin: '10px'} : {display: 'none'}}></img>
        <img src={require('./images/8i68RAjLT.png')} height = {150} style = {foodImage == 1 ? {margin: '10px'} : {display: 'none'}}></img>
        <img src={require('./images/8TEjrK7jc.png')} height = {150} style = {foodImage == 2 ? {margin: '10px'} : {display: 'none'}}></img>
        <img src={require('./images/76TrKyGiK.png')} height = {150} style = {foodImage == 3 ? {margin: '10px'} : {display: 'none'}}></img>
        <img src={require('./images/BziXp9BcB.png')} height = {150} style = {foodImage == 4 ? {margin: '10px'} : {display: 'none'}}></img>
        <img src={require('./images/kT8neGLnc.png')} height = {150} style = {foodImage == 5 ? {margin: '10px'} : {display: 'none'}}></img>
        <img src={require('./images/kTM9zaETj.png')} height = {150} style = {foodImage == 6 ? {margin: '10px'} : {display: 'none'}}></img>
        <img src={require('./images/pkT8daair.png')} height = {150} style = {foodImage == 7 ? {margin: '10px'} : {display: 'none'}}></img>
        <img src={require('./images/rijGg4BRT.png')} height = {150} style = {foodImage == 8 ? {margin: '10px'} : {display: 'none'}}></img>
        <img src={require('./images/yikAg4BbT.png')} height = {150} style = {foodImage == 9 || foodImage == 10 ? {margin: '10px'} : {display: 'none'}}></img>
        <div className="bubble">
        <div style = {showOne ? {display: 'none'} : {margin: '10px'}}>
            This costs ${genNumberCost}
        </div>
        </div>
        <img src={require('./images/clip-art-person-13.png')} height = {200} style = {personImage == 0 ? {margin: '10px'} : {display: 'none'}}></img>
            <img src={require('./images/clip-art-person-14.png')} height = {200} style = {personImage == 1 ? {margin: '10px'} : {display: 'none'}}></img>
            <img src={require('./images/clip-art-person-34.png')} height = {200} style = {personImage == 2 ? {margin: '10px'} : {display: 'none'}}></img>
            <img src={require('./images/255398.png')} height = {200} style = {personImage == 3 ? {margin: '10px'} : {display: 'none'}}></img>
            <img src={require('./images/1188279.png')} height = {200} style = {personImage == 4 ? {margin: '10px'} : {display: 'none'}}></img>
            <img src={require('./images/1188335.png')} height = {200} style = {personImage == 5 ? {margin: '10px'} : {display: 'none'}}></img>
            <img src={require('./images/1717187.png')} height = {200} style = {personImage == 6 ? {margin: '10px'} : {display: 'none'}}></img>
            <img src={require('./images/1717267.png')} height = {200} style = {personImage == 7 ? {margin: '10px'} : {display: 'none'}}></img>
            <img src={require('./images/clip-art-person-20.png')} height = {200} style = {personImage == 8 ? {margin: '10px'} : {display: 'none'}}></img>
            <img src={require('./images/pinkdresslady.png')} height = {200} style = {personImage == 9 ? {margin: '10px'} : {display: 'none'}}></img>
            <img src={require('./images/SkateBoardAfricanKid.png')} height = {200} style = {personImage == 10 || personImage == 11 ? {margin: '10px'} : {display: 'none'}}></img>
        <div className="bubble">
        <div style = {showOne ? {display: 'none'} : {margin: '10px'}}>
            Here's ${genNumberCostDiff}
        </div>
        </div>
        </div>
        <div style = {showOne ? {display: 'none'} : {margin: '10px'}}>
            Amount of Change Gathered: {changeTotal}
        </div>
        <img src={require("./images/clipart32676.png")} height={300} style = {showOne ? {} : {display: 'none'}}></img>
        <div style = {showOne ? {display: 'none'} : {display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
          <div onClick ={() => addChange(1)}>
          <Coin value = {100}/>
          </div>
          <div onClick ={() => addChange(5)}>
          <Coin value = {500}/>
          </div>
          <div onClick ={() => addChange(10)}>
          <Coin value = {1000}/>
          </div>
          <div onClick ={() => addChange(20)}>
          <Coin value = {2000}/>
          </div>
        </div>
        <div style = {showOne ? {display: 'none'} : {display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
          <div onClick ={() => addChange(.25)}>
          <Coin value = {25}/>
          </div>
          <div onClick ={() => addChange(.10)}>
          <Coin value = {10}/>
          </div>
          <div onClick ={() => addChange(.05)}>
          <Coin value = {5}/>
          </div>
          <div onClick ={() => addChange(.01)}>
          <Coin value = {1}/>
          </div>
        </div>
        <div style = {showThree ? {margin: '10px'} : {display: 'none'}}>
            Too small of change, there is still change of value {errorVal} to count.
        </div>
        <div style = {showFive ? {margin: '10px'} : {display: 'none'}}>
            Too large of change, the highest amount of change allowed is {errorVal}.
        </div>
        <div style = {showFour ? {margin: '10px'} : {display: 'none'}}>
            Wrong amount of change! There is still a difference of ${(genNumber - parseFloat(changeTotal, 10)).toFixed(2)}.
        </div>
        <div style = {showOne ? {display: 'none'} : {display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button className = "Time-button" onClick ={() => checkCorrect()}> Check Correct </button>
        </div>
        <div style = {showOne ? {display: 'none'}: {margin: '10px'}}>
            Amount of Transactions Correct: {numCorrect}
        </div>
        <div style = {showOne ? {} : {display: 'none'}}>
            Set maximum amount of change to give:
        </div>
        <div style = {showOne ? {margin: '10px'} : {display: 'none'}}>
        <form>
        <div>
          <label>
            <input type="radio" value={1} checked={diff == 1} onChange={() => difficulty(1)} />
            $2 Change
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value={2} checked={diff == 2} onChange={() => difficulty(2)}/>
            $10 Change
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value={3} checked={diff == 3} onChange={() => difficulty(3)}/>
            $50 Change
          </label>
        </div>
      </form>
        </div>
        <div style = {showOne ? {} : {display: 'none'}}>
            Visible timer?
        </div>
        <div style = {showOne ? {margin: '10px'} : {display: 'none'}}>
        <form>
        <div>
          <label>
            <input type="radio" value={true} checked={showTimer == true} onChange={() => timerSwitch(true)} />
            Yes
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value={false} checked={showTimer == false} onChange={() => timerSwitch(false)}/>
            No
          </label>
        </div>
      </form>
        </div>
        <div style = {showOne ? {} : {display: 'none'}}>
            Choose level of difficulty:
        </div>
        <div style = {showOne ? {margin: '10px'} : {display: 'none'}}>
        <form>
        <div>
          <label>
            <input type="radio" value={0} checked={diffTwo == 0} onChange={() => diffTwoChange(0)} />
            Hard/Any Change Amount, Any Cost.
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value={1} checked={diffTwo == 1} onChange={() => diffTwoChange(1)}/>
            Medium/Dollar Bills Received Only, Any Cost.
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value={2} checked={diffTwo == 2} onChange={() => diffTwoChange(2)}/>
            Easy/Dollar Bills Received Only, Dollar Bill Costs Only.
          </label>
        </div>
      </form>
        </div>
        </div>
        </>
    );
}
export default ClockFive;