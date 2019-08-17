import React from "react";
import { Grid, Paper } from "@material-ui/core";
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const styles = {

  Paper: {padding: 10, margin: 10, height: 500, overflow: 'auto'}

}

export default props => (
  <Grid container>
    <Grid item sm>
      <LeftPane styles={styles.Paper} exercises={props.exercises}/>
    </Grid>
    <Grid item sm>
     <RightPane styles={styles.Paper} />
    </Grid>
  </Grid>
);
