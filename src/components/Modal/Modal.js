import { React } from "react";
import { createPortal } from "react-dom";
import "./modal.css";
import { Fondo } from "../Modal/Fondo";


function Modal({ children }) {
    return createPortal(
        <Fondo>
            <div className="modal">
                {children}
            </div>
        </Fondo>,
        document.getElementById('modal')
    );
}

export { Modal };