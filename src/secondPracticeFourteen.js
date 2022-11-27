import Coin from "./coin";

function SecondPracticeThirteen() {
    return(
        <>
        <div style={{margin: '20px', textAlign: 'left'}}>
        Finally, since we have a $5 difference, add up one final $5 bill to complete the transaction!
        </div>
        <div>5.68</div>
        <div>+5.00</div>
        <div>----</div>
        <div>10.68</div>
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
        <div>Amount of Change Gathered: $7.36</div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
            <Coin value={100}/>
            <Coin value={501}/>
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
export default SecondPracticeThirteen;