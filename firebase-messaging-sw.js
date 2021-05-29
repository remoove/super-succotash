importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js");

//Remeber this part we have used above in our index.html
var firebaseConfig = {
  apiKey: "AIzaSyCScYDEDPVMchcqDNRCYzwltjPBGHUXsfc",
  authDomain: "skinsplus-a4096.firebaseapp.com",
  projectId: "skinsplus-a4096",
  storageBucket: "skinsplus-a4096.appspot.com",
  messagingSenderId: "737670599818",
  appId: "1:737670599818:web:0f3df1b27f88cc8e2b8973",
  measurementId: "G-175GDKWYE2"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon:
      payload.notification.image || "/img/icons/apple-touch-icon-152x152.png",
    data: payload.data || {}
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
})
