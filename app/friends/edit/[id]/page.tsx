import { redirect } from "next/navigation"
import { app } from "@/firebase/server"
import { getFirestore } from "firebase-admin/firestore"

import DeleteFriends from "@/components/DeleteFriends"

interface Friend {
  name: string
  age: number
  isBestFriend: boolean
}

const FriendEdit = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  if (!id) {
    return redirect("/404")
  }
  const db = getFirestore(app)
  const friendsRef = db.collection("friends")
  const friendSnapshot = await friendsRef.doc(id).get()

  if (!friendSnapshot.exists) {
    return redirect("/404")
  }

  const friend = friendSnapshot.data() as Friend

  return (
    <div className="mx-auto mt-5 grid max-w-sm gap-2">
      <h1 className="font-bold">Edit {friend.name}</h1>
      <p>Here you can edit or delete your friend&apos;s data.</p>
      <form className="grid gap-2" method="post" action={`/api/friends/${id}`}>
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            defaultValue={friend.name}
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
            defaultValue={friend.age}
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
            defaultChecked={friend.isBestFriend}
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
          Edit friend
        </button>
      </form>
      <DeleteFriends id={id} />
    </div>
  )
}
export default FriendEdit
