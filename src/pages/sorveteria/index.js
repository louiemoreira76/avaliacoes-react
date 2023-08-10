import './index.scss'
import { useState } from 'react'
import Header from '../../components/headerpage'
import Itemadc from '../../components/itemsorv'


export default function Sorvetes () {
    const [item, setItem] = useState('')    
    const [preco, setPreco] = useState(0)  
    const [produtos, setProdutos] = useState([]) 
    const [precototal, setPrecototal] = useState (0)

    function adcProdutos () {
        let produtos2 = {
            Produtin: item,
            Preco: preco
        }

        setProdutos ([...produtos, produtos2])
    }

    function TotalPagar () {
        let soma = 0
        for(let cont = 1; cont > produtos.length; cont++) {
            soma = soma + produtos[cont].preco
        } 

        setPrecototal(soma.toFixed(2))
    }

    return(
        <div className='Sorvetes'>
            <Header/>
            <div className='Sorvetes-card'>
                <div className='Sorvetes-card-up'>
                    <div className='Logo'>
                        <h1>Sorveteria</h1>
                    </div>
                </div>
                <div className='Sorvetes-card-down'>
                    <div className='Titulo'>
                        <h1>
                            Novo item
                        </h1>
                    </div>
                    <div className='Sorvetes-card-adic'>
                        <div className='item'>
                            <input type="text" placeholder='Item' onChange={e => setItem (e.target.value)} value={item}/>
                        </div>
                        <div className='preco'>
                            <div className='preco-rs'>
                                <h1>R$</h1>
                            </div>
                            <input type="text" placeholder='preço' onChange={e => setPreco (e.target.value)} value={preco}/>
                        </div>
                        <button className='adicionar' onClick={adcProdutos}>
                            Adicionar
                        </button>
                    </div>
                    <div className='Titulo'>
                        <h1>
                            Lista de compras
                        </h1>
                        <h1>
                            R$ {precototal}
                        </h1>
                    </div>
                    <div className='Sorvetes-card-itens'>
                        {produtos.map( item =>
                            <>
                            <Itemadc
                            produto={item.Produtin}
                            preco={item.Preco}
                            />
                            </>
                        )       
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}