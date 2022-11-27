import Coin from "./coin";

function PracticeTwo() {
    return(
        <>
        <div style={{margin: '20px', textAlign: 'left'}}>
        As you can see, there are eight different coins and bills to choose from when counting change. Here, you'll learn how to count change using subtraction. The goal here is to count change quickly using the least amount of coins and bills possible!
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
            <Coin value={100}/>
            <Coin value={500}/>
            <Coin value={1000}/>
            <Coin value={2000}/>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
            <Coin value={25}/>
            <Coin value={10}/>
            <Coin value={5}/>
            <Coin value={1}/>
        </div>
        </>
    );
}
export default PracticeTwo;