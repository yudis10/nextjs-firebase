import { NextResponse } from "next/server"
import { app, customInitApp } from "@/firebase/server"
import { getAuth } from "firebase-admin/auth"

export const dynamic = "force-dynamic"

customInitApp()

export const POST = async (request: Request) => {
  const auth = getAuth(app)

  /* Get form data */
  const payload = await request.json()
  const { email, password, name } = payload

  if (!email || !password || !name) {
    return new Response("Missing form data", { status: 400 })
  }

  /* Create user */
  try {
    await auth.createUser({
      email,
      password,
      displayName: name,
    })
  } catch (error: any) {
    return new Response("Something went wrong", { status: 400 })
  }
  return NextResponse.json({}, { status: 200 })
}
