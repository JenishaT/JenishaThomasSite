import React from 'react';
import { Grid, Card, Typography } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import logo from '../../assets/icon.gif';
import './homepage.styles.scss';

class Home extends React.Component {
    render() {
        return (
            <Grid
                container
                direction="column"
                alignItems="stretch"
                spacing={2}
            >
                <Grid item xs={12}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        spacing={1}
                    >
                        <Grid item xs={4}>
                            <Card>
                                <img src={logo}></img>
                            </Card>
                        </Grid>
                        <Grid item xs={7}>
                            <Card>
                                
                               <CardContent>
                                   <Typography id="cardHeading" variant="h5">About ME!</Typography>
                                   <Typography variant="body1">
                                       I am a third year software engineering student at the University of Toronto 
                                       Scarborough. I have a strong passion for web development and enjoy designing
                                       and creative interactive websites. 
                                   </Typography>
                               </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                    >
                        <Grid item xs={11}>
                            <Card>
                             Education
                        </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Home;