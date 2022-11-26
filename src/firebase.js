import * as firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBo5oITD4uu1sf4c33sWHH2NMq18xNdwtg',
  authDomain: 'jj-portfolio-v1.firebaseapp.com',
  databaseURL: 'https://jj-portfolio-v1-default-rtdb.firebaseio.com',
  projectId: 'jj-portfolio-v1',
  storageBucket: 'jj-portfolio-v1.appspot.com',
  messagingSenderId: '196039279401',
  appId: '1:196039279401:web:3a0800c13584cd82ed6d38'
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebaseApp.auth()
const firestore = firebaseApp.firestore()
const storage = firebaseApp.storage()
const persistence = firebase.auth.Auth.Persistence

export {
  auth,
  firestore,
  storage,
  persistence,
  firebase
}
