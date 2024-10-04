// import { initializeApp } from 'firebase/app'
// import { getMessaging, getToken, onMessage } from 'firebase/messaging'

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.firebaseConfig.apiKey,
//   authDomain: process.env.firebaseConfig.authDomain,
//   projectId: process.env.firebaseConfig.projectId,
//   storageBucket: process.env.firebaseConfig.storageBucket,
//   messagingSenderId: process.env.firebaseConfig.messagingSenderId,
//   appId: process.env.firebaseConfig.appId,
//   measurementId: process.env.firebaseConfig.measurementId
// }
// console.log('firebaseConfig ==>>>', firebaseConfig);

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig)

// // Initialize Firebase Messaging (only on client side)
// let messaging

// if (process.client) {
//   messaging = getMessaging(firebaseApp)
// }

// export { firebaseApp, messaging, getToken, onMessage }

import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { getAuth, signInAnonymously } from 'firebase/auth'

let messaging, auth

// Check if we are in the client-side (browser)
if (process.client) {
  // Firebase configuration
  const firebaseConfig = {
      apiKey: process.env.firebaseConfig.apiKey,
      authDomain: process.env.firebaseConfig.authDomain,
      projectId: process.env.firebaseConfig.projectId,
      storageBucket: process.env.firebaseConfig.storageBucket,
      messagingSenderId: process.env.firebaseConfig.messagingSenderId,
      appId: process.env.firebaseConfig.appId,
      measurementId: process.env.firebaseConfig.measurementId
    }

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig)
  messaging = getMessaging(firebaseApp)
  auth = getAuth(firebaseApp)
}

export { messaging, getToken, onMessage, auth, signInAnonymously }
