# Express Products API - Exercicio

API REST para gerenciamento de produtos de energia solar, construida com **Express**, **Knex** e **SQLite**.

## Sobre o exercicio

O objetivo e implementar os endpoints de uma API de produtos. O projeto ja vem com a estrutura pronta (servidor, banco de dados, migrations, seeds). Voce deve implementar os 7 TODOs marcados no arquivo `src/routes/products.js`.

### Endpoints para implementar

| # | Metodo | Rota | Descricao |
|---|--------|------|-----------|
| 0 | GET | `/products` | Adicionar filtro por tipo via query param `?type=` |
| 1 | GET | `/products/random` | Retorna um produto aleatorio |
| 2 | GET | `/products/stats` | Retorna contagem de produtos agrupados por tipo |
| 3 | GET | `/products/:id` | Retorna um produto pelo ID |
| 4 | POST | `/products` | Cria um novo produto |
| 5 | PUT | `/products/:id` | Atualiza um produto existente |
| 6 | DELETE | `/products/:id` | Deleta um produto |

Cada TODO no codigo contem instrucoes detalhadas, exemplos de resposta esperada e dicas de como resolver.

### Estrutura do banco de dados

A tabela `products` possui os seguintes campos:

| Campo | Tipo | Descricao |
|-------|------|-----------|
| `id` | integer | Chave primaria (auto-incremento) |
| `name` | string | Nome do produto |
| `code` | string | Codigo do produto |
| `description` | text | Descricao |
| `type` | string | Tipo: `inverter`, `module`, `cable`, `connector` |
| `business_unit` | string | Unidade de negocio (default: `corsolar`) |
| `cost_in_cents` | integer | Custo em centavos |
| `default_price_in_cents` | integer | Preco padrao em centavos |
| `stock_quantity` | integer | Quantidade em estoque |
| `weight` | float | Peso em kg |
| `manufacturer_name` | string | Nome do fabricante |
| `ac_power` | float | Potencia AC (inversores) |
| `dc_power` | float | Potencia DC (modulos) |
| `enabled` | boolean | Produto ativo/inativo |

O seed popula o banco com 100 produtos (25 de cada tipo).

## Pre-requisitos

- [Node.js](https://nodejs.org/) (v16 ou superior)

## Instalacao

```bash
# Instalar dependencias
npm install

# Criar o banco de dados e popular com dados iniciais
npm run setup
```

## Como rodar

```bash
# Iniciar o servidor
npm start
```

O servidor vai rodar em `http://localhost:3020`.

## Testando os endpoints

Voce pode testar usando `curl`, Postman, Insomnia ou qualquer cliente HTTP.

```bash
# Listar todos os produtos
curl http://localhost:3020/products

# Filtrar por tipo (depois de implementar o TODO 0)
curl http://localhost:3020/products?type=inverter

# Buscar produto por ID (depois de implementar o TODO 3)
curl http://localhost:3020/products/1

# Criar produto (depois de implementar o TODO 4)
curl -X POST http://localhost:3020/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Novo Produto", "code": "NP-001", "type": "module", "cost_in_cents": 10000, "default_price_in_cents": 15000, "stock_quantity": 10, "weight": 5.0, "manufacturer_name": "Test"}'

# Atualizar produto (depois de implementar o TODO 5)
curl -X PUT http://localhost:3020/products/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Nome Atualizado", "stock_quantity": 99}'

# Deletar produto (depois de implementar o TODO 6)
curl -X DELETE http://localhost:3020/products/1
```

## Scripts disponiveis

| Comando | Descricao |
|---------|-----------|
| `npm start` | Inicia o servidor |
| `npm run migrate` | Roda as migrations |
| `npm run seed` | Popula o banco com dados iniciais |
| `npm run setup` | Roda migrations + seed de uma vez |

## Tecnologias

- **Express** - Framework web
- **Knex** - Query builder para SQL
- **better-sqlite3** - Driver SQLite
