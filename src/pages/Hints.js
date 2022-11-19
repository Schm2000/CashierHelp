import ClockTwo from "../clockTwo";
import {useEffect, useState} from 'react';
import PracticeOne from "../practiceOne";
import PracticeTwo from "../practiceTwo";
import PracticeThree from "../practiceThree";
import PracticeFour from "../practiceFour";
import PracticeFive from "../practiceFive";
import PracticeSix from "../practiceSix";
import PracticeSeven from "../practiceSeven";
import PracticeEight from "../practiceEight";
import PracticeNine from "../practiceNine";
import PracticeTen from "../practiceTen";
import PracticeEleven from "../practiceEleven";
import PracticeTwelve from "../practiceTwelve";
import PracticeThirteen from "../practiceThirteen";
import PracticeFourteen from "../practiceFourteen";
import SecondPracticeOne from "../secondPracticeOne";
import SecondPracticeTwo from "../secondPracticeTwo";
import SecondPracticeThree from "../secondPracticeThree";
import SecondPracticeFour from "../secondPracticeFour";
import SecondPracticeFive from "../secondPracticeFive";
import SecondPracticeSix from "../secondPracticeSix";
import SecondPracticeSeven from "../secondPracticeSeven";
import SecondPracticeEight from "../secondPracticeEight";
import SecondPracticeNine from "../secondPracticeNine";
import SecondPracticeTen from "../secondPracticeTen";
import SecondPracticeEleven from "../secondPracticeEleven";
import SecondPracticeTwelve from "../secondPracticeTwelve";
import SecondPracticeThirteen from "../secondPracticeThirteen";
import SecondPracticeFourteen from "../secondPracticeThirteen";
import ClockThree from "../clockThree";
import ClockFour from "../clockFour";
import ClockFive from "../clockFive";

function Hints() {
    const [setOne, changeSetOne] = useState(false);
    const [setTwo, changeSetTwo] = useState(true);
    const [setThree, changeSetThree] = useState(false);
    const [setPage, changeSetPage] = useState(0);
    const [setPageTwo, changeSetPageTwo] = useState(0);
    const activateSimulator = () => {
        changeSetOne(true)
        changeSetTwo(false)
    }
    const deactivateSimulator = () => {
        changeSetOne(false)
        changeSetTwo(true)
        changeSetThree(false)
        changeSetPage(0)
        changeSetPageTwo(0)
    }
    const activateSimulatorTwo = () => {
        changeSetThree(true)
        changeSetTwo(false)
    }
    const activateTraining = () => {
        changeSetPage(1)
        changeSetTwo(false)
    }
    const changePage = value => {
        changeSetPage(value)
        window.scrollTo({top: 0, left: 0})
    }
    const activateTrainingTwo = () => {
        changeSetPageTwo(1)
        changeSetTwo(false)
    }
    const changePageTwo = value => {
        changeSetPageTwo(value)
        window.scrollTo({top: 0, left: 0})
    }
    const onKeyPress = (e) => {
        if (e.key == 'n' && setPage >= 1 && setPage < 14){
            changePage(setPage + 1)
        }
        else if (e.key == 'p' && setPage > 1) {
            changePage(setPage - 1)
        }
        else if (e.key == 'n' && setPageTwo >= 1 && setPageTwo < 16){
            changePageTwo(setPageTwo + 1)
        }
        else if (e.key == 'p' && setPageTwo > 1) {
            changePageTwo(setPageTwo - 1)
        }
        else if (e.key == 'b' && setTwo == false){
            deactivateSimulator()
        }
    }
    return (
        <>
        <div onKeyDown={(e) => onKeyPress(e)}>
        {setTwo ? <h1>This is the Hint Page!</h1> : null}
        {setTwo ? <div>Below are two different tips for counting change. These are designed to help you count correct change quickly! Select the step-by-step sections to learn these methods, and when you're ready, use the simulator practice to test your understanding!</div> : null}
        {setTwo ? <button className="Page-button" style = {{margin: '10px'}} onClick={() => activateTraining()}>Counting Tip Step-By-Step - Subtraction</button>: null}
        {setTwo ? <button className="Page-button" style = {{margin: '10px'}} onClick={() => activateTrainingTwo()}>Counting Tip Step-By-Step - Addition</button>: null}
        {setTwo ? <button className="Page-button" style = {{margin: '10px'}} onClick={() => activateSimulator()}>Simulator Practice - Subtraction</button>: null}
        {setTwo ? <button className="Page-button" style = {{margin: '10px'}} onClick={() => activateSimulatorTwo()}>Simulator Practice - Addition</button>: null}
        {setPage == 1 ? <PracticeOne/> : null}
        {setPage == 2 ? <PracticeTwo/> : null}
        {setPage == 3 ? <PracticeThree/> : null}
        {setPage == 4 ? <PracticeFour/> : null}
        {setPage == 5 ? <PracticeFive/> : null}
        {setPage == 6 ? <PracticeSix/> : null}
        {setPage == 7 ? <PracticeSeven/> : null}
        {setPage == 8 ? <PracticeEight/> : null}
        {setPage == 9 ? <PracticeNine/> : null}
        {setPage == 10 ? <PracticeTen/> : null}
        {setPage == 11 ? <PracticeEleven/> : null}
        {setPage == 12 ? <PracticeTwelve/> : null}
        {setPage == 13 ? <PracticeFourteen/> : null}
        {setPage == 14 ? <ClockThree/> : null}
        {setPageTwo == 1 ? <SecondPracticeOne/> : null}
        {setPageTwo == 2 ? <SecondPracticeTwo/> : null}
        {setPageTwo == 3 ? <SecondPracticeThree/> : null}
        {setPageTwo == 4 ? <SecondPracticeFour/> : null}
        {setPageTwo == 5 ? <SecondPracticeFive/> : null}
        {setPageTwo == 6 ? <SecondPracticeSix/> : null}
        {setPageTwo == 7 ? <SecondPracticeSeven/> : null}
        {setPageTwo == 8 ? <SecondPracticeEight/> : null}
        {setPageTwo == 9 ? <SecondPracticeNine/> : null}
        {setPageTwo == 10 ? <SecondPracticeTen/> : null}
        {setPageTwo == 11 ? <SecondPracticeEleven/> : null}
        {setPageTwo == 12 ? <SecondPracticeTwelve/> : null}
        {setPageTwo == 13 ? <SecondPracticeThirteen/> : null}
        {setPageTwo == 14 ? <SecondPracticeFourteen/> : null}
        {setPageTwo == 15 ? <PracticeThirteen/> : null}
        {setPageTwo == 16 ? <ClockFour/> : null}
        {setOne ? <ClockTwo/> : null}
        {setThree ? <ClockFive/> : null}
        {setPage < 14 && setPage > 0 ? <button className="Time-button" style = {{margin: '10px'
        }} onClick={() => changePage(setPage + 1)}>Next</button> : null}
        {setPage > 1 ? <button className="Time-button" style = {{margin: '10px'
        }} onClick={() => changePage(setPage - 1)}>Previous</button> : null}
        {setPageTwo < 16 && setPageTwo > 0 ? <button className="Time-button" style = {{margin: '10px'
        }} onClick={() => changePageTwo(setPageTwo + 1)}>Next</button> : null}
        {setPageTwo > 1 ? <button className="Time-button" style = {{margin: '10px'
        }} onClick={() => changePageTwo(setPageTwo - 1)}>Previous</button> : null}
        {setTwo ? null: <button className="Time-button" style = {{margin: '10px'
        }} onClick={() => deactivateSimulator()}>Back</button>}
        </div>
        </>
    );
}

export default Hints;