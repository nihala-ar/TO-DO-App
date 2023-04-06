import React from "react";

function ListTasks({ task, remTask, index }) {
  return (
    <div>
      <div className="list-tasks">
        {task.title}
        {"    "}
        {"      "}
        <button
          className="del-btn"
          onClick={() => {
            remTask(index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListTasks;
