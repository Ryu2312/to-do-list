import { useState } from "react";
import { HandleTasks, Task } from "../type";

export default function TaskItem({
  task,
  handleTasks,
}: {
  task: Task;
  handleTasks: HandleTasks;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const { deletedTask, updateTask } = handleTasks;

  function toggle() {
    setIsEditing(!isEditing);
  }

  function handleEdit(event: React.ChangeEvent<HTMLInputElement>) {
    const body = event.currentTarget.value;

    if (body && body !== task.body) {
      updateTask(task.id, { body });
    }
  }

  return (
    <li className="shadow-sm rounded-md px-3 py-2 flex items-center border border-opacity-15 gap-2">
      <input
        className="accent-violet-700"
        type="checkbox"
        checked={task.checked}
        onChange={() => {
          updateTask(task.id, { checked: !task.checked });
        }}
      />

      {isEditing ? (
        <input
          className="h-auto flex-grow"
          type="text"
          onChange={handleEdit}
          value={task.body}
          onBlur={toggle}
          autoFocus
        />
      ) : (
        <p
          className="flex-grow overflow-hidden h-6 hover:h-auto"
          onDoubleClick={toggle}
        >
          {task.body}
        </p>
      )}
      <button
        onClick={() => {
          updateTask(task.id, { important: !task.important });
        }}
        className={`border p-1 rounded-md hover:opacity-80 ${
          task.important ? "bg-violet-700 text-white" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          deletedTask(task.id);
        }}
        className="border p-1 rounded-md hover:opacity-40"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </li>
  );
}
