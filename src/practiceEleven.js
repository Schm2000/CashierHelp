import Coin from "./coin";

function PracticeEleven() {
    return(
        <>
        <div style={{margin: '20px', textAlign: 'left'}}>
        Finally, subtract 9-3 = 6, which results in 10-3.46 = 6.54. So, we need to count $6.54 worth of change for Susie.
        </div>
        <div>10.00</div>
        <div>-3.46</div>
        <div>----</div>
        <div> 6.54</div>
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
export default PracticeEleven;