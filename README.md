# Uma API REST simples para consumo de dados

Para colocar o projeto no ar, renomeie `.env_example` para `.env`;

Adicione uma secret key no arquivo `.env`:

```
TOKEN_SECRET='sua_secret_key_aqui'
```

Configure o dialect de acordo com o banco de dado que você vai utilizar (MySQL ou MariaDB), em `src/config/database.js`:

```javascript
require('dotenv').config();

module.exports = {
  dialect: "mariadb"
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
```

Execute os comandos abaixo:

```
npm i
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

Neste ponto sua API deverá está rodando no endereço http://127.0.0.1:3030/.

Os dados de usuário e senha dos arquivos de seed são:

- email = teste@email.com
- senha = 123456

Você pode obter o token JWT na rota `/tokens`, passando os dados JSON:

```json
{
	"email": "teste@email.com",
	"password": "123456"
}
```

Headers:

```
Content-Type	application/json; charset=utf-8
```
