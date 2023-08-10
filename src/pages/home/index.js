import './index.scss'
import { useState } from 'react'

import Header from '../../components/headerpage'
import { Link } from 'react-router-dom'

export default function Home() {

    return(
        <div className='Home'>
            
            <Header/>
            <section className='Home-card'>
                <div className='Home-image'>
                    <div className='Home-logo'>
                        <h1>Atividades👨‍💻</h1>
                    </div>
                </div>
                <div className='Home-tarefas'>
                    <Link
                        to="/concecionaria"
                        onClick={() => {
                        alert("Vrum Vrum");
                        }}
                        >
                        Concecionaria
                    </Link>

                    <Link to="/sorvetinho" onClick={() => {alert("🥶🤤😋");}}>Sorveteria</Link>

                    <Link to="/insta" onClick={() => {alert("🐦‍Lets go!!!");}}>Instagram</Link>

                    <Link to="/filme" onClick={() => {alert("FILMES🎥");}}>Filmes</Link>
                </div>

            </section>
        </div>
    )
}