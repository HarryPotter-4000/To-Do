import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  return (
    <div className="add__box">
      <div className="add__form">
        <input
          className="form__text add__name"
          type="text"
          name="taskName"
          value={taskName}
          placeholder="Task..."
          onChange={(event) => {
            setTaskName(event.target.value);
          }}
        />
        <input
          className="form__text"
          type="text"
          name="taskDescription"
          value={taskDescription}
          placeholder="Description..."
          onChange={(event) => {
            setTaskDescription(event.target.value);
          }}
        />
      </div>
      <button
        className="add__button"
        onClick={() => {
          onAddTask(taskName, taskDescription);
          setTaskName("");
          setTaskDescription("");
        }}
      >
        Add
      </button>
    </div>
  );
}
