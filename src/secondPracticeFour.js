import Coin from "./coin";

function SecondPracticeFour() {
    return(
        <>
        <div style={{margin: '20px'}}>
        Using the additive method, we will count up from $3.31 to $5.00 to get our change. First, add up 4 pennies:
        </div>
        <div>3.31</div>
        <div>+0.04</div>
        <div>----</div>
        <div>3.35</div>
        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={require('./images/kT8neGLnc.png')} height = {150} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        This costs $3.31.
        </div>
        </div>
        <img src={require('./images/clip-art-person-14.png')} height = {200} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        Here's $5.00.
        </div>
        </div>
        </div>
        <div>Amount of Change Gathered: $0.04</div>
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
        </>
    );
}
export default SecondPracticeFour;