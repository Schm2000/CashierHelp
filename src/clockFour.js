import { type } from '@testing-library/user-event/dist/type';
import useSound from 'use-sound';
import successBell from './sounds/success-bell.wav';
import failureSound from './sounds/failure-wrong-action.wav'
import gameStart from './sounds/game-start.wav'
import stopSound from './sounds/congrats.wav';
import {useEffect, useState } from 'react';
import Coin from './coin'

function ClockFour() {
    const [changeTotal, changeTotalSet] = useState(0);
    const [genNumber, changeGenNumber] = useState(2.42);
    const [genNumberCost, changeGenCost] = useState(5.58);
    const [genNumberCostDiff, changeGenDiff] = useState(8.00); 
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showFive, setShowFive] = useState(false);
    const [showSix, setShowSix] = useState(false);
    const [showExOne, setShowExOne] = useState(false);
    const [showExTwo, setShowExTwo] = useState(true);
    const [showExThree, setShowExThree] = useState(true);
    const [errorVal, setErrorVal] = useState("N/A");
    const [personImage, setPersonImage] = useState(0);
    const [foodImage, setFoodImage] = useState(0);
    const [play] = useSound(successBell);
    const [playWrong] = useSound(failureSound);
    const [playEnd] = useSound(stopSound);
    const imageChange = () => {
        let randomPerson = Math.floor(Math.random()*11);
        setPersonImage(randomPerson)
        let randomFood = Math.floor(Math.random()*10);
        setFoodImage(randomFood)
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
    const generateNumber = () => {
        setShowThree(false)
        setShowFour(false)
        setShowFive(false)
        if (genNumber == 2.42){
            imageChange()
            changeGenCost(2.46)
            changeGenDiff(10.00)
            changeGenNumber(7.54)
            setShowExOne(true)
            setShowExTwo(false)
        }
        else if (genNumber == 7.54){
            imageChange()
            changeGenCost(3.23)
            changeGenDiff(5.20)
            changeGenNumber(1.97)
            setShowExTwo(true)
            setShowExThree(false)
        }
        else if (genNumber == 1.97){
            changeTotalSet("N/A")
            setShowSix(true)
            setShowExThree(true)
            playEnd()
        }
    }
    const checkCorrect = () => {
        if (changeTotal != "N/A"){
        if (changeTotal == genNumber){
            play()
            setShowThree(false)
            setShowFour(false)
            setShowFive(false)
            changeTotalSet(0)
            generateNumber()
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
        if (e.key == 'c'){
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
        <div style = {showSix ? {display: 'none'} : {margin: '10px'}}>
            Go ahead and try some examples on your own!
        </div>
        <div style = {showSix ? {display: 'none'} : {display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
        <div style = {{margin: '10px'}}>
            This costs ${genNumberCost.toFixed(2)}
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
        <div style = {{margin: '10px'}}>
            Here's ${genNumberCostDiff.toFixed(2)}
        </div>
        </div>
        </div>
        <div style = {showExOne ? {display: 'none'}:{}}>$8.00</div>
        <div style = {showExOne ? {display: 'none'}:{}}>-$5.58</div>
        <div style = {showExOne ? {display: 'none'}:{}}>----</div>
        <div style={showExOne ? {display:'none'}:{display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '230px'}}>
        <div>Type in answer here:  </div>
        <input style = {showExOne ? {display: 'none'}:{marginLeft: '10px'}}></input>
        </div>
        <div style = {showExTwo ? {display: 'none'}:{}}>$10.00</div>
        <div style = {showExTwo ? {display: 'none'}:{}}>-$2.46</div>
        <div style = {showExTwo ? {display: 'none'}:{}}>----</div>
        <div style={showExTwo ? {display:'none'}:{display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '230px'}}>
        <div>Type in answer here:  </div>
        <input style = {showExTwo ? {display: 'none'}:{marginLeft: '10px'}}></input>
        </div>
        <div style = {showExThree ? {display: 'none'}:{}}>Here's a challenging problem! Feel free to go back to the practice menu if this is too hard for you!</div>
        <div style = {showExThree ? {display: 'none'}:{}}>$5.20</div>
        <div style = {showExThree ? {display: 'none'}:{}}>-$3.23</div>
        <div style = {showExThree ? {display: 'none'}:{}}>----</div>
        <div style={showExThree ? {display:'none'}:{display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '230px'}}>
        <div>Type in answer here:  </div>
        <input style = {showExThree ? {display: 'none'}:{marginLeft: '10px'}}></input>
        </div>
        <div style = {showSix ? {display: 'none'} : {margin: '10px'}}>
            Amount of Change Gathered: {changeTotal}
        </div>
        <div style = {showSix ? {display: 'none'} : {display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
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
        <div style = {showSix ? {display: 'none'} : {display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
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
        <div style = {showSix ? {display: 'none'} : {display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button className = "Time-button" onClick ={() => checkCorrect()}> Check Correct </button>
        </div>
        </div>
        <div style = {showSix ? {} : {display: 'none'}}>That's all!</div>
        </>
    );
}
export default ClockFour;