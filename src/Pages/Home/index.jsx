import { Link } from 'react-router-dom'
import './style.css'
import { useEffect, useState } from 'react'
import Card from '../../Componentes/Card';
import { getCharacters } from '../../api/rickANDMorty';



function Home() {
  const [carregando, setCarregando] = useState(true);
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    async function carregar() {
      const dados = await getCharacters()
      setPersonagens(dados)
      setCarregando(false)
    }

    carregar()
  }, [])



  if (carregando) {
    return (<> carregando ... </>
    )
  }

  return (

    <div>
      <h2 className='titulo-lista'>Personagens - Rick and Mory </h2>


      <div className='lista-personagens'>
        {personagens.map((personagem) => (
          <Card personagem={personagem} />


        ))}


      </div>
    </div>

  )
}

export default Home
