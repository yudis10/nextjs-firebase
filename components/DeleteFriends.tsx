"use client"

import { useRouter } from "next/navigation"
import { db } from "@/firebase/client"
import { deleteDoc, doc } from "firebase/firestore"

const DeleteFriends = ({ id }: { id: string }) => {
  const router = useRouter()

  const handleClick = async () => {
    try {
      await deleteDoc(doc(db, "friends", id))
    } catch (error) {
      return new Response("Something went wrong", {
        status: 500,
      })
    }
    return router.push("/friends")
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      Delete friend
    </button>
  )
}
export default DeleteFriends
