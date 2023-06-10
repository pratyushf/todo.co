import React, { useState } from 'react';
import './input.css'

export default function Input() {
  // State variables
  const [tasks, setTasks] = useState([]);
  const [taskdate, setTaskDate] = useState('');
  const [taskdet, setTaskDet] = useState('');
  const [taskpri, setTaskPri] = useState('');
  const [showDet, setShowDet] = useState(false);

  // Function to handle form submission
  function handlesubmit(e) {
    e.preventDefault();
    const newTask = {
      taskdet,
      taskdate,
      taskpri,
    };
    setTasks([...tasks, newTask]);
    setShowDet(true);
    setTaskDet('');
    setTaskDate('');
    setTaskPri('');
  }

  // Function to handle task details input change
  function handleonchangeDet(e) {
    setTaskDet(e.target.value);
  }

  // Function to handle task date input change
  function handleonchangeDate(e) {
    setTaskDate(e.target.value);
  }

  // Function to handle task priority input change
  function handleonchangePri(e) {
    setTaskPri(e.target.value);
  }

  // Function to delete a task
  function deleteTask(index) {
    const filterArr = tasks.filter((val, i) => {
      return i !== index;
    });

    setTasks(filterArr);
  }

  // Priority options
  let high = 'High';
  let low = 'Low';

  // Disable the submit button if any of the input fields are empty
  const isDisabled = !taskdet || !taskdate || !taskpri;

  return (
    <div>
      <form>
        {/* Task input */}
        <div className='taskip'>
          <label htmlFor="task-input">Task :</label>
          <input
            type="text"
            onChange={handleonchangeDet}
            id="task-input"
            name="task"
            placeholder="Enter task description"
            required
            value={taskdet}
          />
        </div>

        {/* Deadline input */}
        <div className='taskip'>
          <label htmlFor="deadline-input">Deadline :</label>
          <input
            type="date"
            onChange={handleonchangeDate}
            id="deadline-input"
            name="deadline"
            required
            value={taskdate}
          />
        </div>

        {/* Priority selection */}
        <div>
          <fieldset className='field'>
            <legend>Priority:</legend>
            <label>
              <input
                type="radio"
                name="priority"
                value={high}
                onChange={handleonchangePri}
                checked={taskpri === high}
              />
              High
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value={low}
                onChange={handleonchangePri}
                checked={taskpri === low}
              />
              Low
            </label>
          </fieldset>
        </div>

        {/* Add task button */}
        <div className='cre'>
          <input
            className="but"
            type='submit'
            value='Add Task'
            onClick={handlesubmit}
            disabled={isDisabled} // Add disabled attribute
          />
        </div>
      </form>

      {/* Display task details */}
      {showDet && (
        <div>
          {tasks.map((task, index) => (
            <div className="details" key={index}>
              <div className='det'>Task : {task.taskdet}</div>
              <div className='det'>Deadline : {task.taskdate}</div>
              <div className='det'>Priority : {task.taskpri}</div>
              <button className='delbut' onClick={() => deleteTask(index)}>-</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
