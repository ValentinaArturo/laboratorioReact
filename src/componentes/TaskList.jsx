import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TaskList = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const deleteTodo = (e) => {
    e.preventDefault();

    const idCapture = parseInt(e.target.id)

    const filteredTodo = todos.filter((item) => {
      return item.id !== idCapture;
    });

    setTodos(filteredTodo);
  };

  return 1 <= todos.length ? (
    todos.map((item) => {
      return (
        <>
          <div className="contenedor mt-3 max-width">
            <div className="form-check ">
              <input
                key={item.id}
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
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
