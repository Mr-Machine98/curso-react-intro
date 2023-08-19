import '../../css/container.css'
import React from 'react';
import { TodoContext } from '../../context/TodoContext';
//Componenete todo counter
function TodoSearch() {
    const { searchValue, setSearchValue}  = React.useContext(TodoContext);
    //ELEMENTO
    return (
        <input 
            value={searchValue} 
            placeholder="Buscar tarea..." 
            onChange={ (event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}
  
export { TodoSearch };