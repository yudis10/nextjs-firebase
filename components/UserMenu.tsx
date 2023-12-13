"use client"

import { useState } from "react"
import Link from "next/link"
import { auth, signOut } from "@/firebase/client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const UserMenu = () => {
  const [name, setName] = useState("")
  const [photoURL, setPhotoURL] = useState("")
  auth.onAuthStateChanged((user) => {
    if (user) {
      setName(user.displayName ?? user.email ?? "")
      setPhotoURL(user.photoURL ?? "")
    } else {
      setName("Username")
      setPhotoURL("/images/profile.png")
    }
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-3 rounded-full outline-gray-400">
        <Avatar>
          <AvatarImage src={photoURL} alt={name} />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {auth.currentUser ? (
          <>
            <DropdownMenuLabel>
              Signed in as
              <br /> <strong>{auth.currentUser.email}</strong>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="dashboard" className="cursor-pointer">
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button onClick={signOut} className="w-full cursor-pointer">
                SignOut
              </button>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem asChild>
            <Link href="/signin" className="cursor-pointer">
              Sign in to your account
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default UserMenu
