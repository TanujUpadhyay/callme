import React, { useContext } from 'react'
import { Grid, Typography, Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { SocketContext } from "../socketContext"


const useStyles = makeStyles((theme) => ({
    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        backgroundColor: "#333",
        color: "white",
        margin: '10px',
    },
}));


function VideoPlayer() {
    const { call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        callEnded,
    } = useContext(SocketContext)
    const classes = useStyles();


    return (
        <Grid
            container
            className={classes.gridContainer}
        >


            {/* other user  video */}
            {
                callAccepted && !callEnded && (


                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6} >
                            <Typography variant="h5" gutterBottom>{(call && call.name) || "Guest"}</Typography>
                            <video playsInline autoPlay ref={userVideo} className={classes.video} />
                        </Grid>
                    </Paper>

                )
            }
            {/* our own video */}
            {
                stream && (

                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6} >
                            <Typography variant="h5" gutterBottom>{name || "Guest"}</Typography>
                            <video playsInline muted autoPlay ref={callAccepted && !callEnded ? userVideo : myVideo} className={classes.video} />
                        </Grid>
                    </Paper>
                )
            }



        </Grid>
    )
}

export default VideoPlayer
