// Import Firebase scripts for service worker
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js')

firebase.initializeApp({
    apiKey: "AIzaSyCvEoib4S16JkPHmEghWZK1lgYihA96KKk",
    authDomain: "luckypath-4ca61.firebaseapp.com",
    projectId: "luckypath-4ca61",
    storageBucket: "luckypath-4ca61.appspot.com",
    messagingSenderId: "1052943510619",
    appId: "1:1052943510619:web:79cc8b71809b41cb45a37e",
    measurementId: "G-L8QXB6REVB"
})

// Retrieve Firebase Messaging instance to handle background messages
const messaging = firebase.messaging()

// Handle background messages (when the app is not in focus or closed)
messaging.onBackgroundMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  
  // Customize notification here
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // Customize as needed
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
