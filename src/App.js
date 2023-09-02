import logo from './logo.svg';
import './App.css';
import TaskForm from './componentes/TaskForm';


function App() {
  return (
    <div className='app'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <TaskForm/>
        </div>
      </div>
    </div>
    </div>



  );
}

export default App;
