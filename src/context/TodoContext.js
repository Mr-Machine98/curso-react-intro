import React from 'react';
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext();


function TodoProvider({ children }) {

  //Estados -------------------------------------------
  const [searchValue, setSearchValue] = React.useState(''); // este estring vacio es para mostrar desde el inicio un valor en el input
  // console.log('Los usuarios buscan todos de: ' + searchValue);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  // Estado para el Modal
  const [openModal, setOpenModal] = React.useState(false); 
  // fin estados ---------------------------------------


  // estados derivados-------------------------------------------------------------
  const completedTodos = todos.filter(t => t.completed === true).length;
  const totalTodos = todos.length;

  /** Obervando los efectos en react */
  // console.log("Log 1");
  // // React.useEffect( () => console.log("Looooog 2") );
  // // React.useEffect( () => console.log("Looooog 2"), [] );
  // React.useEffect( () => console.log("Looooog 2"), [totalTodos] );
  // console.log("Log 3");


  const searchedTodos = todos.filter(t => t.text.toUpperCase().includes(searchValue.toUpperCase()));
  // fin estados derivados ---------------------------------------------------------------



  // funcion ayuda para completar
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = (newTodos[todoIndex].completed === true) ? false : true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (itemTodo) => {
    const newTodos = [...todos];
    newTodos.push({
      id: (newTodos.length === 0) ? 1 : newTodos[newTodos.length - 1 ].id + 1,
      text: itemTodo,
      completed: false
    });
    saveTodos(newTodos);
  };


  return (
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error, 
      openModal,
      setOpenModal,
      addTodo
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };