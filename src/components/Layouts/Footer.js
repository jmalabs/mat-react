import React from 'react'
import {Paper, Tabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';


export default ({muscles, category, onSelect}) => {


  const index = category 
  ? muscles.findIndex(m => m === category) + 1 
  : 0

  console.log('index');
  console.log(index);

  return <Paper>
      <Tabs
        value ={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange = {(e, index) => {

          onSelect(index === 0? '' : muscles[index - 1])

        }}
      >
        <Tab label="All" />

        {muscles.map(group => 
          <Tab label={group} />

        )}
      
      </Tabs>
    </Paper>
}
