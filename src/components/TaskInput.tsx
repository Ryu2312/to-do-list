export default function TaskInput({
  addTask,
}: {
  addTask: (task: string) => void;
}) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = formData.get("task") as string;

    if (body.trim()) {
      addTask(body);
      form.reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-2 my-4"
    >
      <input
        name="task"
        type="text"
        placeholder="do the dishes"
        className="border border-gray-400 rounded-md py-2 px-4 text-sm w-full max-w-72 focus:outline-double outline-offset-[3px] outline-2 outline-gray-200"
      />
      <button className="bg-violet-700 hover:opacity-80 text-white font-semibold py-2 px-4 w-full text-sm rounded-md max-w-72">
        Add task
      </button>
    </form>
  );
}
