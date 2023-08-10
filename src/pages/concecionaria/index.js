import Header from '../../components/headerpage';
import './index.scss';
import { useState } from 'react';

function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [numero3, setNumero3] = useState('');
  
  const [pagparcelas, setPagparcelas] = useState('');
  const [vtotal, setVtotal] = useState('');

  function altN1(e) {
    setNumero1(Number(e.target.value));
  }

  function altN2(e) {
    setNumero2(Number(e.target.value));
  }

  function altN3(e) {
    setNumero3(Number(e.target.value));
  }

  function calcular() {
    let caljuros =(numero3 / 100) * numero1
    let parc = (numero1 / numero2) + caljuros

    let totalVal = parc * numero2

    setPagparcelas(parc.toFixed(2))
    setVtotal(totalVal.toFixed(2)) 
  }

  return (
    <div className="Carros">
        <Header/>
        <div className='Carros-card'>

          <div className='Carros-card-l'>
            <img src="/assets/images/carro 2.png" />
          </div>
          <div className='Carros-card-r'>

            <div className='Carros-card-dados-up'>
              <h1>Valor Total</h1>
              <input type='number' onChange={altN1} value={numero1} />
            </div>
            <div className='Carros-card-dados-down'>
              
              <div className='Carros-card-dados-down-l'>
                <h1>Parcelas</h1>
                <input type='number' onChange={altN2} value={numero2}/>
              </div>
              <div className='Carros-card-dados-down-r'>
                <h1>Juros</h1>
                <input type='number' onChange={altN3} value={numero3}/>
              </div>

            </div>
            <button className='Calcular' onClick={calcular}>Calcular</button>
            <div className='Carros-card-resultado'>
              <h1>Parcela: R$ {pagparcelas}</h1>
              <h1>Valor total: R$ {vtotal}</h1>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
