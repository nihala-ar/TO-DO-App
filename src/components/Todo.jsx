import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTasks from "./ListTasks";
import "./todo.css";

function Todo() {
  const [tasks, settasks] = useState([]);

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    settasks(newTask);
  };

  const remTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    settasks(newTask);
  };

  return (
    <>
      <div className="todo-container">
        <div className="header">TO - DO APP</div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((task, index) => {
            return (
              <>
                <div className="task">
                  <ListTasks
                    key={index}
                    remTask={remTask}
                    index={index}
                    task={task}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
