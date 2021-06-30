import React, {useState, useEffect} from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'




const Extra = () => {
    const [personagens, setpersonagens] = useState([])
    const [filtro, setFiltro] = useState([])
    const [pesquisa, setPesquisa] = useState('')
    
    useEffect(()=>{
        fetch('https://www.breakingbadapi.com/api/characters')
        .then(resposta => resposta.json())
        .then(dados => setpersonagens(dados))

    },[]) 

    function addCurtida(cha_id) {
        const novaListaPersonagens = personagens.map(personas => {
            return personas.cha_id === cha_id ? 
            {...personas, favorite:!personas.favorite}
            :personas
        })
        setpersonagens(novaListaPersonagens)
    }

    useEffect(()=>{
        setFiltro(
            personagens.filter(personas => {
                return personas.name.includes(pesquisa)
            })
        )
    },[pesquisa, personagens])

    return(
        <>
            <Menu />
            <div>
                <input placeholder="Pesquise um personagem" onChange=
                {e=>{setPesquisa(e.target.value)}}/>
                {filtro.map(personas => (
                    <div key={personas.cha_id}>
                        <p>{personas.name}</p>
                        <img src={personas.img} alt={personas.name}/>
                    
                    </div>
                
                ))}
            </div>
            
            <div>
                <Footer />
            </div>
          
        </>
    )
}

export default Extra