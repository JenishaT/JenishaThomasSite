import React from 'react';
import { Grid, Card, Typography } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import './experience.styles.scss'

const experiences = [
    {
        position: "Digital Apps Team – Developer",
        start: "January 2020",
        end: "April 2020",
        company: "Fidelity Investments Canada",
        bullet_points: [
            "Contributed to POC project; Log Analysis Dashboard using MEAN stack, implementing over 80% of desired UI components using Angular and Typescript",
            "Practiced exemplary documentation skills through maintaining a confluence page on the Log Analysis Dashboard project and created insightful documentation on the work completed and future steps",
            "Assisted the team with the maintenance and debugging of Fidelity’s websites, gaining adept skills in JavaScript and debugging",
            "Performed log analysis of applications, wrote a Java program to extract desired information from over 50 log files and compiling it into well-designed reports",
            "Attended daily stand-up meetings, participating in project discussions and gaining sufficient skills in communication and agile development"
        ]
    },
    {
        position: "Marketing Director",
        start: "October 2019",
        end: "April 2020",
        company: "AMACSS: The Association of Mathematical and Computer Science Students",
        bullet_points: [
            "Communicated information on AMACSS events to student body, through the use of various social media platforms and in-class presentations, increasing event attendance by 10%",
            "Created well-written and designed social media posts, demonstrating and developing excellent written communication skills",
            "Assisted with the creation and maintenance of the marketing schedule, based on available resources, gaining adept skill in planning and time management",
        ]
    },
    {
        position: "Youth Committee Member",
        start: "December 2018",
        end: "Present",
        company: "hEr VOLUTION",
        bullet_points: [
            "Co-designed the curriculum for the TechKidz program, producing an organized schedule based on committee budget and current technological trends",
            "Utilized spreadsheets to track applicants for sub-committees, gaining adept skill in MS Excel, resulting in the successful hiring of 4 well-suited committee members",
            "Attended multiple meetings, practicing substantial communication skills and assisted with the creation and execution of an effective business plan"
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
    },
    {
        position: "Website Designer",
        start: "October 2016",
        end: "May 2017",
        company: "Bézh, JA Company Program",
        bullet_points: [
            "Collaborated with over 20 students to plan and design unique embroidered hats, successfully completing the program and winning Company of the Year",
            "Contributed to designing and implementing Bézh’s online store over an eight-month period, increasing sales by over 50% and attracting potential partners",
            "Assisted with the creation of the company’s business documents producing visually pleasing and easily interpretable documents"
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
                        <Card elevation={5}>
                            <CardContent id="experience-card">
                                <Grid
                                    container
                                    direction="column"
                                >
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction="row"
                                            justify="space-between"
                                        >
                                            <Grid item>
                                                <Typography id="position" variant="h5">
                                                    {experiences[index].position}
                                                </Typography>
                                                <Typography id="company" variant="subtitle1">
                                                    {experiences[index].company}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography id="duration" variant="subtitle1">
                                                    {experiences[index].start} - {experiences[index].end}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ul>
                                            {experiences[index].bullet_points.map(({ point }, i) => (
                                                <li>
                                                    <Typography id="bullets" variant="body1">
                                                        {experiences[index].bullet_points[i]}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        )
    }

}
export default Experience;