import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return (
      <div className='Class'>
        <h1>This is creatd using Class Component</h1>
        <p>This is done using external CSS</p>
        <p style={{ color: 'blue' }}>This is done using inline CSS</p>
      </div>
    );
  }
}

export default ClassComponent;
