import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp({
  apiKey: "AIzaSyCIwI7gYUCW4O-hkJc5c9YaRDVtKyr4m_8",
  authDomain: "chat-75664.firebaseapp.com",
  projectId: "chat-75664",
  storageBucket: "chat-75664.appspot.com",
  messagingSenderId: "668134920935",
  appId: "1:668134920935:web:b616f078e37294be3d4842",
  measurementId: "G-4CV6SS9X4E"
});

export const Context = createContext(null)


const auth = firebase.auth()
const firestore = firebase.firestore()







ReactDOM.render(
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
