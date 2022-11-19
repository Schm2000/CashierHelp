import React from 'react';
import Clock from '../clock';

function Home() {
    return (
        <>
        <div className="Home-header">
            Welcome to CashierHelp!
        </div>
        <div style={{margin: '5px'}}>
            A website designed to help students with counting change!
        </div>
        <div style={{magin: '10px'}}>
        For keyboard-only users, use the TAB key to select features.
        </div>
        <div>
        <Clock>

        </Clock>
        </div>
        </>
    );
}

export default Home;