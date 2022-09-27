# Peak Invest - Teste

Teste para Peak Invest feito com ASP.NET + Angular + Tailwind;

## Tecnologias Utilizadas:

- [Angular](https://angular.io/) = Framework para Front-End que utiliza Typescript;
- [ASP.NET](https://dotnet.microsoft.com/) = Framework para Back-End que utiliza .NET/C#;
- [Tailwind.CSS](https://tailwindcss.com/) = Framework CSS para estilização do Front-End;

## Variáveis de ambiente:

Por se propor de um desafio, esse projeto não possui variáveis de ambientes.
A conexão feita entre back-end e front-end foi liberada para acesso em qualquer lugar.
**Lembrando que isso nunca deve ser levado a produção por questões de segurança.**

## Pre-requisitos:
- [Node.JS](https://nodejs.org/en/) em sua versão mais atual.
- [ASP.NET](https://dotnet.microsoft.com/en-us/learn/aspnet/hello-world-tutorial/install) em sua versão mais atual.

## Como Instalar:

### Front-End:
- Clone o repositório pela sua linha de comando favorita:
``git clone git@github.com:eedumarquess/peak-invest-teste.git``
- Instale as dependências:
``
cd peak-invest-teste/front-peak
``
``
npm install
``
- Inicie o projeto:
``
ng serve
``

### Back-End:
- Clone o repositório pela sua linha de comando favorita:
``git clone git@github.com:eedumarquess/peak-invest-teste.git``
- Inicie o projeto:
``
cd peak-invest-teste/back-peak/back-peak
``
``
dotnet build
``

Prontinho, o projeto já pode ser iniciado pelo endereço http://localhost:4500/ :)

## Processos da API:

A API possui apenas duas rotas, sendo uma GET e outra POST:
- GET: https://localhost:7044/{id} -
Rota para retorno de usuario que está cadastrado em uma KeyListPair, pode ser um número de 1 a 3. Outros números retornarão um erro para o front-end :(

- POST: https://localhost:7044/value={value}&parcel={parcel} - 
Rota para calculo de parcelas + juros assim como proposto no teste. 

**Lembrando que dados sensíveis nunca devem ser passados como query em URL, sim no body com alguma autenticação para não serem vazados na comunicação. Esse exemplo é APENAS usado nesse teste.**

## O que poderia ser implementado:
Pela falta de tempo e pouco conhecimentos nas linguagens, o processo de finalização do teste não foi concluido 100% mas algumas ideias para melhoria do mesmo, incluiria:
- Melhorias de segurança, como CORS indicando para URLS especificas e algum processo de autenticação, evitando de qualquer pessoa ter acesso a mesma;
- Organização de classes melhoradas, seguindo os métodos de SOLID;
- Implementação do Swagger para documentação de rotas;
- Commits "quebrados" para entendimento do código, evitando muito em um commit só;
- Implementação com docker/docker compose para facilitar a execução em ambiente local;
- Implementação de um code analyser como eslint ou prettier para código mais limpo/fluido;
- Criação de testes E2E/unitários;




