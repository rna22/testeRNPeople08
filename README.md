# **Teste React Native People**


## **Descrição**

Este projeto é um aplicativo móvel desenvolvido em React Native utilizando Expo. 

O aplicativo permite que os usuários visualizem informações sobre diferentes raças de cães, marquem suas raças favoritas e façam login ou como visitantes.

A aplicação consome dados da The Dog API.


## **Funcionalidades Principais**

**Login:** Permite que o usuário faça login utilizando o cadastro criado no Firebase

**Entrada como Visitante:** Usuários podem acessar a aplicação sem se autenticar, mas não poderão favoritar cães.

**Exibição de Raças de Cães:** A lista de cães é carregada com rolagem infinita.

**Favoritar Cães:** Usuários autenticados podem marcar raças de cães como favoritas.

**Consistência Visual:** O aplicativo foi desenvolvido para ter uma experiência visual consistente em Android e iOS.


## **Tecnologias Utilizadas**

**React Native:** Framework para desenvolvimento mobile.

**Expo:** Plataforma para desenvolvimento e construção de aplicativos React Native.

**Firebase:** Utilizado para autenticação de usuários.

**Redux:** Para gerenciamento de estado global.

**The Dog API:** API pública para obter dados dos cães.


## **Pré-requisitos**

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

*[Node.js](https://nodejs.org/pt)*

*[Expo CLI (Documentação)](https://docs.expo.dev/more/expo-cli/)*

*[Git](https://git-scm.com)*


## **Configuração do Firebase**

**1.** Crie um projeto no Google Cloud Console.

**2.** Ative o Firebase Authentication e configure o login com Google.

**3.** Obtenha o *clientId* do Google para utilizar na configuração do login.

**4.** No arquivo *firebaseConfig.js* na raiz do projeto e configure o Firebase:

```react
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

```

## **Como Rodar o Projeto**

Utilize o *git clone* para entrar no meu projeto e inicie o *Expo Go* no seu dispositivo móvel.


