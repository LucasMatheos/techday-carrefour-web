# Carrefour - TechDay

---

## Evento

### Descrição

 

O Tech Day é um evento do **Carrefour** em conjunto com a **Digital Innovation One** que tem como objetivo promover o protagonismo e criatividade de todos os alunos matriculados no **Bootcamp - Carrefour Web Developer.**

### Objetivo

O objetivo proposto para esse evento é de consumir uma API de produtos disponibilizada pelo Carrefour e usar a criatividade para desenvolver o projeto.

### Endpoints da API

O primeiro endpoint disponibilizado é para ***Buscar Pontos de Venda Por CEP.***  Portanto, fica responsável por retornar os “Sellers” (Pontos de venda do Carrefour), onde o primeiro retorno é o mais próximo do CEP utilizado.

![Untitled](Carrefour%20-%20TechDay%205715276e3ec6420a80f15351a2dfae90/Untitled.png)

A segunda é para ***Buscar Produtos Por Ponto de Venda.*** Ficando responsável por buscar os produtos de acordo com o “Seller” de um Ponto de Venda.

![Untitled](Carrefour%20-%20TechDay%205715276e3ec6420a80f15351a2dfae90/Untitled%201.png)

## Projeto

### Descrição

Para atingir todos os objetivos propostos no desafio, o projeto foi dividido em duas partes, sendo: Um projeto de servidor Backend e um projeto para o Frontend

### Backend

O projeto do Backend foi criado utilizando [NodeJs](https://nodejs.dev) e [Express](https://expressjs.com/pt-br/), com o intuito de resolver o bloqueio de [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS) que ocorre no Frontend caso tente consumir diretamente a API disponibilizada pelo Carrefour.

O Projeto do servidor esta disponibilizado no GitHub no link:  https://github.com/LucasMatheos/techday-carrefour-server e hospedado no [Railway](https://railway.app) no link: [`https://techday-carrefour-server.up.railway.app`](https://techday-carrefour-server.up.railway.app/)

As Rotas criadas no servidor foram:

Rota: `/postalcode` que retorna o ponto de venda mais próxima a partir do parâmetro  [postalCode=${cepNumber}](https://techday-carrefour-server.up.railway.app/postalcode?postalCode=$%7BcepNumber%7D)

[https://techday-carrefour-server.up.railway.app/postalcode?postalCode=${cepNumber}](https://techday-carrefour-server.up.railway.app/postalcode?postalCode=$%7BcepNumber%7D)

Rota: `/products` que retorna os produtos da venda mais  próxima a partir do parâmetro  [sellerName=${firstSellerId}](https://techday-carrefour-server.up.railway.app/products?sellerName=$%7BfirstSellerId%7D) que é o retorno da primeira requisição.

[https://techday-carrefour-server.up.railway.app/products?sellerName=${firstSellerId}](https://techday-carrefour-server.up.railway.app/products?sellerName=$%7BfirstSellerId%7D)

### Fronend

O projeto do Frontend foi criado utilizando [React](https://pt-br.reactjs.org) com [TypeScript](https://www.typescriptlang.org) a partir do [Vite](http://vitejs.dev) e faz uso de varias bibliotecas listadas a seguir:

1. ****[Tailwindcss](https://tailwindcss.com)**** - CSS declarativo com premissa de Mobile First (Responsividade).
2. [Headlessui](https://headlessui.dev) - Acessibilidade.
3. [Phosphor Icons](https://phosphoricons.com) - Icones com integração direta com React.
4. [Axios](https://axios-http.com/ptbr/) - Requisições HTTP.
5. [React Router](https://reactrouter.com) - Rotas do client-side.
6. [React Toastify](https://fkhadra.github.io/react-toastify/introduction) - Notificações.
7. [React Hook Form](https://react-hook-form.com) - Criação de formulários.
8. [Yup](https://github.com/jquense/yup) - Validação de formulários 

### Uso

Clonar o repositório utilizando o `git clone` ou baixa-lo compactado como .`zip`.

Abrir o a pasta do repositório e instalar as dependências do `package.json` utilizando o `yarn` ou `yarn install`

Iniciar o modo de desenvolvimento utilizando o `yarn dev`

Acessar a URL [`http://localhost:3000`](http://localhost:3000/) para visualizar o projeto.

>OBS.: Não é necessário baixar o projeto do [servidor Backend](https://github.com/LucasMatheos/techday-carrefour-server) todas as requições no Frontend estão sendo feitas diretamente para o servidor hospedado no Railway.

>OBS 2.: Caso haja problema na requição, baixe o projeto do servidor Backend, instale as dependências do `package.json` utilizando o `yarn` ou `yarn install`, execute o comando `yarn dev` para inicializar o servidor local. No projeto Frontend altere o  arquivo `api.ts` localizado na pasta `src/services` para : 

```jsx
import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:3333/",
});
```

Depois execute o `yarn dev` no projeto Frontend.

![carrefour-techday.gif](Carrefour%20-%20TechDay%205715276e3ec6420a80f15351a2dfae90/carrefour-techday.gif)