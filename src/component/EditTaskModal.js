import React, { useState } from "react";

const EditTaskModal = ({ task, updateTask, closeModal }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            value={updatedTask.description}
            onChange={handleChange}
          ></textarea>
          <input
            type="date"
            name="dueDate"
            value={updatedTask.dueDate}
            onChange={handleChange}
            required
          />
          <select
            name="status"
            value={updatedTask.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <div>
            <button type="submit">Save</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
