import React from 'react';
import {
    Grid, 
    Typography,
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    List
} from "@material-ui/core";
import profile from '../../assets/profile.jpg';
import github from '../../assets/github-icon.png';
import linkedin from '../../assets/linkedin-icon.png';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import "./navbar.styles.scss";

const navOptions = [
    { label: "About Me", icon: <InfoOutlinedIcon />, href: "/about-me" },
    { label: "Experience", icon: <WorkOutlineOutlinedIcon />, href: "/experience" },
    { label: "Projects", icon: <AccountTreeRoundedIcon />, href: "/projects" },
    { label: "Resume", icon: <DescriptionOutlinedIcon />, href: "/resume" }
]
class NavBar extends React.Component {
    state = {
        selected: undefined
    }

    handleChange = (newSelected) => {
        this.setState({ selected: newSelected });
    };

    render() {
        return (
            <Drawer id="nav" variant="permanent">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch">

                    <Grid item xs={12}>
                        <Typography variant="h4">Jenisha Thomas</Typography>
                    </Grid>
                    <Grid id="profile" item xs={12}>
                        <img src={profile} alt="Profile"></img>
                    </Grid>

                    <Grid id="social-icons" item xs={11}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={4}
                        >
                            <Grid item xs={1}>
                                <a href="//www.github.com/JenishaT"><img src={github} alt="Github"></img></a>
                            </Grid>
                            <Grid item xs={1}>
                                <a href="//www.linkedin.com/in/jenisha-thomas"><img src={linkedin} alt="LinkedIN"></img></a>
                            </Grid>
                            <Grid item xs={1}>
                                <MailOutlineRoundedIcon id="mail-icon" style={{ fontSize: 30 }} />
                            </Grid>
                        </Grid>
                    </Grid>

                    <section className="nav-options">
                        <List>
                            {navOptions.map(({ icon, label, href }, index) => (
                                <Grid item xs={12}>
                                    <ListItem
                                        button
                                        key={index}
                                        selected={href === document.location.pathname}
                                        onClick={() => this.handleChange(index)}
                                        component="a" href={href}
                                    >
                                        <Grid container justify="center" direction="row" alignItems="center">
                                            <Grid item xs={2} md={2}>
                                                <ListItemIcon id="icon">{icon}</ListItemIcon>
                                            </Grid>
                                            <Grid item md={5}>
                                                <ListItemText>
                                                    <Typography id="nav-label" variant="h5">
                                                        {label}
                                                    </Typography>
                                                </ListItemText>
                                            </Grid>
                                        </Grid>

                                    </ListItem> </Grid>
                            ))}
                        </List>
                    </section>

                </Grid>



            </Drawer>

        )
    }
}

export default NavBar;