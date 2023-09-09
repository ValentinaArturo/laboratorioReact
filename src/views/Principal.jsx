import React from "react";
import TaskForm from "../componentes/TaskForm";
import { TaskList } from "../componentes/TaskList";
import { Layout } from "../Layout";

export const Principal = () => {
  return (
    <Layout>
      <div className="card">
        <div className="card-header text-center">LISTA DE TAREAS</div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <TaskForm />
              </div>
            </div>
            <div className="col-md-12">
              <div className="text-center mt-2">
                <hr />

                <TaskList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
