import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import {Container} from 'react-bootstrap';
import Appcomponents from './components/Appcomponentes';
import Frase from './components/Frase';
import {useEffect, useState} from 'react';
import Spinner from './components/Spinner';


function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner ]=useState(true)

useEffect(()=>{
  consultarAPI();
},[])

const consultarAPI = async() =>{
  
  try {
    //mostrar spinner
    setMostrarSpinner(true)
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      setPersonaje(dato[0]);
      //mostrar el componente frase
      setMostrarSpinner(false)
      
    } catch (error) {
       console.log(error);
      //  mostrar un mensaje al usuario
    }
}


  //condicion logica if, operador ternario?:
  // (condicion logica)?(lógica a ejecutar si cumplo la condición lógica):(lógica a ejecutar si no  cumplo la condición lógica)
  const mostrarComponente = (mostrarSpinner=== true)?(<Spinner></Spinner>):(<Frase personaje={personaje}></Frase>)

  return (
< Container>
   <div className='container fondo'>
    
   <Appcomponents></Appcomponents> 
   <button className= "btn btn-warning text-center my-4" onClick={consultarAPI}> Obtener Frase </button>
   {mostrarComponente}
   </div>
  
   </Container>
  );

  
}

export default App;
