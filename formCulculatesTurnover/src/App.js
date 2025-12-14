import { useState } from 'react';

function App() {

  const [state, setState] = useState(0);
  const [amountbic1, setAmountbic1] = useState(0);
  const [amountbic2, setAmountbic2] = useState(0);
  const [amountbnc, setAmountbnc] = useState(0);
  const [bic1liberatorypayment, setBic1liberatorypayment] = useState(0);
  const [bic2liberatorypayment, setBic2liberatorypayment] = useState(0);
  const [bncliberatorypayment, setBncliberatorypayment] = useState(0);
  const [liberalprofessionaltraining, setLiberalprofessionaltraining] = useState(0);
  const [bic1rate, setBic1rate] = useState(0);
  const [bic2rate, setBic2rate] = useState(0);
  const [bncrate, setBncrate] = useState(0);
  const [bic1payrate, setBic1payrate] = useState(0);
  const [bic2payrate, setBic2payrate] = useState(0);
  const [bncpayrate, setBncpayrate] = useState(0);
  const [professionaltrainingrate, setProfessionaltrainingrate] = useState(0);

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

  if(state == 0){
      
return (
      <>
        <h1>Bienvenue dans l'application de calcul de votre chiffre d'affaires :</h1>
        <br/>
        <button onClick={handleSubmitUp}>
          Commencer
        </button>
      </>
    );

    }else if(state == 1){

      return (
      <>
        <h1>Votre chiffre d'affaire en € :</h1>
        <p>Montant BIC-1 :</p>
        <input type="number" value={amountbic1} onChange={handleChangeAmountbic1} />€
        <p>Montant BIC-2 :</p>
        <input type="number" value={amountbic2} onChange={handleChangeAmountbic2} />€
        <p>Montant BNC :</p>
        <input type="number" value={amountbnc} onChange={handleChangeAmountbnc} />€
        <p>Versement liberatoire BIC-1 :</p>
        <input type="number" value={bic1liberatorypayment} onChange={handleChangeBic1liberatorypayment} />€
        <p>Versement liberatoire BIC-2 :</p>
        <input type="number" value={bic2liberatorypayment} onChange={handleChangeBic2liberatorypayment} />€
        <p>Versement liberatoire BNC :</p>
        <input type="number" value={bncliberatorypayment} onChange={handleChangeBncliberatorypayment} />€
        <p>Formation prof.liberale :</p>
        <input type="number" value={liberalprofessionaltraining} onChange={handleChangeLiberalprofessionaltraining} />€

        
        <br/><br/>
        <button onClick={handleSubmitDown}>
          Retour
        </button>
        <button onClick={handleSubmitUp}>
          Continuer
        </button>
      </>
    );

    }else if(state == 2){

      return (
      <>

        <h1>Imposition actuel en %:</h1>
        <p>Activité achat-vente de marchandises (BIC-1) :</p>
        <input type="number" value={bic1rate} onChange={handleChangeBic1rat} />%
        <p>Prestations de services commerciales et artisanales (BIC-2) :</p>
        <input type="number" value={bic2rate} onChange={handleChangeBic2rat} />%
        <p>Prestations de services et professions libérales (BNC) :</p>
        <input type="number" value={bncrate} onChange={handleChangeBncrat} />%
        <p>Versement liberatoire de l'impot sur le revenu (Prestations BIC) :</p>
        <input type="number" value={bic1payrate} onChange={handleChangeBic1payrat} />%
        <p>Versement liberatoire de l'impot sur le revenu (vente BIC) :</p>
        <input type="number" value={bic2payrate} onChange={handleChangeBic2payrat} />%
        <p>Versement liberatoire de l'impot sur le revenu (Prestations BNC) :</p>
        <input type="number" value={bncpayrate} onChange={handleChangeBncpayrat} />%
        <p>Formation prof.liberale obligatoire :</p>
        <input type="number" value={professionaltrainingrate} onChange={handleChangeProfessionaltrainingrat} />%

        
        <br/><br/>
        <button onClick={handleSubmitDown}>
          Retour
        </button>
        <button onClick={handleSubmitUp}>
          Continuer
        </button>
      </>
    );

    }else{

      return (
        <>
        <h1>Argent ajouter à la trésorerie</h1>
        <p>Montant : {(amountbic1/1 + amountbic2/1 + amountbnc/1) - ((bic1rate*amountbic1)/100) - ((bic2rate*amountbic2)/100) - ((bncrate*amountbnc)/100) - ((bic1payrate*bic1liberatorypayment)/100) - ((bic2payrate*bic2liberatorypayment)/100) - ((bncrate*bncliberatorypayment)/100) - ((professionaltrainingrate*liberalprofessionaltraining)/100)}€</p>

        <h1>Votre montant à déclarer :</h1>
        <p>Activité achat-vente de marchandises (BIC-1) : {(bic1rate*amountbic1)/100}€ :</p>
        <p>Prestations de services commerciales et artisanales (BIC-2) : {(bic2rate*amountbic2)/100}€</p>
        <p>Prestations de services et professions libérales (BNC) : {(bncrate*amountbnc)/100}€</p>
        <p>Versement liberatoire de l'impot sur le revenu (Prestations BIC) : {(bic1payrate*bic1liberatorypayment)/100}€</p>
        <p>Versement liberatoire de l'impot sur le revenu (vente BIC) : {(bic2payrate*bic2liberatorypayment)/100}€</p>
        <p>Versement liberatoire de l'impot sur le revenu (Prestations BNC) : {(bncrate*bncliberatorypayment)/100}€</p>
        <p>Formation prof.liberale obligatoire : {(professionaltrainingrate*liberalprofessionaltraining)/100}€ </p>

        <button onClick={handleSubmitDown}>
          Retour
        </button>
        </>
      );
    }
}

export default App;
