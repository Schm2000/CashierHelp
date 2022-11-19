import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <li style = {{marginRight: '30px'}}>
          <Link to="/CashierHelp" style={{color: "#b2ff9e"}}>Home</Link>
        </li>
        <li style = {{marginLeft: '30px'}}>
          <Link to="/CashierHelp/practice" style={{color: "#b2ff9e"}}>Practice</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;