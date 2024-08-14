// src/viewmodels/LoginViewModel.js

import { useState } from 'react';
import useGoogleAuth from '../services/AuthService';
import { LoginModel } from '../models/LoginModel';



export default function useLoginViewModel() {
  const { signInWithGoogle } = useGoogleAuth();
  const [loginModel, setLoginModel] = useState(new LoginModel());

  const handleEmailChange = (email) => {
    setLoginModel((prevState) => ({ ...prevState, email }));
  };

  const handlePasswordChange = (password) => {
    setLoginModel((prevState) => ({ ...prevState, password }));
  };

  const handleGoogleLogin = async () => {
    
  };

  return {
    handleGoogleLogin,
    loginModel,
    handleEmailChange,
    handlePasswordChange,
  };
}
