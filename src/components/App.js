import React, {
  Component,
  Fragment
} from 'react';
import './App.css';
import {
  Header,
  Footer
} from '../components/Layouts'

import Exercises from './Exercises'
import {exercises, muscles} from '../store'


export default class extends Component{

  state = {
    exercises
  }

  getExerciesByMuscle(){
    return Object.entries(this.state.exercises.reduce((exes, ex) => {

      const {muscles} = ex;

      exes[muscles] = exes[muscles]? [...exes[muscles], ex]: [ex];

      return exes;

    }, {}));
  }
  
  render() {
    const exercises = this.getExerciesByMuscle();
    return <Fragment>
      
     <Header/>
     <Exercises exercises={exercises}/>
     <Footer muscles={muscles}/>
      
      </Fragment>

  }

}

