import React from 'react';


const Task = props => {
  return (
    <main className="tasks">
      <section className="task">
        <form className="form">
          <label className="label">Add task</label><br></br>
          <input className="input" type="input" required />
          <input className="text-input"
            placeholder="Process description" required></input>
        </form>
      </section>
    </main>
  );
};

export default Task;
