import Coin from "./coin";

function SecondPracticeSeven() {
    return(
        <>
        <div style={{margin: '20px'}}>
        Add two quarters to make $4. There's only one last step before we get our total change!
        </div>
        <div>3.50</div>
        <div>+0.50</div>
        <div>----</div>
        <div>4.00</div>
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
        <div>Amount of Change Gathered: $0.69</div>
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
export default SecondPracticeSeven;