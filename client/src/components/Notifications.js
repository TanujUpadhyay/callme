import { Button } from '@material-ui/core';
import { Phone, VolumeOff } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import tring from '../sound/Tring.mp3';
import { SocketContext } from "../socketContext";



function Notifications() {
    const { call, callAccepted, answerCall } = useContext(SocketContext)
    const [isMute, setIsMute] = useState(false)
    return (
        <>
            {
                (call && call.isReceivedCall && !callAccepted) && (

                    <div style={{ display: "flex", justifyContent: "center" }} >

                        <h3 style={{ margin: 10 }} >{call.name || "someone"} is calling: </h3>
                        <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />}
                            onClick={answerCall}
                        >
                            Answer
                        </Button>
                        <VolumeOff style={{ cursor: "pointer", margin: 10 }} onClick={() => setIsMute(!isMute)} />
                        <audio
                            autoPlay="autoPlay"
                            href="audio_tag"
                            loop
                            muted={isMute}
                            src={tring}
                            type="audio/mpeg"
                            hidden
                        ></audio>
                    </div>
                )
            }
        </>
    )
}

export default Notifications
