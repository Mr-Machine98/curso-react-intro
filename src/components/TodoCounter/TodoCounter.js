import React from 'react';
import '../../css/TodoCounter.css'
import { TodoContext } from '../../context/TodoContext';


//Componenete todo counter
/**
 * Props 
 * Manera de comunicacion entre componenetes
*/

// objeto con propiedades css
/*const estilos = {
  backgroundColor: 'red',
  fontSize: '20px',
  textAlign: 'center',
  margin: 0
}*/


function TodoCounter(  ) {

  const { 
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);

  //ELEMENTO
  // Style n REACT el que comenzaremos a utilizar son las style en linea
  if (completedTodos === totalTodos) return  <h1> Felicitaciones Maestr@ completaste todas las tareas.👏👍</h1>;
  else return <h1 /*style={estilos}*/>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's</h1>;
}

export { TodoCounter };