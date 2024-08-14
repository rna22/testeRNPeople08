Teste React Native People


Descrição
Este projeto é um aplicativo móvel desenvolvido em React Native utilizando Expo. 

O aplicativo permite que os usuários visualizem informações sobre diferentes raças de cães, marquem suas raças favoritas e façam login ou como visitantes.
A aplicação consome dados da The Dog API.

Funcionalidades
Login: Permite que o usuário faça login utilizando o cadastro criado no Firebase
Entrada como Visitante: Usuários podem acessar a aplicação sem se autenticar, mas não poderão favoritar cães.
Exibição de Raças de Cães: A lista de cães é carregada com rolagem infinita.
Favoritos: Usuários autenticados podem marcar raças de cães como favoritas.
Consistência Visual: O aplicativo foi desenvolvido para ter uma experiência visual consistente em Android e iOS.


Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

Node.js
Expo CLI
Git


Configuração do Firebase

1.Crie um projeto no Google Cloud Console.

2.Ative o Firebase Authentication e configure o login com Google.

3.Obtenha o clientId do Google para utilizar na configuração do login.

4.No arquivo firebaseConfig.js na raiz do projeto e configure o Firebase:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);


Como Rodar o Projeto

Utilize o git clone para entrar no meu projeto e inicie o Expo Go no seu dispositivo móvel.
