import firebase from 'firebase/app';
// // import 'firebase/auth' // If you need it
// // import 'firebase/firestore' // If you need it
// // import 'firebase/storage' // If you need it
// // import 'firebase/analytics'; // If you need it

const clientCredentials = {
  apiKey: 'AIzaSyBoyMN9iXrfB2BnFp7ihPHrRPcNabGT1tE',
  authDomain: 'test-a5641.firebaseapp.com',
  databaseURL: 'https://test-a5641.firebaseio.com',
  projectId: 'test-a5641',
  storageBucket: 'test-a5641.appspot.com',
  messagingSenderId: '1041834924884',
  appId: '1:1041834924884:web:733ed33a9bbd230fd1c6c1',
};

// // Check that `window` is in scope for the analytics module!
// if (typeof window !== 'undefined' && !firebase.apps.length) {
//   firebase.initializeApp(clientCredentials);
//   // To enable analytics. https://firebase.google.com/docs/analytics/get-started
//   if ('measurementId' in clientCredentials) firebase.analytics();
// }

firebase.initializeApp(clientCredentials);

export default firebase;
