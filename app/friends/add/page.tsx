const page = () => {
  return (
    <div className="mx-auto mt-5 grid max-w-sm gap-2">
      <h1 className="font-bold">Add a new friend</h1>
      <form className="grid gap-2" method="post" action="/api/friends">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <label
            htmlFor="age"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            id="isBestFriend"
            type="checkbox"
            name="isBestFriend"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="isBestFriend"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Is best friend?
          </label>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          Add friend
        </button>
      </form>
    </div>
  )
}
export default page
