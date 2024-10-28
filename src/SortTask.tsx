import { Sort } from "./type";

export default function SortTask({
  setRules,
}: {
  setRules: React.Dispatch<Sort>;
}) {
  function handleSort(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);

    const sortData: Sort = {
      sort_by: formData.get("sort_by") as string,
      pending: formData.get("pending") as string,
      important: formData.get("important") as string,
    };
    setRules(sortData);
  }
  return (
    <form
      onChange={handleSort}
      className="text-sm flex justify-evenly md:flex-col md:w-44 "
    >
      <div className="inline-flex flex-col gap-1 mb-2">
        <label htmlFor="sort_by" className="font-medium">
          Sort by
        </label>
        <select
          id="sort_by"
          name="sort_by"
          className="border py-2 px-3 rounded-lg outline-offset-2 focus:outline-double outline-2 outline-gray-200"
        >
          <option value="due_date-asc">Due Date (old first)</option>
          <option value="due_date-desc">Due Date (new first)</option>
          <option value="alphabetical-asc">Alphabetical (a-z)</option>
          <option value="alphabetical-desc">Alphabetical (z-a)</option>
        </select>
      </div>
      <div>
        <label className="block mb-1 font-medium">Filter</label>
        <div className="flex gap-1 items-center text-sm">
          <input
            type="checkbox"
            id="pending"
            name="pending"
            value="onlyPending"
            className="accent-violet-700"
          />
          <label htmlFor="pending">Only pending</label>
        </div>
        <div className="flex gap-1 items-center ">
          <input
            type="checkbox"
            id="important"
            name="important"
            value="important"
            className="accent-violet-700"
          />
          <label htmlFor="important">Only important</label>
        </div>
      </div>
    </form>
  );
}
