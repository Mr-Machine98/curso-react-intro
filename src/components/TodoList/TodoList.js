//Componenete Lits
//  Comunicacion de componentes con props
function TodoList(props) {
  //ELEMENTO
  return <ul> {props.children}</ul>;
}

export { TodoList };
