import React, { useContext, useState } from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { SocketContext } from "../socketContext"
import { Assessment, Phone, PhoneDisabled } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    container: {
        width: '600px',
        margin: '35px 0',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    margin: {
        marginTop: 20,
    },
    padding: {
        padding: 20,
    },
    paper: {
        padding: '10px 20px',
        border: '2px solid black',
        backgroundColor: "#333",
        color: "white",
    },
    textarea: {
        "input-label": {
            "&::placeholder": {
                color: "white"
            },
            color: "white", // if you also want to change the color of the input, this is the prop you'd use
        }
    }
}));

function Options({ children }) {

    const {
        callAccepted,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
    } = useContext(SocketContext)

    const classes = useStyles();

    const [idToCall, setIdToCall] = useState("");

    return (
        <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12} md={6} className={classes.padding} >
                            <Typography gutterBottom variant="h6" >Account Info</Typography>
                            <TextField InputProps={{ style: { color: "#fff" } }} InputLabelProps={{
                                style: { color: '#fff' }
                            }} label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <CopyToClipboard text={me} className={classes.margin} >
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assessment fontSize="large" />}>
                                    Copy Your Id
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.padding} >
                            <Typography gutterBottom variant="h6" >Make a call</Typography>
                            <TextField
                                InputProps={{ style: { color: "#fff" } }} InputLabelProps={{
                                    style: { color: '#fff' }
                                }} label="ID" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {
                                callAccepted && !callEnded ? (
                                    <Button variant="contained" color="secondary" fullWidth startIcon={<PhoneDisabled fontSize="large" />}
                                        className={classes.margin}
                                        onClick={leaveCall}
                                    >
                                        Hang up
                                    </Button>
                                ) : (
                                    <Button variant="contained" color="primary" fullWidth startIcon={<Phone fontSize="large" />}
                                        className={classes.margin}
                                        onClick={() => {
                                            callUser(idToCall)
                                        }}
                                    >
                                        Call
                                    </Button>
                                )
                            }


                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>

        </Container>
    )
}

export default Options
