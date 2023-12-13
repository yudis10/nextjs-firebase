import { app } from "@/firebase/server"
import { getFirestore } from "firebase-admin/firestore"

interface Friend {
  id: string
  name: string
  age: number
  isBestFriend: boolean
}

const Friend = async () => {
  const db = getFirestore(app)
  const friendsRef = db.collection("friends")
  const friendsSnapshot = await friendsRef.get()
  const friends = friendsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Friend[]

  return (
    <div className="mx-auto mt-5 grid max-w-sm gap-2">
      <h1 className="font-bold">Friends</h1>
      <ul className="grid gap-2">
        {friends.map((friend) => (
          <li key={friend.id} className="flex items-center gap-2">
            <a href={`/friends/${friend.id}`} className=" hover:underline">
              {friend.name}
            </a>
            <span className="mr-auto">({friend.age})</span>
            <strong>{friend.isBestFriend ? "Bestie" : "Friend"}</strong>
            <a href={`/friends/edit/${friend.id}`}>Edit</a>
          </li>
        ))}
      </ul>
      <a
        href="/friends/add"
        className="rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Add Friend
      </a>
    </div>
  )
}
export default Friend
