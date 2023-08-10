import './index.scss'

export default function Itemadc(props) {

    return (
        <div className='itens-adicionados'>
            <h1>{props.produto}</h1>
            <h1>R$ {props.preco}</h1>
        </div>
    )
}