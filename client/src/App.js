import React from 'react'
import { Typography, AppBar } from "@material-ui/core"

function App() {
    return (
        <div>
            <AppBar
                position="static" color="inherit"
            >
                <Typography variant="h2" align="center" >CHAT ME </Typography>
            </AppBar>
        </div>
    )
}

export default App
