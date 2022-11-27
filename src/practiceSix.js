import Coin from "./coin";

function PracticeSix() {
    return(
        <>
        <div style={{margin: '20px', textAlign: 'left'}}>
        Finally, subtract 1-0 to get 1, so 6.68 - 5.56 = 1.12. This means we must give Steve $1.12 in change.
        </div>
        <div> 6.68</div>
        <div>-5.56</div>
        <div>----</div>
        <div> 1.12</div>
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
export default PracticeSix;