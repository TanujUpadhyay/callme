import React from 'react'
import { Typography, AppBar } from "@material-ui/core"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"

import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'


const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '10px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
        backgroundColor: "#333",
        color: "white",
    },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',

    },

}));




function App() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <AppBar
                className={classes.appBar}
                position="static" color="inherit"
            >
                <Typography className={classes.header} variant="h4" align="center"  >CHEEZ_CHAT 🤟🏻</Typography>
            </AppBar>
            <VideoPlayer />
            <Options >
                <Notifications />
            </Options>
        </div>
    )
}

export default App
