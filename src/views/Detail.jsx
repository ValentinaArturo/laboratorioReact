import React, { useEffect, useState } from "react";
import { Layout } from "../Layout";
import { useNavigate, useParams } from "react-router-dom";

export const Detail = () => {

  const navigate = useNavigate();

  const [capture, setCapture] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("todos"));
    const newID = parseInt(id);
    const todoEncontrado = getTodos.find((todos) => todos.id === newID);
    setCapture(todoEncontrado);
  }, []);

  const redirectTodo = () =>{

    navigate(`/`, {
      replace: true,
    });

  }

  return (
    <Layout>
      <div className="card">
        <div className="card-header text-center">
          DETALLE DE TAREA ID: <span style={{ color: "#334FFF" }}>{id}</span>
        </div>
        <div className="card-body">
          <div>
            Descripcion: <b>{capture.title}</b>
          </div>
          {capture.completed === false ? (
            <span class="badge bg-danger">NO COMPLETADA</span>
          ) : (
            <span class="badge bg-success">COMPLETADA</span>
          )}
        </div>
        <div className="card-footer">
          <button onClick={redirectTodo} className="btn btn-warning">{"<--- Regresar"}</button>
        </div>
      </div>
    </Layout>
  );
};
