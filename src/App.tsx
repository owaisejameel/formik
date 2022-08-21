import React from 'react';
import { SingUp } from './components/SingUp';



function App() {
  return (
   <div className="container">
    <div className="row">
      <div className="col-md-5">
        <SingUp />
      </div>
      <div className="col-md-7">
        <div className="container mt-5">
          <h1>signup</h1>
        <img src="img.jpg" alt="sideimage~" />
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
