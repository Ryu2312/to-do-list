import { useEffect, useState } from "react";
import { Sort, Task, UpdateTask } from "../type";

export const useTasks = () => {
  const [rules, setRules] = useState<Sort>({
    sort_by: "due_date-asc",
  });

  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (body: string) => {
    const newTask: Task = { id: Date.now(), body, checked: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deletedTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const updateTask = (id: number, newTask: UpdateTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, ...newTask } : task))
    );
  };

  const sortTask = (sort: string, tasks: Task[]) => {
    switch (sort) {
      case "due_date-desc": {
        return tasks.sort((a, b) => b.id - a.id);
      }
      case "due_date-asc": {
        return tasks.sort((a, b) => a.id - b.id);
      }
      case "alphabetical-asc": {
        return tasks.sort((a, b) => (a.body < b.body ? -1 : 1));
      }
      case "alphabetical-desc": {
        return tasks.sort((a, b) => (b.body < a.body ? -1 : 1));
      }
      default:
        return tasks;
    }
  };

  const filterTask = (filter: Sort, tasks: Task[]) => {
    let newTask = tasks;

    if (filter.important) {
      newTask = newTask.filter((task) => task.important === true);
    }

    if (filter.pending) {
      newTask = newTask.filter((task) => task.checked === false);
    }
    return newTask;
  };

  const sortTasks = sortTask(rules.sort_by, tasks);

  const newTasks = filterTask(rules, sortTasks);

  return { newTasks, addTask, deletedTask, updateTask, setRules };
};
