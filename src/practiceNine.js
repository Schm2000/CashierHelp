import Coin from "./coin";

function PracticeNine() {
    return(
        <>
        <div style={{margin: '20px'}}>
        Like before, we start by subtracting 3 dollars from the 10 Susie gives us. This leaves us with $7.
        </div>
        <div>10.00</div>
        <div>-3.00</div>
        <div>----</div>
        <div>7.00</div>
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
export default PracticeNine;