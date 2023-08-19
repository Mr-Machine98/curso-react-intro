import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItems/TodoItem";
import { CreateTodoBtn } from "./components/CreateTodoBtn/CreateTodoBtn";
import { Container, ContainerTodos } from "./components/ContainerTodos/ContainerTodos";
import { TodosLoading } from "./components/TodosLoad/TodosLoading";
import { TodosError } from "./components/TodosLoad/TodosError";
import { EmptyTodos } from "./components/TodosLoad/EmptyTodos";
import { TodoContext } from "./context/TodoContext";
import { Modal } from "./components/Modal/Modal";
import { ContentModal } from "./components/Modal/ContentModal";
import React from "react";

function AppUI() {

  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <> {/* esto es <Reac.Fragment>
          Otra forma de mandar la info al html o pedazo de fragmento
          se ahce asi: 
            <div className="App"></div>
        */}
      <Container>
        <ContainerTodos>
          <TodoCounter
          // completed={completedTodos} total={totalTodos} 
          />  {/* Props es el objeto  que vive en los componentes que es el puente de comunicacion entre ellos 2*/}
          <TodoSearch
          // searchValue={searchValue} setSearchValue={setSearchValue} 
          />

          {/*todolist en su interior 
                tiene elementos por el cual se renderizaran 
                con props.children
                el children hace referencia al los componentes TodoItem que se estan iterando
                con defaultTodos. 
              */}

          {/** Utilizando el contexto */}
          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

            {/*LLamamos al componente a todo item*/}
            {searchedTodos.map(todo => <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)} />)}
          </TodoList>

          <CreateTodoBtn onModal={() => setOpenModal((openModal === true) ? false : true)} />
        </ContainerTodos>

        {openModal && (
          <Modal>
            <ContentModal></ContentModal>
          </Modal>
        )}

      </Container>
    </>
  );
}

export { AppUI };