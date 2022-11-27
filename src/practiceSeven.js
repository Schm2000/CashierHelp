import Coin from "./coin";

function PracticeSeven() {
    return(
        <>
        <div style={{margin: '20px', textAlign: 'left'}}>
        Since we need to give back $0.42 in change, we start with giving back $0.25 by selecting the quarter once.
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
        Here's $6.00.
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
            <Coin value={26}/>
            <Coin value={10}/>
            <Coin value={5}/>
            <Coin value={1}/>
        </div>
        <div>Amount of Change Gathered: $0.25</div>
        <div style={{textAlign: 'left'}}>Then we give back ten cents by selecting the dime:</div>
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
        <div>Amount of Change Gathered: $0.35</div>
        <div style={{textAlign: 'left'}}>Then we give back five cents by selecting the nickel:</div>
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
        <div>Amount of Change Gathered: $0.40</div>
        <div style={{textAlign: 'left'}}>Finally, we give 2 cents by selecting the penny twice:</div>
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
        <div>Amount of Change Gathered: $0.42</div>
        <div style={{textAlign: 'left'}}>We've now collected the right amount of change!</div>
        </>
    );
}
export default PracticeSeven;