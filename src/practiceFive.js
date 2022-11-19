import Coin from "./coin";

function PracticeFive() {
    return(
        <>
        <div style={{margin: '20px'}}>
        Then, subtract 50 cents from the remaining $1.68 to get $1.18.
        </div>
        <div>1.68</div>
        <div>-0.50</div>
        <div>----</div>
        <div>1.18</div>
        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={require('./images/kT8neGLnc.png')} height = {150} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        This costs $5.56.
        </div>
        </div>
        <img src={require('./images/clip-art-person-13.png')} height = {200} style = {{margin: '10px'}}></img>
        <div className="bubble">
        <div style={{margin: '20px'}}>
        Here's $6.68.
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
export default PracticeFive;