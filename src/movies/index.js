import './index.scss';
import { useState } from 'react';
import Header from '../components/headerpage';

function Filmes() {
    

    return(
        <nav className='mae'>
            <Header/>
            <article className='all'>
                <header className='fundo'>
                    <div className='escrita'>
                        <h1>IMDB</h1>
                    </div>
                </header>  

                <main className='conteudo'>
                    <section className='titulo'>
                        <h1>Consulta de Filmes</h1>
                    </section>

                    <div className='inserir'>
                        <input type="text" />
                    </div>

                    <aside className='Result'>
                        <div className='code'>
                            <h3>Código</h3>

                        </div>

                        <div className='code'>
                            <h3>Título</h3>

                        </div>

                        <div className='code'>
                            <h3>Ano</h3>

                        </div>
                    </aside>

                </main>

            </article>
        </nav>
    )
}
export default Filmes;