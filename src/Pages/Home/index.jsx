import { Link } from 'react-router-dom'
import './style.css'

function Home() {
return(
  <>
  

  <Link to='/Atividade1' >
  <button>Atividade1</button>
  </Link>

  <Link to='/Atividade2' >
  <button>Atividade2</button>
  </Link>

  <Link to='/Atividade3' >
  <button>Atividade3</button>
  </Link>

  <Link to='/Atividade4' >
  <button>Atividade4</button>
  </Link>

  <Link to='/Mundo' >
  <button>Mundo</button>
  </Link>


  </>


)


}

export default Home
