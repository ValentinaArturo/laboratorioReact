import "./App.css";
import TaskForm from "./componentes/TaskForm";
import { TaskList } from "./componentes/TaskList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <section className="section">
          <div className="container">
            <section className="d-flex justify-content-center ">
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
            </section>
          </div>
        </section>
      </div>
    </TodoProvider>
  );
}

export default App;
