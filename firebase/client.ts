import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA18iXf8VMBokyK66cBcwg5KuRAsde_KhY",
  authDomain: "friendlyeats-codelab-10.firebaseapp.com",
  projectId: "friendlyeats-codelab-10",
  storageBucket: "friendlyeats-codelab-10.appspot.com",
  messagingSenderId: "272742063277",
  appId: "1:272742063277:web:d61c7bbc6994c2413fba24",
}

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)
const storage = getStorage(app)

const signOut = async () => {
  try {
    await auth.signOut()
    //Clear the cookies in the server
    const response = await fetch("/api/signout", {
      method: "POST",
    })
    if (response.status === 200) {
      window.location.href = "/"
    }
  } catch (error) {
    console.error("Error signing out", error)
  }
}

export { auth, provider, db, storage, signOut }
