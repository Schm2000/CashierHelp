import Coin from "./coin";

function SecondPracticeTen() {
    return(
        <>
        <div style={{margin: '20px', textAlign: 'left'}}>
        In this case, we don't have a nice round number to count up to. So, we must get the difference of the cents to be a multiple of 5. Since 68-32=36, we must add one cent so that we have a remaining 35 cent difference.
        </div>
        <div>3.32</div>
        <div>+0.01</div>
        <div>----</div>
        <div>3.33</div>
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
        <div>Amount of Change Gathered: $0.01</div>
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
export default SecondPracticeTen;