import React from 'react';
import Form from './Form.js';
// import MyForm from './MyForm.js';
import '../styles/global.css';
import Game from './Game';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <hr></hr>
      <div style={{padding: 40}}>
        <Form/>
      </div>
      <hr></hr>
      {/* <div>
        <MyForm/>
      </div> */}
      <div>
        <Game/>
      </div>
    </div>
  );
}

export default App;
