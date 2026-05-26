import'./style.css' 

function Card ( { personagem }){

    return(
    <div className='char-card'>
          <img src={personagem.image} alt="" />
          <h2>{personagem.name}</h2>    

          <div className='char-info'></div>
          <span>Espécie: {personagem.species}</span>
          <span>Genero: {personagem.gender}</span>
          <span>Status: {personagem.status}</span>

        </div>
  
    )
}
export default Card