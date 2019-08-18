import React, { Fragment } from 'react'
import {Paper, Typography, ListItem, List, ListItemText} from '@material-ui/core'

export default ({styles, exercises, category}) => (

    <Paper style={styles}>
    {exercises.map(([group, exercises]) => {

console.log('return' + category)
        return (
        !category || category === group? <Fragment>
            <Typography variant="h5" style={{textTransform: "capitalize"}}>{group}</Typography>

            <List component="ul">
                    {exercises.map(({title}) => 
                        <ListItem button>
                            <ListItemText primary ={title} />
                        </ListItem>)}
            </List>

        </Fragment>: null

     ) })}
    </Paper>

)