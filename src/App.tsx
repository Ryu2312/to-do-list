import { useTasks } from "./hooks/useTasks";
import SortTask from "./components/SortTask";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  const handleTasks = useTasks();

  return (
    <div className="flex flex-col max-h-screen h-screen max-w-7xl overflow-y-auto mx-auto ">
      <main className="flex flex-col flex-grow  p-4">
        <div className="text-center">
          <h1 className="font-bold text-3xl">To-Do List</h1>
          <span>Add and filter your most important tasks</span>
          <TaskInput addTask={handleTasks.addTask} />
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-center md:items-start py-3">
          <SortTask setRules={handleTasks.setRules} />
          <TaskList tasks={handleTasks.newTasks} handleTasks={handleTasks} />
        </div>
      </main>
      <footer className="border text-center p-4">
        <p className="text-xs">
          © 2024 Alexis Lazo. Todos los derechos reservados.
        </p>
        <p className="text-xs">Diseño inspirado en Codeable.</p>
      </footer>
    </div>
  );
}
