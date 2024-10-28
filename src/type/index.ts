export interface HandleTasks {
  addTask: (body: string) => void;
  deletedTask: (id: number) => void;
  updateTask: (id: number, newTask: UpdateTask) => void;
}

export interface Task {
  id: number;
  body: string;
  checked?: boolean;
  important?: boolean;
}

export type UpdateTask = Partial<Task>;

export interface Sort {
  sort_by: string;
  pending?: string;
  important?: string;
}
