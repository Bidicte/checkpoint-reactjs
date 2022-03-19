import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <div className='container mt-3'><h1 className='bg-primary text-center'>REACT APP</h1>

      <div className="mb-3 ">
        <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
      </div>
      <div className="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
      </div>


  );
}

export default App;
