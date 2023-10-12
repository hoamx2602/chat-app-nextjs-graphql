function ProductHead() {
  return (
    <thead className="bg-gray-100 dark:bg-gray-700">
      <tr>
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <input
              id="checkbox-all"
              aria-describedby="checkbox-1"
              type="checkbox"
              className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-all" className="sr-only">
              checkbox
            </label>
          </div>
        </th>
        <th
          scope="col"
          className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
        >
          Product Name
        </th>
        <th
          scope="col"
          className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
        >
          Technology
        </th>
        <th
          scope="col"
          className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
        >
          Description
        </th>
        <th
          scope="col"
          className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
        >
          ID
        </th>
        <th
          scope="col"
          className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
        >
          Price
        </th>
        <th
          scope="col"
          className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
        >
          Discount
        </th>
        <th
          scope="col"
          className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
        >
          Actions
        </th>
      </tr>
    </thead>
  );
}

export default ProductHead;
