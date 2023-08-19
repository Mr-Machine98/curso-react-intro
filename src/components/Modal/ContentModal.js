import "./contentModal.css";
import { MdAddTask } from "react-icons/md";
import { TodoContext } from "../../context/TodoContext";
import React from "react";


function ContentModal() {

    const { 
        setOpenModal,
        addTodo 
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const closeModal = (event) => {
        if (event.target.id === 'btn-close') setOpenModal(false);
    };
        

    return (
        <form onSubmit={onSubmit}>
            <div className="containerModal">
                <div className="close-modal">
                    <button id="btn-close" onClick={closeModal}>
                        X
                    </button>
                </div>
                <h1 className="">Agregar Nuevo TODO's</h1>
                <input onChange={onChange} value={newTodoValue} placeholder="Agrega la nueva tarea..." className="element"></input>
                <button type="submit" className="btn-add"><MdAddTask className='btn-add-task' /></button>
            </div>
        </form>
    );

}

export { ContentModal }