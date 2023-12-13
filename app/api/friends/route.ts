import { redirect } from "next/navigation"
import { app } from "@/firebase/server"
import { getFirestore } from "firebase-admin/firestore"

export const dynamic = "force-dynamic"

export const POST = async (request: Request) => {
  const formData = await request.formData()
  const name = formData.get("name")?.toString()
  const age = formData.get("age")?.toString()
  const isBestFriend = formData.get("isBestFriend") === "on"

  if (!name || !age || !isBestFriend) {
    return new Response("Missing required fields", {
      status: 400,
    })
  }
  try {
    const db = getFirestore(app)
    const friendsRef = db.collection("friends")
    await friendsRef.add({
      name,
      age: parseInt(age),
      isBestFriend,
    })
  } catch (error) {
    return new Response("Something went wrong", {
      status: 500,
    })
  }
  return redirect("/friends")
}
