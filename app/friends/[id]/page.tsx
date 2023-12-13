import Link from "next/link"
import { redirect } from "next/navigation"
import { app } from "@/firebase/server"
import { getFirestore } from "firebase-admin/firestore"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

interface Friend {
  name: string
  age: number
  isBestFriend: boolean
}

const FriendDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const db = getFirestore(app)
  const friendsRef = db.collection("friends")
  const friendSnapshot = await friendsRef.doc(id).get()

  if (!friendSnapshot.exists) {
    return redirect("/404")
  }

  const friend = friendSnapshot.data() as Friend
  return (
    <div className="mx-auto mt-5 grid max-w-sm gap-2">
      <h1 className="font-bold">{friend.name}</h1>
      <p>Age: {friend.age}</p>
      <p>Is best friend: {friend.isBestFriend ? "Yes" : "No"}</p>
      <Button asChild>
        <Link href="/friends" className="group flex items-center gap-3">
          <ArrowLeft className="relative right-0 transition-all group-hover:right-1" />
          Back
        </Link>
      </Button>
    </div>
  )
}
export default FriendDetail
