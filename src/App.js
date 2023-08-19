import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from './context/TodoContext';




// const defaultTodos = [
//   { id: 1, text: 'Aprender nuevas tencologias', completed: false },
//   { id: 2,text: 'Realizar las tareas de la casa', completed: false },
//   { id: 3, text: 'Visitar a mi amor', completed: false },
//   { id: 4, text: 'Arreglar la bicileta de mi amor', completed: false },
//   { id: 5, text: 'Ahorrar para comprar mi moto', completed: false }
// ];


 
//Componente Principal
/**
 * Componente es una funcion con su inicial en mayus
*/
function App() {
  
  return (
    <TodoProvider>
      <AppUI
      //  completedTodos = {completedTodos}
      //  totalTodos={totalTodos}
      //  searchValue={searchValue}
      //  setSearchValue={setSearchValue}
      //  searchedTodos={searchedTodos}
      //  funCompleteTodo = {completeTodo}
      //  funDeleteTodo={deleteTodo}
      //  loading={loading}
      //  error={error}
      />
    </TodoProvider>
  );

}

export default App;
