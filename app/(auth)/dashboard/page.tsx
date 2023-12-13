import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { app } from "@/firebase/server"
import { getAuth } from "firebase-admin/auth"

import SignOut from "@/components/SignOut"

const Dashboard = async () => {
  const auth = getAuth(app)
  /* Check current session */
  if (!cookies().has("session")) {
    return redirect("/signin")
  }
  // @ts-ignore
  const sessionCookie = cookies().get("session").value
  const decodedCookie = await auth.verifySessionCookie(sessionCookie)
  const user = await auth.getUser(decodedCookie.uid)

  if (!user) {
    return redirect("/signin")
  }

  return (
    <div className="mx-auto mt-5 grid max-w-sm gap-2 text-center">
      <h1>Welcome {user.displayName ?? user.email}</h1>
      <p>We are happy to see you here</p>
      <SignOut />
    </div>
  )
}
export default Dashboard
