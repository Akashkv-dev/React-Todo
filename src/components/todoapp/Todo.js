import React, { useEffect, useState } from "react";
import Addtask from "./AddTask";
import ListTasks from "./ListTask";
import "./todo.css";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    document.title = `you have ${tasks.length} pending task`;
  });

  const addTask = (title) => {
    const newTask = [...tasks, { title, completed: false }];
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  const complete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed; // Toggle the completed property
    setTasks(newTasks);
  };
  
  return (
    <>
      <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task">
          <Addtask addTask={addTask} />
        </div>

        <div className="tasks">
          {tasks.map((task, index) => (
            <ListTasks
              task={task}
              removeTask={removeTask}
              index={index}
              key={index}
              complete={() => complete(index)} // Pass a function that calls complete with the index
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
