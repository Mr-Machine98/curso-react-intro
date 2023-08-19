import  '../../css/container.css'
import  { MdFormatListBulletedAdd } from "react-icons/md";

//Componenete todo counter
function CreateTodoBtn(props) {
  //ELEMENTO
  return <button className='btn-add' onClick={ props.onModal } ><MdFormatListBulletedAdd className='btn-add-task'/></button>;
}

export { CreateTodoBtn };