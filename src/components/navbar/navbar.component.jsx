import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Typography } from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from '../../assets/icon.gif';

import "./navbar.styles.scss";

class NavBar extends React.Component {
    state = {
        selected: undefined
    }

    handleChange = (event, newSelected) => {
        this.setState({ selected: newSelected });
    };

    render() {
        return (
            <React.Fragment>
                <AppBar id="nav" position="relative" color="primary" className="navbar">
                    <Grid container direction="row" justify="space-between">
                        <Grid item xs={4}>
                            <Grid container direction="row">
                                <Grid item xs={1}>
                                    <img src={logo} />
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="h4">Jenisha Thomas</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8}>
                            <Tabs value={this.selected} onChange={this.handleChange}>
                                <Tab label="About Me" />
                                <Tab label="Projects" />
                                <Tab label="Experience" />
                                <Tab label="LinkedIn" />
                                <Tab label="Github" />
                            </Tabs>
                        </Grid>
                    </Grid>
                </AppBar>
            </React.Fragment>
        )
    }
}

export default NavBar;