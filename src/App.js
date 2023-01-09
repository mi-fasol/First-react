import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm'
import { useState } from 'react';

class App extends Component {
  render(){
    return (
      <div>
        <PhoneForm/>
      </div>
    );
  }
}

export default App;