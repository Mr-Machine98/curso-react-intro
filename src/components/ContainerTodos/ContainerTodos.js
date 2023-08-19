import '../../css/container.css'


function Container (props) {
    return <div className='container'>{props.children}</div>
}

export {Container};

function ContainerTodos (props) {
    return <div className='containerTodos'>{props.children}</div>
}

export {ContainerTodos};

