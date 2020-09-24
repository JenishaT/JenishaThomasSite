import React from 'react';
import logo from './logo.svg';
import { Grid } from "@material-ui/core"
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/homepage/homepage.component';

import NavBar from "./components/navbar/navbar.component";
class App extends React.Component {
  state = {
    hi: "hi"
  }
  render() {
    return (
      <div className="App">
        <Grid
          container
          direction="row"
          justify="space-between"
        >
          <Grid item xs={3}>
            <NavBar></NavBar>
          </Grid>
          <Grid item xs={9}>
            <header className="App-header">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/about-me" component={Home} />
                </Switch>
              </BrowserRouter>
            </header>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
