import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import {Container} from 'react-bootstrap';
import Appcomponents from './components/Appcomponents';
import Frase from './components/Frase';
import {useEffect, useState} from 'react';


function App() {
  const [personaje, setPersonaje] = useState({});

useEffect(()=>{
  consultarAPI();
},[])

const consultarAPI = async() =>{
  
  try {
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      setPersonaje(dato[0]);
      
    } catch (error) {
       console.log(error);
      //  mostrar un mensaje al usuario
    }
}
  return (
   <div className='container fondo'>
    
   <Appcomponents></Appcomponents> 
   <button className= "btn btn-warning text-center my-4" onClick={consultarAPI}> Obtener Frase </button>
   <Frase personaje={personaje}></Frase>
   <p>hjhi</p>
   </div>
  
  );
}

export default App;
