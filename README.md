## Projeto construido com express.js, Typescript, Sequelize, Postgres, JWT e bcrypt.

<hr>

### As configurações locais necessárias para o funcionamento do app estão no arquivo .env.example

<hr>

<p>No primeiro momento, é necessário criar um novo usuário para acessar o sistema. O app utiliza a lib bcrypt para criar um hash da senha e salva no banco de dados apenas o hash do password.</p>

<p>Ao realizar o login, é emitido um Json Web Token que deve ser enviado no header das requisições, como 'x-access-token':'valor-do-token', para acessar o conteúdo privado.</p>

<p>O ORM Sequelize faz a integração e verificação com o Postgres. O e-mail de cada usuário é uma chave única na tabela de usuários</p>

<p>A lib Faker.js retorna ao usuários dados mockados para exibição.</p>

<hr>

## Scripts

### `npm build`

Compila o código TS em JS dentro da past /dist

### `npm start`

Inicializa o servidor em modo de produção. 

### `npm run start:local`

Inicializa o servidor em modo de desenvolvimento através do nodemon. 

### `npm run lint`

Verifica algumas regras de compilação a serem seguidas.

### `npm run pretty`

Executa o prettier.

