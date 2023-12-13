import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { app } from "@/firebase/server"
import { getAuth } from "firebase-admin/auth"

import FormSignIn from "@/components/FormSignIn"

const SignIn = async () => {
  /* Check if the user is authenticated */
  const auth = getAuth(app)
  if (cookies().has("session")) {
    // @ts-ignore
    const sessionCookie = cookies().get("session").value
    const decodedCookie = await auth.verifySessionCookie(sessionCookie)
    if (decodedCookie) {
      return redirect("/dashboard")
    }
  }
  return <FormSignIn />
}
export default SignIn
