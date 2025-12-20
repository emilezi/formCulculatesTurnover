import { useState } from 'react';
import { Form } from './Form.js';
import './style/materialize/css/materialize.css';
import './style/index.css';


function App() {

  const [state, setState] = useState(0);
  
  function handleSubmitUp() {
    setState(state + 1);
  }

  if(state === 0){
      
return (
      <>
      <div className="container">
        <div className="section">

          <div className='offset-m2 l6 offset-l3'>
          <div className='card-panel grey lighten-5 z-depth-1'>
            <div className='row valign-wrapper'>
              <div className='col s12'>
                <span className='black-text'>
                    <h3>Bienvenue dans l'application de calcul de votre chiffre d'affaires :</h3>
                    <br/>
                    <button className='waves-effect waves-light btn' onClick={handleSubmitUp}>
                    Commencer
                    </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        </div>
        </div>
      </>
    );

    }else{
      return (
        <div className="container">
        <div className="section">
          
          <Form />

        </div>
        </div>
      );
    }
}

export default App;
