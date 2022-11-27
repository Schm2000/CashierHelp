import Coin from "./coin";

function PracticeTwelve() {
    return(
        <>
        <div style={{margin: '20px', textAlign: 'left'}}>
        Since we need to give back $6.54, we start with dollar bills. Since we need to give back $6, this can be split into a $5 bill and a $1 bill. Start by giving the $5 bill:
        </div>
        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={require('./images/8i68RAjLT.png')} height = {150} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        This costs $3.46.
        </div>
        </div>
        <img src={require('./images/clip-art-person-34.png')} height = {200} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        Here's $10.00.
        </div>
        </div>
        </div>
        <div>Amount of Change Gathered: $0.00</div>
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
        <div>Amount of Change Gathered: $5.00</div>
        <div style={{textAlign: 'left', marginLeft: '100px'}}>Then the $1 bill:</div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
            <Coin value={101}/>
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
        <div>Amount of Change Gathered: $6.00</div>
        <div style={{textAlign: 'left', marginLeft: '100px'}}>Next, count the amount of cents to give back. Since we have 54 cents to give, start by giving two quarters - 25 cents each:</div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
            <Coin value={100}/>
            <Coin value={500}/>
            <Coin value={1000}/>
            <Coin value={2000}/>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
            <Coin value={26}/>
            <Coin value={10}/>
            <Coin value={5}/>
            <Coin value={1}/>
        </div>
        <div>Amount of Change Gathered: $6.50</div>
        <div style={{textAlign: 'left', marginLeft: '100px'}}>Then, count four pennies for four cents to complete:</div>
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
            <Coin value={3}/>
        </div>
        <div>Amount of Change Gathered: $6.54</div>
        <div style={{textAlign: 'left', marginLeft: '100px'}}>That completes our transaction! Now it's time for you to practice for real!</div>
        </>
    );
}
export default PracticeTwelve;