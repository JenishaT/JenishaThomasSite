import React from 'react';
import { Grid, Card, Typography } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import './experience.styles.scss'

const experiences = [
    {
        position: "Digital Apps Development – Developer",
        start: "January 2020",
        end: "April 2020",
        company: "Fidelity Investments Canada",
        bullet_points: [
            "Contributed to POC project; Log Analysis Dashboard using MEAN stack, implementing over 80% of desired UI components using Angular and Typescript",
            "Performed log analysis of applications, wrote a Java program to extract desired information from over 50 log files and compiling it into well-designed reports",
            "Attended daily stand-up meetings, participating in project discussions and gaining sufficient skills in communication and agile development"
        ]
    },
    {
        position: "Old Navy Brand Associate",
        start: "June 2018",
        end: "Present",
        company: "Old Navy, Scarborough Town Centre",
        bullet_points: [
            "Utilizes exceptional communication skills to assist customers, effectively explaining products and promotions resulting in sales increased by 40%",
            "Assists over 30 customers per hour, giving feedback on the selected items and answering concerns, building rapport and ensuring customer loyalty",
            "Exceptional leadership and organizational skills shown through effectively directing customers to fitting rooms, shortening waiting time to under 5 minutes"
        ]
    }
]

class Experience extends React.Component {
    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                {experiences.map(({ experience }, index) => (
                    <Grid item xs={11} key={index}>
                        <Card>
                            <CardContent id="experience-card">
                                <Typography id="position" variant="h5">
                                    {experiences[index].position}
                                </Typography>
                                <Typography id="company" variant="subtitle1">
                                    {experiences[index].company}
                                </Typography>
                                <ul>
                                    {experiences[index].bullet_points.map(({ point }, i) => (
                                        <li>
                                            <Typography id="bullets" variant="body1">
                                                {experiences[index].bullet_points[i]}
                                            </Typography>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        )
    }

}
export default Experience;