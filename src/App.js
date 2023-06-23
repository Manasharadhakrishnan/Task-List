import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = task => {
    const newTask = { ...task, id: Date.now(), completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = taskId => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const toggleTaskCompletion = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="container">

      <AddTaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
};

export default App;
