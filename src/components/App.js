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
import {exercise, muscles} from '../store'


export default class extends Component{

  render() {
    return <Fragment>
      
     <Header/>
     <Exercises/>
     <Footer muscles={muscles}/>
      
      </Fragment>

  }

}

