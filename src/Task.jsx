import { useState } from "react";

export default function Task(props) {
  const { name, description, time, isChecked, id, onCheck, onDelete, onEdit } =
    props;

  const [taskName, setTaskName] = useState(name);
  const [taskDescription, setTaskDescription] = useState(description);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="item__box">
      {isEditing ? (
        <div className="edit__box">
          <div className="edit__inputs">
            <input
              className="form__text edit__name"
              type="text"
              name="taskName"
              value={taskName}
              placeholder="Edit task..."
              onChange={(event) => {
                setTaskName(event.target.value);
              }}
            />
            <input
              className="form__text"
              type="text"
              name="taskDescription"
              value={taskDescription}
              placeholder="Edit description..."
              onChange={(event) => {
                setTaskDescription(event.target.value);
              }}
            />
          </div>

          <div className="change__buttons">
            <button
              className="change__button save"
              onClick={() => {
                onEdit(id, taskName, taskDescription);
                setTaskName("");
                setTaskDescription("");
                setIsEditing(false);
              }}
            >
              Save
            </button>
            <button
              className="change__button cancel"
              onClick={() => {
                setIsEditing(false);
                setTaskName(name);
                setTaskDescription(description);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <input
            className="item__checked"
            type="checkbox"
            checked={isChecked}
            onChange={() => {
              onCheck(id);
            }}
          />
          <div className="item__info">
            <div className="item__time">{time}</div>
            <div className={isChecked ? "item__done" : "item__name"}>
              {name}
            </div>
            <div className="item__description">{description}</div>
          </div>
          <div className="item__change">
            <button
              className="change__button edit"
              disabled={isChecked}
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>
            <button
              className="change__button delete"
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
