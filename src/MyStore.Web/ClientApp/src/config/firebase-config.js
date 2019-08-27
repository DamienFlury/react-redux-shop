import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC7buHUG30zCt38WUQsyLBXy8_po9OdzkY',
  authDomain: 'web-shop-17a03.firebaseapp.com',
  databaseURL: 'https://web-shop-17a03.firebaseio.com',
  projectId: 'web-shop-17a03',
  storageBucket: 'web-shop-17a03.appspot.com',
  messagingSenderId: '211767159385',
  appId: '1:211767159385:web:6056e1e164f38f11',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
