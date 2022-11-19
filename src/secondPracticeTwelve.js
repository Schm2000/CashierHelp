import Coin from "./coin";

function SecondPracticeTwelve() {
    return(
        <>
        <div style={{margin: '20px'}}>
        ...and finally, since our cent difference is a multiple of 25, we use one quarter to match our cent totals. Now all that's left are dollars!
        </div>
        <div>3.43</div>
        <div>+0.25</div>
        <div>----</div>
        <div>3.68</div>
        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={require('./images/rijGg4BRT.png')} height = {150} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        This costs $3.32.
        </div>
        </div>
        <img src={require('./images/clip-art-person-34.png')} height = {200} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        Here's $10.68.
        </div>
        </div>
        </div>
        <div>Amount of Change Gathered: $0.36</div>
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
        </>
    );
}
export default SecondPracticeTwelve;