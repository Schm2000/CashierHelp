import Coin from "./coin";

function PracticeFourteen() {
    return(
        <>
        <div style={{textAlign: 'left'}}>
        <div style={{margin: '20px'}}>
        So to recap:
        </div>
        <div style={{margin: '20px'}}>
            - Subtract the actual cost from given change.
        </div>
        <div style={{margin: '20px'}}>
            - Subtract from left to right one number at a time. Start by subtracting dollars, then subtract cents.
        </div>
        <div style={{margin: '20px'}}>
            - The difference is the amount of change to give.
        </div>
        <div style={{margin: '20px'}}>
            - When counting dollars, count by 20s, then by 10s, then 5s and finally 1s.
        </div>
        <div style={{margin: '20px'}}>
            - When counting cents, start by counting by 25s, then by 10s, then 5s and finally 1s.
        </div>
        </div>
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
export default PracticeFourteen;