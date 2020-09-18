import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/navbar/navbar.component";
class App extends React.Component {
  state = {
    hi: "hi"
  }
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route exact path="/about-me" render={()=> <p>This is About Me</p>}/>
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    )
  }
}

export default App;
