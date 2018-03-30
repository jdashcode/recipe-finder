import * as firebase from 'firebase';
var config = {
  apiKey: 'AIzaSyBMo50cNEBcvBP-7WdmnWKRFMkw1_9iqdE',
  authDomain: 'photowall-6e45d.firebaseapp.com',
  databaseURL: 'https://photowall-6e45d.firebaseio.com',
  projectId: 'photowall-6e45d',
  storageBucket: 'photowall-6e45d.appspot.com',
  messagingSenderId: '779081425344'
};

firebase.initializeApp(config);

const database = firebase.database();

export { database };
