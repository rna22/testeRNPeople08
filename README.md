# **Teste React Native People**

<br/>

## **Descrição**

Este projeto é um aplicativo móvel desenvolvido em React Native utilizando Expo. 

O aplicativo permite que os usuários visualizem informações sobre diferentes raças de cães, marquem suas raças favoritas e façam login ou como visitantes.

A aplicação consome dados da The Dog API.

<br/>

## **Principais Funcionalidades**

**Login:** Permite que o usuário faça login utilizando o cadastro criado no Firebase

**Entrada como Visitante:** Usuários podem acessar a aplicação sem se autenticar, mas não poderão favoritar cães.

**Exibição de Raças de Cães:** A lista de cães é carregada com rolagem infinita.

**Favoritar Cães:** Usuários autenticados podem marcar raças de cães como favoritas.

**Consistência Visual:** O aplicativo foi desenvolvido para ter uma experiência visual consistente em Android e iOS.

<br/>

## **Tecnologias Utilizadas**

**React Native:** Framework para desenvolvimento mobile.

**Expo:** Plataforma para desenvolvimento e construção de aplicativos React Native.

**Firebase:** Utilizado para autenticação de usuários.

**Redux:** Para gerenciamento de estado global.

**The Dog API:** API pública para obter dados dos cães.

<br/>

## **Pré-requisitos**

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:


Baixe e instale a versão LTS do **Node.js** em:

*[Node.js](https://nodejs.org/pt)*


Após instalar o Node.js, abra seu terminal e instale o **Expo CLI** globalmente executando

*[Expo CLI (Documentação)](https://docs.expo.dev/more/expo-cli/)*

```react
npm install -g expo-cli
```

Instale o **Git** seguindo as instruções do site oficial: *[Git](https://git-scm.com/downloads)*

**Aplicativo Expo Go:** O Expo Go é necessário para rodar o aplicativo no seu dispositivo móvel.

Baixe o aplicativo Expo Go na *[App Store](https://apps.apple.com/us/app/expo-go/id982107779)* (para iOS) ou na *[Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)* (para Android).

<br/>

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
<br/>

## **Passo a Passo para Rodar o Projeto**

Utilize o *git clone* para entrar no meu projeto e inicie o *Expo Go* no seu dispositivo móvel.


**1. Clone o Repositório**

  Primeiro, clone o repositório do projeto para o seu ambiente local. Abra o terminal e execute o seguinte comando:

```
git clone https://github.com/rna22/testeRNPeople08
cd testeRNPeople08
```


**2. Instale as Dependências**

  Após clonar o repositório, você precisa instalar as dependências necessárias para rodar o projeto. No diretório do projeto, execute:

```
npm install
```

  Isso instalará todas as bibliotecas e módulos necessários listados no arquivo package.json.


**3. Configurar o Firebase**

- Crie um arquivo firebaseConfig.js na raiz do projeto e adicione as configurações do Firebase conforme as instruções no README.



**4. Configurar Variáveis de Ambiente (*obs*)**

  Algumas configurações podem exigir variáveis de ambiente. Crie um arquivo .env na raiz do projeto e adicione a chave da API da The Dog API:

```
DOG_API_KEY=your_dog_api_key
```

  Certifique-se de substituir your_dog_api_key pela sua chave de API real da The Dog API.


**5. Inicie o Expo**

  Com todas as dependências instaladas e configurações feitas, você está pronto para rodar o projeto com o Expo. No terminal, execute:

```
npm install -g expo-cli
```


E após instala-lo, incie-o:


```
npx expo start --tunnel
```

  Este comando irá iniciar o servidor de desenvolvimento do Expo e abrirá uma nova guia no seu navegador com o Expo Dev Tools.


**6. Rodar o Aplicativo no Dispositivo Móvel**

Para rodar o aplicativo no seu dispositivo móvel, siga estes passos:

  - **Escanear o QR Code:**
  
    - No Expo Dev Tools, você verá um QR code na tela.
    - Abra o aplicativo Expo Go no seu dispositivo móvel.
    - Para usuários de iOS: Use a câmera do seu iPhone para escanear o QR code. A câmera deve reconhecer automaticamente o código e oferecer a opção de abrir o link no Expo Go.
    - Para usuários de Android: Abra o Expo Go e use a opção de escanear QR code diretamente dentro do aplicativo.

  
- **Carregar o Aplicativo:**

  - Após escanear o QR code, o aplicativo começará a ser carregado no Expo Go.
  - Pode levar alguns segundos para o aplicativo ser carregado e exibido no seu dispositivo.
<br/>
  
## **Problemas Comuns e Soluções**

  - **Erro de Conexão:** Se você encontrar problemas ao conectar seu dispositivo ao Expo, verifique se ambos estão na mesma rede Wi-Fi.
  - **Aplicativo Não Carrega:** Tente reiniciar o servidor Expo (Ctrl+C para parar e expo start novamente) e também reiniciar o aplicativo Expo Go.
  - **Problemas com Variáveis de Ambiente:** Certifique-se de que o arquivo .env foi criado corretamente e que o Expo foi reiniciado após qualquer alteração nas variáveis de ambiente.
<br/>

## **Componentes Principais**

1. HomeScreen.js:

- **fetchDogs:** Função para buscar dados da API sobre cachorros.
- **fetchBreeds:** Função para buscar dados da API sobre raças.
- **combineDogsWithBreeds:** Função que combina os dados dos cachorros com as informações de suas raças.
- **loadDogs:** Função que carrega os dados dos cachorros e raças e atualiza o estado.
- **handleLoadMore:** Função que carrega mais cachorros quando o usuário rola para baixo.
- **toggleFavorite:** Função que adiciona ou remove um cachorro dos favoritos.
- **renderDog:** Função que renderiza cada cachorro usando o componente DogCard.
- **DogCard:** Componente separado que exibe as informações de um cachorro e permite marcar como favorito.


2. LoginScreen.js:

- **GuestButton:** Componente separado que exibe um botão para login como convidado.
- **handleLogin:** Função para realizar o login com e-mail/senha.
- **handleGuestLogin:** Função para realizar o login como convidado.

3. ApiUtils.js:

- **Métodos post:** Função para fazer uma requisição POST.

## **Conclusão**

Agora você está pronto para explorar e desenvolver seu próprio aplicativo Dog App com Expo! Se tiver alguma dúvida ou precisar de mais ajuda, sinta-se à vontade para consultar a documentação oficial do Expo ou abrir uma issue neste repositório.

