import Coin from "./coin";

function SecondPracticeFive() {
    return(
        <>
        <div style={{margin: '20px', textAlign: 'left'}}>
        Now that our sum is in terms of 5s, we will now add change to make it in terms of 25s. First add a nickel/5 cents to make the difference 60 cents...
        </div>
        <div>3.35</div>
        <div>+0.05</div>
        <div>----</div>
        <div>3.40</div>
        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={require('./images/kT8neGLnc.png')} height = {150} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        This costs $3.31.
        </div>
        </div>
        <img src={require('./images/clip-art-person-20.png')} height = {200} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        Here's $5.00.
        </div>
        </div>
        </div>
        <div>Amount of Change Gathered: $0.09</div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
            <Coin value={100}/>
            <Coin value={500}/>
            <Coin value={1000}/>
            <Coin value={2000}/>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5px'}}>
            <Coin value={25}/>
            <Coin value={10}/>
            <Coin value={6}/>
            <Coin value={1}/>
        </div>
        </>
    );
}
export default SecondPracticeFive;