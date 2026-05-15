import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Atividade2() {

const[Numero1, setNumero1] = useState("")
const[Numero2, setNumero2] = useState("")
const[Resultado, setResultado] = useState("")

function conta(event) {
event.preventDefault();
console.log 
setResultado(Number(Numero1)-Number(Numero2))
}

return (

        <>
<h2>Atividade2 - </h2>

<Link to="/Home" >
<button>home</button>
</Link>

<form onSubmit={conta} >


<label>Digite um numero </label>
<input
     type="Number"
    value={Numero1}
onChange={(event) => setNumero1(event.target.value)}
 />

<label>Digite outro numero </label>
<input
type="text"
value={Numero2}
onChange={(event) => setNumero2(event.target.value)}
/>

<label>vou fazer as contas dos numeros </label>

 <button type="submit">Resultado</button>

</form>
<p>{Resultado}</p>
     </>

   )
}

export default Atividade2










