import Coin from "./coin";

function SecondPracticeEleven() {
    return(
        <>
        <div style={{margin: '20px', textAlign: 'left'}}>
        Our cent difference remaining is 35. Next, we add a dime to lower this difference to 25 cents...
        </div>
        <div>3.33</div>
        <div>+0.10</div>
        <div>----</div>
        <div>3.43</div>
        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={require('./images/rijGg4BRT.png')} height = {150} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        This costs $3.32.
        </div>
        </div>
        <img src={require('./images/pinkdresslady.png')} height = {200} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        Here's $10.68.
        </div>
        </div>
        </div>
        <div>Amount of Change Gathered: $0.11</div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
            <Coin value={100}/>
            <Coin value={500}/>
            <Coin value={1000}/>
            <Coin value={2000}/>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
            <Coin value={25}/>
            <Coin value={11}/>
            <Coin value={5}/>
            <Coin value={1}/>
        </div>
        </>
    );
}
export default SecondPracticeEleven;