"use client"

import { signOut } from "@/firebase/client"

import { Button } from "@/components/ui/button"

const SignOut = () => {
  return (
    <Button type="button" onClick={signOut}>
      Sign out
    </Button>
  )
}
export default SignOut
