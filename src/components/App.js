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


export default class extends Component{

  render() {
    return <Fragment>
      
     <Header/>
     <Exercises/>
     <Footer/>
      
      </Fragment>

  }

}

