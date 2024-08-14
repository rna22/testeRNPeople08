// src/viewmodels/LoginViewModel.js

import { useState } from 'react';
import { LoginModel } from '../models/LoginModel';
import { auth } from '../services/firebaseConfig';
import { signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';
import { useRouter } from 'expo-router';

export default function useLoginViewModel() {
  const [loginModel, setLoginModel] = useState(new LoginModel());
  const router = useRouter();

  const handleEmailChange = (email) => {
    setLoginModel((prevState) => ({ ...prevState, email }));
  };

  const handlePasswordChange = (password) => {
    setLoginModel((prevState) => ({ ...prevState, password }));
  };

  function handleLogin(){
    signInWithEmailAndPassword(auth, loginModel.email, loginModel.password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.replace("/HomeScreen");
      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })
  }

  function handleGuestLogin() { 
    signInAnonymously(auth)
      .then(() => {
        router.replace("/HomeScreen");
      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
      alert(errorMessage);
    })
  }

  return {
    loginModel,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    handleGuestLogin
  };
}
