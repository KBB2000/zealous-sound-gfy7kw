import React, { useState } from "react";
import EditTaskModal from "./EditTaskModal";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTask(id);
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Status: {task.status}</p>
          <div className="task-actions">
            <button onClick={() => setEditingTask(task)}>Edit</button>
            <button onClick={() => confirmDelete(task.id)}>Delete</button>
          </div>
        </div>
      ))}
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          updateTask={(updatedTask) => {
            updateTask(updatedTask);
            setEditingTask(null);
          }}
          closeModal={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};

export default TaskList;
