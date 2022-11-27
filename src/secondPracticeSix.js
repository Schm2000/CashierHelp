import Coin from "./coin";

function SecondPracticeSix() {
    return(
        <>
        <div style={{margin: '20px', textAlign: 'left'}}>
        ...then add 10 cents to make the total $3.50. Now that we have a multiple of 25, we can start adding quarters!
        </div>
        <div>3.40</div>
        <div>+0.10</div>
        <div>----</div>
        <div>3.50</div>
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
        <div>Amount of Change Gathered: $0.19</div>
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
export default SecondPracticeSix;