import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState ([]); //esto define la aplicacion

  return (
    <>
      <div>
        <h1>Tareas</h1>
        <TaskForm tasks={tasks} setTasks={setTasks} />
        <ul>
          {tasks.map((task) =>(
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
