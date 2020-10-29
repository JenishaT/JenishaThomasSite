import React from 'react';
import { Grid } from "@material-ui/core"
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/homepage/homepage.component';

import NavBar from "./components/navbar/navbar.component";
import Resume from "./components/resume/resume.component";
import Experience from "./components/experience/experience.component";
import Project from "./components/projects/projects.component";

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
                  <Route exact path="/resume" component={Resume} />
                  <Route exact path="/experience" component={Experience} />
                  <Route exact path="/projects" component={Project} />
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
