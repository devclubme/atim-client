import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginBottom: theme.spacing(3),
        color: '#f5f5f5'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        paddingLeft: theme.spacing(1),
        flexGrow: 1,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
        marginLeft: theme.spacing(3)
    },
}));

export default function Navigation() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color="#f5f5f5" >
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="#f5f5f5" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Avatar className={classes.bigAvatar} src={require('../assets/atim-logo.png')} className="nav-avatar">
                    </Avatar>
                    <Typography variant="h4" className={classes.title} style={{
                    }}>
                        atim
                    </Typography>
                    <Button color="inherit">subscribe</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}