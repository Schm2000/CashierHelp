import logo from './logo.svg';
import {useEffect, useState } from 'react';
import './App.css';
import Coin from './coin';
import Home from "./pages/Home";
import MainPage from './pages/MainPage';
import Hints from './pages/Hints';
import Navigation from './Navigation';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  };
  return (
    <>
    <div className="App">
      <header className="App-header">
      <Router forceRefresh={true}>

<Navigation toggle = {toggle}/>
<Routes>

  <Route path = '/CashierHelp' element = {<Home/>}/>
  {/* <Route path = '' exact component = {Home}/> */}
  <Route path = '/CashierHelp/practice' element = {<Hints/>}/>
  {/*<Route path = '*' component = {MissingPage}/>*/}

</Routes>
</Router>
<div>
            Key shortcuts:
        </div>
        <div>
            Timer Button: t / Check Cash Button: c
        </div>
        <div>
            $20: r / $10: e / $5: w / $1: q
        </div>
        <div style = {{marginBottom: '20px'}}>
            25 cents: a / 10 cents: s / 5 cents: d / 1 cent: f
        </div>
      </header>
    </div>
      </>
  );
}

export default App;
