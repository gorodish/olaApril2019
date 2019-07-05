import { firebase, emailAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(emailAuthProvider);
  }
};
