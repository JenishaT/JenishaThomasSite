import React from 'react';
import { Grid, Card, Typography } from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import './projects.styles.scss'

const projects = [
    {
        name: "OnTime High Fidelity Prototype",
        date: "April 2020 – August 2020",
        role: "UX Designer in a team of 6",
        tools: "Figma",
        link: ["https://www.figma.com/proto/emWIfJQTsqAGe8Kj0EeBDZ/OnTime?node-id=23%3A26&scaling=scale-down", "Figma Prototype"],
        bullet_points: [
            "Implemented high fidelity prototype of OnTime using Figma, an app designed to provide users with a list of nearby medical centers with wait and commute times, winning first place in the IBM design competition out of 30 other competitor groups"
        ]
    },
    {
        name: "Find Dining Scarborough",
        date: "April 2020 – August 2020",
        role: "Full Stack Developer in a Team of 5",
        tools: "MongoDB, Express, React, Node.js, VSCode IDE, Redux DevTools, GitHub, Heroku",
        link: ["https://scarb-dining.herokuapp.com/", "website"],
        bullet_points: [
            "Created a website for client, where restaurant owners can create their unique restaurant page and customers can discover them, focusing on the storytelling of each restaurant",
            "Implemented CRUD functionalities allowing restaurant owners to add, edit and modify menu items, pictures and other restaurant specific information"
        ]
    },
    {
        name: "DE2 Tetris",
        date: "May 2019 - August 2019",
        role: "Lead Verilog Developer in a Team of 4",
        tools: "Verilog, Github",
        link: ["https://github.com/JenishaT/DE2_Tetris", "GitHub"],
        bullet_points: [
            "Created a simple implementation of Tetris in Verilog, playable using DE2-115 FPGA board (Cyclone IV E - EP4CE115F29C7)",
            "Utilized a Finite state machine to implement the game logic to check completed rows, increment score and store high score"
        ]
    },
    {
        name: "Image Processing",
        date: "July 2019",
        role: "Back-end developer",
        tools: "C, Linux command line",
        link: null,
        bullet_points: [
            "Created a program which modified the resolution of a PGM image through the implementation of recursive algorithms and quad tree data structures, gaining a better understanding of recursive processes in C"
        ]
    },    
    {
        name: "ElleHacks: TutorTree",
        date: "February 2019",
        role: "Lead back-end developer in a Team of 4",
        tools: "Python, Github, Notepad++, MS PowerPoint",
        link: ["https://github.com/JenishaT/TutorTree", "GitHub"],
        bullet_points: [
            "Implemented a text-based app connecting tutees with tutors based on specific traits practicing exemplary programming and application design",
            "Planned and presented a viable business plan utilizing Microsoft PowerPoint to successfully communicate the information, achieving placement in the Top 5 and winning the RBC challenge",
            "Practiced exceptional skills in algorithm and database design through successful creation and implementation of databases to store, sort and match users’ information"
        ]
    },
    {
        name: "Pinpoint Apparel Website",
        date: "October 2017 – May 2018",
        role: "Assistant Web Designer in a team of 6 ",
        tools: "HTML, CSS, Bootstrap, Github, Atom IDE",
        link: null,
        bullet_points: [
            "Assisted with the design and development of the Junior Achievement Pinpoint Apparel’s website, utilizing bootstrap libraries to produce a visually pleasing website completed with scrolling picture panels and slideshows, gaining competency in web design using HTML and CSS"
        ]
    },
    {
        name: "Victoria Airways",
        date: "January 2017",
        role: "Design and Development Lead in a team of 3",
        tools: "Java, Github, BlueJ IDE",
        link: null,
        bullet_points: [
            "Engineered an airlines database system utilizing a command line interface developing high fluency in Java and achieving a grade of 95% on the project",
            "Utilized Github to effectively and simultaneously develop and edit the code, resulting in the early completion of the application ",
            "Performed multiple unit tests on individual functions, improving efficiency and reducing runtime by 20%"
        ]
    } 

]

class Project extends React.Component {
    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                {projects.map(({ project }, index) => (
                    <Grid item xs={11} key={index}>
                        <Card elevation={5}>
                            <CardContent id="project-card">
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
                                            <Grid item xs={10}>
                                                <Typography id="project-name" variant="h5">
                                                    {projects[index].name}
                                                </Typography>
                                                <Typography id="role" variant="subtitle1">
                                                    {projects[index].role}
                                                </Typography>
                                                <Typography id="tools" variant="body1">
                                                    {projects[index].tools}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Typography id="date" variant="subtitle1">
                                                    {projects[index].date}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ul>
                                            {projects[index].bullet_points.map(({ point }, i) => (
                                                <li>
                                                    <Typography id="bullets" variant="body1">
                                                        {projects[index].bullet_points[i]}
                                                    </Typography>
                                                </li>
                                            ))}
                                        </ul>
                                    </Grid>
                                    {projects[index].link !== null ? (
                                        <Grid item xs={12}>
                                            <Typography id="bullets" variant="body1">
                                                Check out the <a href={projects[index].link[0]}>{projects[index].link[1]}</a>
                                            </Typography>
                                        </Grid>
                                    ) : null}
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        )
    }
}

export default Project