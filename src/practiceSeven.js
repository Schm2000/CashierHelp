import Coin from "./coin";

function PracticeSeven() {
    return(
        <>
        <div style={{margin: '20px'}}>
        Since we need to give back $1.12 in change, we start with giving back $1 by selecting the $1 bill once.
        </div>
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
        <div>Amount of Change Gathered: $1.00</div>
        <div>Then we give back ten cents by selecting the dime:</div>
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
        <div>Amount of Change Gathered: $1.10</div>
        <div>Finally, we give 2 cents by selecting the penny twice:</div>
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
        <div>Amount of Change Gathered: $1.12</div>
        <div>We've now collected the right amount of change!</div>
        </>
    );
}
export default PracticeSeven;