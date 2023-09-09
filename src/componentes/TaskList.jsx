import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";

export const TaskList = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const navigate = useNavigate();


  const deleteTodo = (e) => {
    e.preventDefault();

    const idCapture = parseInt(e.target.id)

    const filteredTodo = todos.filter((item) => {
      return item.id !== idCapture;
    });

    setTodos(filteredTodo);
  };

  const completeTodo = ( e ) => {
    const idCapture = parseInt(e.target.id)

    const filterTodos = todos.map( ( item ) => {
        if ( item.id === idCapture ) {
            item.completed = false;
            if ( e.target.checked ) {
                item.completed = true;
            }
        }
        return item;
    } );

    setTodos( filterTodos );
}

  const redirectTodo = (e) =>{
    e.preventDefault();
    const idCapture = parseInt(e.target.id)

    navigate(`/detalle/${idCapture}`, {
      replace: true,
    });

  }

  return 1 <= todos.length ? (
    todos.map((item) => {
      return (
        <>
          <div className="contenedor mt-3 max-width">
            <div className="form-check ">
              <input
                id={item.id}
                className="form-check-input"
                type="checkbox"
                checked={item.completed}
                onChange={ e => completeTodo( e ) }
              />
              <label className="form-check-label" for="flexCheckDefault">
                {item.title}
              </label>
            </div>
            <button
              id={item.id}
              onClick={(e) => deleteTodo(e)}
              className="btn btn-danger"
            >
              Eliminar Tarea
            </button>
            <button
              id={item.id}
              onClick={(e) => redirectTodo(e)}
              className="btn btn-secondary"
            >
              Detalle Tarea
            </button>
          </div>
        </>
      );
    })
  ) : (
    <>
      <h4>Ninguna Tarea Cargada</h4>
    </>
  );
};
