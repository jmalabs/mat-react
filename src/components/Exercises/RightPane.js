import React from 'react'
import {Paper, Typography} from '@material-ui/core'

export default props => (

    <Paper style={props.styles}>
    <Typography variant="h6">
        Welcome!

    </Typography>
    <Typography variant="subtitle1">
       Please select exercise from the left.

    </Typography>
    
    </Paper>
)