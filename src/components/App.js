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
    exercises,
    category: ''
  }

  handleCategorySelected = category => {
    console.log(JSON.stringify('this.state'))
    console.log(JSON.stringify(this.state))
    this.setState({
      category
    })
  }

  getExerciesByMuscle(){
    return Object.entries(this.state.exercises.reduce((exes, ex) => {

      const {muscles} = ex;

      exes[muscles] = exes[muscles]? [...exes[muscles], ex]: [ex];

      return exes;

    }, {}));
  }
  
  render() {

    
    const exercises = this.getExerciesByMuscle()
    console.log(JSON.stringify(exercises))
    const {category} = this.state;
    return <Fragment>
      
     <Header/>
     <Exercises exercises={exercises}
      category = {category}/>
     <Footer muscles={muscles} 
      onSelect={this.handleCategorySelected}
      category = {category}/>
      
      </Fragment>

  }

}

