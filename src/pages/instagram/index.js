
import { useState } from "react";
import './index.scss';


function Instagram () {
    

    return(
        <nav className="mae">
            <header className="krl"><p><strong>Novas Publicações</strong></p></header>

            <aside className="mae-dolado">
                <div className="mae-dolado-logo">
                    <img src="/assets/images/logoWhite.png" alt="" />
                    <h1>Portifolio.me</h1>
                </div>

                <section className="mae-dolado-incos">
                    <div className="symbols">
                    <img src="/assets/images/Vector.png" alt="" />
                    <h6>Página Inicial</h6>
                    </div>
                    
                    <div className="symbols">
                        <img src="/assets/images/Vector (1).png" alt="" />
                        <h6>Pesquisa</h6>
                    </div>

                    <div className="symbols">
                        <img src="/assets/images/Group.png" alt="" />
                        <h6>Reels</h6>
                    </div>

                    <div className="symbols">
                        <img src="/assets/images/Vector (2).png" alt="" />
                        <h6>Mensagens</h6>
                    </div>

                    <div className="symbols">
                        <img src="/assets/images/Vector (3).png" alt="" />
                        <h6>Notificações</h6>
                    </div>

                    <div className="symbols">
                        <img src="/assets/images/Vector (4).png" alt="" />
                        <h6>Criar</h6>
                    </div>  
                </section>
            </aside>

            <article className="Formulario">
                <header className="seguidores">
                    <img src="/assets/images/pessoas.png" alt="" />
                </header>

                <main className="Box">
                    <div className="Usuario-Tempo">
                        
                        <div className="coco">
                        <p>Usuário:</p>
                        <input type="text" />
                        </div>

                        <div className="coco">
                        <p>Tempo:</p>
                        <input type="week" />
                        </div>

                    </div>

                    <div className="Avatar">
                        <p>Avatar:</p>
                        <input type="file" />
                    </div>

                    <div className="descricao">
                        <p>Descrição:</p>

                      <label id="krl" for="descricao"></label>
                      <textarea cols="50" rows="4"></textarea>
                    </div>

                    <div className="Post-curti">
                       
                        <p>Post:</p>
                        <input type="url" />
                        
                        <p>Curtidas:</p>
                        <input type="number" />
                    </div>

                    <div className="postar">
                        <button>Postar</button>
                    </div>
                </main>
            </article>
            
        </nav>
    )
}

export default Instagram;