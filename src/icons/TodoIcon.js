import { HiOutlineTrash } from 'react-icons/hi';

function TodoIcon({type, color}) {

    const iconTypes = {
        "deleteButton":  <HiOutlineTrash />
    };

    return (
        <span className={`${type} ${color}`}>
           {iconTypes[type]}
        </span>
    );
}
export {TodoIcon}