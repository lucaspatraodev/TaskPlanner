const DoneTaskItem = () => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center rounded-md border-b-2 border-gray-500 p-2">
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            Document API
          </p>
          <div className="inline-flex gap-[3px] items-center text-base font-semibold text-gray-900 dark:text-white">
            <p className="text-[13px]">Time Spent: </p>
            <span className="text-[12px]">2h10</span>
          </div>
        </div>
        <div className="inline-flex gap-[3px] items-center text-base font-semibold text-gray-900 dark:text-white">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View more
          </a>
        </div>
      </div>
    </li>
  );
};

export default DoneTaskItem;
