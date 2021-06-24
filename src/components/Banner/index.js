import React from 'react'
import Img from '../../assets/imagem.svg'
import './style.css'

const Banner = () => {
    return(
        <div className="main">
            <div>
                <h1>Meu site animado</h1>
                <p>Vem comigo conhecer ...</p>
            </div>

            <img src={Img} alt="Ilustração da logo react" />
        </div>
            
    )
}

export default Banner