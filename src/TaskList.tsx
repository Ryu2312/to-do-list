import { Task, HandleTasks } from "./type";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  handleTasks,
}: {
  tasks: Task[];
  handleTasks: HandleTasks;
}) {
  return (
    <ul className="max-w-md w-full mx-auto md:mx-0 flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} handleTasks={handleTasks} />
      ))}
    </ul>
  );
}
