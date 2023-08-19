import '../../css/container.css'
import {DeleteIcon} from "../../icons/DeleteIcon";


//Componenete TodoItem
function TodoItem(props) {

    let check = (props.completed === true ) ? '✔️' : '❌';
    
    

    //ELEMENTO
    return (
      <li className={`${ props.completed === true ? "opaque" : ""}`} id='item-todo'>

        <div className='check-task'>
          <span onClick={ props.onComplete }>{check + ""}</span>
          <p className={`${ props.completed === true ? "check" : ""}`}>{props.text}</p>
        </div>

        <div className='delete-task'>
          <button onClick={props.onDelete}><DeleteIcon/></button>
        </div>

      </li>
    );
}
export {TodoItem}