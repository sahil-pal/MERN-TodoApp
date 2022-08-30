import './App.css';
import {DashBoard } from './modules/tasks/dashboard/presentation/pages/Dashboard';
import { taskContext } from './modules/tasks/crud/provider/TaskContext';

function App() {
  const taskObj = {tasks:[]};
  return (
    <div className="container">
      <taskContext.Provider value={taskObj}>
        <DashBoard/>
      </taskContext.Provider>
    </div>
  );
}

export default App;
