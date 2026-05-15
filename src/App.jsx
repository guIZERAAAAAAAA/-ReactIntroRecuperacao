import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Componentes/Footer'
import Header from './Componentes/Header'
import Atividade1 from './Pages/Atividade1'
import Home from './Pages/Home'
import Atividade2 from './Pages/Atividade2'
import Atividade3 from './Pages/Atividade3'
import Atividade4 from './Pages/Atividade4'
import Mundo from './Pages/Mundo'

function App() {
 

  return (

    <>
<Header/>

<Routes>

  <Route path='/' element={<Home/> } />

  <Route path='/Atividade1'  element={<Atividade1/>} />

  <Route path='/Atividade2'  element={<Atividade2/>} />

  <Route path='/Atividade3'  element={<Atividade3/>} />

   <Route path='/Atividade4'  element={<Atividade4/>} />

    <Route path='/Mundo'  element={<Mundo/>} />

</Routes >

<Footer/>
    </>
  )
}

export default App