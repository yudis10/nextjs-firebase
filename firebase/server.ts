import type { ServiceAccount } from "firebase-admin"
import { cert, getApps, initializeApp } from "firebase-admin/app"

const activeApps = getApps()
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
}

export const app =
  activeApps.length === 0
    ? initializeApp({
        credential: cert(serviceAccount as ServiceAccount),
      })
    : activeApps[0]

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp({
      credential: cert(serviceAccount as ServiceAccount),
    })
  }
}
