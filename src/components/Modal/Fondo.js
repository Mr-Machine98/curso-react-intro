import React from "react";
import { TodoContext } from "../../context/TodoContext";
import "./modal.css";

function Fondo({children}) {

    const {setOpenModal} = React.useContext(TodoContext);

    return (
        <div id="fondo" onClick={(event) => {
            if (event.target.id === 'fondo') setOpenModal(false);
        }}>{children}</div>
    );
}

export {Fondo}