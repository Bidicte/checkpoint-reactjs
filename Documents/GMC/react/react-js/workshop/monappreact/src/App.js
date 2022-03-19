import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function App() {
  return (
    <div className='container mt-3 align-center'><h1 className='bg-primary text-center'>FORMULAIRE</h1>

      <div className="row ">
        <div className="col-6">
            <div className="mb-3 ">
              <label htmlFor="formGroupExampleInput" className="form-label">Nom</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Entrer votre nom" />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Adresse</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Entrer votre adresse" />
            </div>
          
        </div>
        <div className="col-6">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Prénom</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Entrer votre prénom" />
            </div>

            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
              <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Entrer votre email" />
            </div>

        </div>
      </div>
    <div className="row">
        <div className="col-12">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
              <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Entrer votre email" />
            </div>
        </div>
        <div className="col-12">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">Mot de Passe</label>
              <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Entrer votre mot de passe" />
            </div>
        </div>

          <div className="col-12">
            <button type="submit" class="btn btn-primary d-flex justify-content-center">Sign in</button>
          </div>
    </div>
  </div>


  );
}

export default App;
