import { useState } from 'react';


export function Form() {

  const [state, setState] = useState(0);
  const [amountbic1, setAmountbic1] = useState(0);
  const [amountbic2, setAmountbic2] = useState(0);
  const [amountbnc, setAmountbnc] = useState(0);
  const [bic1liberatorypayment, setBic1liberatorypayment] = useState(0);
  const [bic2liberatorypayment, setBic2liberatorypayment] = useState(0);
  const [bncliberatorypayment, setBncliberatorypayment] = useState(0);
  const [liberalprofessionaltraining, setLiberalprofessionaltraining] = useState(0);
  const [bic1rate, setBic1rate] = useState(21.2);
  const [bic2rate, setBic2rate] = useState(12.3);
  const [bncrate, setBncrate] = useState(23.1);
  const [bic1payrate, setBic1payrate] = useState(1.7);
  const [bic2payrate, setBic2payrate] = useState(1.0);
  const [bncpayrate, setBncpayrate] = useState(2.2);
  const [professionaltrainingrate, setProfessionaltrainingrate] = useState(0.2);

  function handleSubmitDown() {
    setState(state - 1);
  }
  
  function handleSubmitUp() {
    setState(state + 1);
  }

  function handleChangeAmountbic1(e) {
    setAmountbic1(e.target.value);
  }

  function handleChangeAmountbic2(e) {
    setAmountbic2(e.target.value);
  }

  function handleChangeAmountbnc(e) {
    setAmountbnc(e.target.value);
  }

  function handleChangeBic1liberatorypayment(e) {
    setBic1liberatorypayment(e.target.value);
  }

  function handleChangeBic2liberatorypayment(e) {
    setBic2liberatorypayment(e.target.value);
  }

  function handleChangeBncliberatorypayment(e) {
    setBncliberatorypayment(e.target.value);
  }

  function handleChangeLiberalprofessionaltraining(e) {
    setLiberalprofessionaltraining(e.target.value);
  }

  function handleChangeBic1rat(e) {
    setBic1rate(e.target.value);
  }

  function handleChangeBic2rat(e) {
    setBic2rate(e.target.value);
  }

  function handleChangeBncrat(e) {
    setBncrate(e.target.value);
  }

  function handleChangeBic1payrat(e) {
    setBic1payrate(e.target.value);
  }

  function handleChangeBic2payrat(e) {
    setBic2payrate(e.target.value);
  }

  function handleChangeBncpayrat(e) {
    setBncpayrate(e.target.value);
  }

  function handleChangeProfessionaltrainingrat(e) {
    setProfessionaltrainingrate(e.target.value);
  }

  
  if(state === 0){

      return (
      <>

          <div className='offset-m2 l6 offset-l3'>
          <div className='card-panel grey lighten-5 z-depth-1'>
            <div className='row valign-wrapper'>
              <div className='col s12'>
                <span className='black-text'>
                    <h3 className='center'>Votre chiffre d'affaire en € :</h3>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='offset-m2 l6 offset-l3 col s8'>
        <div className='card-panel grey lighten-5 z-depth-1'>
          <div className='row valign-wrapper'>
            <div className='col s12'>
              <div className='row'>
              <p>Montant BIC-1 :</p>
              <input className='col s11' type="number" value={amountbic1} onChange={handleChangeAmountbic1} />€
              <br/><br/>
              <p>Montant BIC-2 :</p>
              <input className='col s11' type="number" value={amountbic2} onChange={handleChangeAmountbic2} />€
              <br/><br/>
              <p>Montant BNC :</p>
              <input className='col s11' type="number" value={amountbnc} onChange={handleChangeAmountbnc} />€
              <br/><br/>
              <p>Versement liberatoire BIC-1 :</p>
              <input className='col s11' type="number" value={bic1liberatorypayment} onChange={handleChangeBic1liberatorypayment} />€
              <br/><br/>
              <p>Versement liberatoire BIC-2 :</p>
              <input className='col s11' type="number" value={bic2liberatorypayment} onChange={handleChangeBic2liberatorypayment} />€
              <br/><br/>
              <p>Versement liberatoire BNC :</p>
              <input className='col s11' type="number" value={bncliberatorypayment} onChange={handleChangeBncliberatorypayment} />€
              <br/><br/>
              <p>Formation prof.liberale :</p>
              <input className='col s11' type="number" value={liberalprofessionaltraining} onChange={handleChangeLiberalprofessionaltraining} />€
              <br/><br/><br/>
              <button className='waves-effect waves-light btn' onClick={handleSubmitUp}>
              Continuer
              </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </>
    );

    }else if(state === 1){

      return (
      <>

          <div className='offset-m2 l6 offset-l3'>
          <div className='card-panel grey lighten-5 z-depth-1'>
            <div className='row valign-wrapper'>
              <div className='col s12'>
                <span className='black-text'>
                    <h3 className='center'>Imposition actuel en % :</h3>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='offset-m2 l6 offset-l3 col s8'>
        <div className='card-panel grey lighten-5 z-depth-1'>
          <div className='row valign-wrapper'>
            <div className='col s12'>
              <div className='row'>
              <p>Activité achat-vente de marchandises (BIC-1) :</p>
              <input className='col s11' type="number" value={bic1rate} onChange={handleChangeBic1rat} />%
              <br/><br/>
              <p>Prestations de services commerciales et artisanales (BIC-2) :</p>
              <input className='col s11' type="number" value={bic2rate} onChange={handleChangeBic2rat} />%
              <br/><br/>
              <p>Prestations de services et professions libérales (BNC) :</p>
              <input className='col s11' type="number" value={bncrate} onChange={handleChangeBncrat} />%
              <br/><br/>
              <p>Versement liberatoire de l'impot sur le revenu (Prestations BIC) :</p>
              <input className='col s11' type="number" value={bic1payrate} onChange={handleChangeBic1payrat} />%
              <br/><br/>
              <p>Versement liberatoire de l'impot sur le revenu (vente BIC) :</p>
              <input className='col s11' type="number" value={bic2payrate} onChange={handleChangeBic2payrat} />%
              <br/><br/>
              <p>Versement liberatoire de l'impot sur le revenu (Prestations BNC) :</p>
              <input className='col s11' type="number" value={bncpayrate} onChange={handleChangeBncpayrat} />%
              <br/><br/>
              <p>Formation prof.liberale obligatoire :</p>
              <input className='col s11' type="number" value={professionaltrainingrate} onChange={handleChangeProfessionaltrainingrat} />%

              
              <br/><br/><br/>
              <button className='waves-effect waves-light btn' onClick={handleSubmitDown}>
                Retour
              </button>
              <button className='waves-effect waves-light btn' onClick={handleSubmitUp}>
                Continuer
              </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </>
    );

    }else{

      return (
        <>

        <div className='offset-m2 l6 offset-l3'>
          <div className='card-panel grey lighten-5 z-depth-1'>
            <div className='row valign-wrapper'>
              <div className='col s12'>
                <span className='black-text'>
                    <h4>Recettes totales</h4>
                    <p>Chiffre d'affaire : {(amountbic1/1 + amountbic2/1 + amountbnc/1)}€</p>
                    <p>Montant ajouter à la trésorerie : {(amountbic1/1 + amountbic2/1 + amountbnc/1) - ((bic1rate*amountbic1)/100) - ((bic2rate*amountbic2)/100) - ((bncrate*amountbnc)/100) - ((bic1payrate*bic1liberatorypayment)/100) - ((bic2payrate*bic2liberatorypayment)/100) - ((bncrate*bncliberatorypayment)/100) - ((professionaltrainingrate*liberalprofessionaltraining)/100)}€</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='offset-m2 l6 offset-l3 col s8'>
        <div className='card-panel grey lighten-5 z-depth-1'>
          <div className='row valign-wrapper'>
            <div className='col s12'>
                <span className='black-text'>
                <h4>Votre montant à déclarer :</h4>
                <p>Activité achat-vente de marchandises (BIC-1) : {(bic1rate*amountbic1)/100}€ :</p>
                <p>Prestations de services commerciales et artisanales (BIC-2) : {(bic2rate*amountbic2)/100}€</p>
                <p>Prestations de services et professions libérales (BNC) : {(bncrate*amountbnc)/100}€</p>
                <p>Versement liberatoire de l'impot sur le revenu (Prestations BIC) : {(bic1payrate*bic1liberatorypayment)/100}€</p>
                <p>Versement liberatoire de l'impot sur le revenu (vente BIC) : {(bic2payrate*bic2liberatorypayment)/100}€</p>
                <p>Versement liberatoire de l'impot sur le revenu (Prestations BNC) : {(bncrate*bncliberatorypayment)/100}€</p>
                <p>Formation prof.liberale obligatoire : {(professionaltrainingrate*liberalprofessionaltraining)/100}€ </p>
                </span>
              <button className='waves-effect waves-light btn' onClick={handleSubmitDown}>
              Retour
              </button>
            </div>
          </div>
        </div>
        </div>

        </>
      );
    }
}
