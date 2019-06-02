import React from 'react';
import Task from './Task';
import '../css/Tasks.css';

const Tasks = props => {
  return (
    <main className="tasks">
      <Task />
      <Task />
      <Task />
      <Task />
    </main>
  );
};

export default Tasks;
