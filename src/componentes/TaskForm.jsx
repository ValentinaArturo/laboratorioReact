import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../context/TodoContext";

export default function TaskForm() {
  const { register, handleSubmit,reset } = useForm();
  const [ todos, setTodos ] = useContext( TodoContext );


  const onSubmit = (data) => {
    const newData = data.task;
    const currentTimestamp = Date.now();
    const newTodos = [ ...todos, { id: currentTimestamp, title: newData, completed: false } ];
    setTodos( newTodos );
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <input className="form-control" {...register("task")} placeholder="Agregar nueva tarea" />

      <div className="text-center">
        <button className="btn btn-success mt-3 " type="submit">
          Agregar Tarea
        </button>
      </div>
    </form>
  );
}
