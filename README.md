# Dev Junior Test - Cordeiro

Exercicio pratico de API REST com Express, Knex e SQLite para gerenciamento de produtos de energia solar.

## Estrutura de pastas

```
.
└── backend/                    # API backend (Node.js)
    ├── src/                    # Codigo-fonte da aplicacao
    │   ├── index.js            # Entry point - configura o Express e inicia o servidor na porta 3020
    │   ├── db.js               # Configuracao da conexao com o banco (Knex + SQLite)
    │   └── routes/
    │       └── products.js     # Rotas da API de produtos (TODOs para implementar)
    ├── migrations/
    │   └── 001_create_products.js  # Migration que cria a tabela "products"
    ├── seeds/
    │   └── 001_products.js     # Seed com 100 produtos (25 inversores, 25 modulos, 25 cabos, 25 conectores)
    ├── knexfile.js             # Configuracao do Knex (client, conexao, diretorios)
    ├── package.json            # Dependencias e scripts npm
    └── .gitignore              # Ignora node_modules e arquivos .sqlite3
```

## Como comecar

```bash
cd backend
npm install
npm run setup   # cria o banco e popula com dados
npm start       # inicia o servidor em http://localhost:3020
```

Para mais detalhes sobre os endpoints e o exercicio, veja o [README do backend](./backend/README.md).
