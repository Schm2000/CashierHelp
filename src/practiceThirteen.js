import Coin from "./coin";

function PracticeThirteen() {
    return(
        <>
        <div style={{textAlign: 'left'}}>
        <div style={{margin: '20px'}}>
        To recap this method:
        </div>
        <div style={{margin: '20px'}}>
        - Start with the actual cost and calculate the cent difference between both amounts.
        </div>
        <div style={{margin: '20px'}}>
        - Add pennies until the cent difference is a multiple of 5.
        </div>
        <div style={{margin: '20px'}}>
        - If the cent difference is 25, 50 or 75, add quarters/25 cents until the cent difference is 0.
        </div>
        <div style={{margin: '20px'}}>
        - If the cent difference is 10, 35, 60 or 85, add one dime. If it is 20, 45, 70 or 95, add two dimes.
        </div>
        <div style={{margin: '20px'}}>
        - If the multiple of 5 is none of the above, add a nickel and recheck.
        </div>
        <div style={{margin: '20px'}}>
        - Once the cent difference is 0, check the dollar difference.
        </div>
        <div style={{margin: '20px'}}>
        - If the difference is not a multiple of 5, add ones until it is.
        </div>
        <div style={{margin: '20px'}}>
        - If the difference ends with a 5 afterwards, add $5.
        </div>
        <div style={{margin: '20px'}}>
        - If the difference remains a multiple of 10, check if the first number is even or odd. If odd, add a 10.
        </div>
        <div style={{margin: '20px'}}>
        - Add 20s until the difference is gone.
        </div>
        <div style={{margin: '20px'}}>
        And that's the method! It's time for some hands-on training!
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
export default PracticeThirteen;