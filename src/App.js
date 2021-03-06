import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      text: 'Doctors Appointment', 
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    { 
      id:2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    { 
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    }
  ])
//Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1000
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <AddTask />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
    </div>
  );
}

export default App;
