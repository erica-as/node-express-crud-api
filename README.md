# Guia de Uso da API - Node API CRUD

## Introdução
Esta API permite gerenciar produtos com operações CRUD (Criar, Ler, Atualizar e Deletar). Abaixo estão as instruções detalhadas para cada endpoint.

---

## Endpoints

### 1. **Listar Produtos**
- **Método**: GET
- **URL**: `http://localhost:3000/products`
- **Descrição**: Retorna todos os produtos cadastrados.
- **Exemplo de Resposta**:
```json
[
  {
    "id": 1,
    "nome": "Produto Teste",
    "codigo": "12345",
    "preco": 99.99,
    "descricao": "Descrição do produto teste",
    "quantidade": 10,
    "avaliacao": 4.5,
    "categoria": "Eletrônicos"
  }
]
```

---

### 2. **Criar Produto**
- **Método**: POST
- **URL**: `http://localhost:3000/products`
- **Headers**:
  - Content-Type: application/json
- **Body**:
```json
{
  "nome": "Produto Teste",
  "codigo": "12345",
  "preco": 99.99,
  "descricao": "Descrição do produto teste",
  "quantidade": 10,
  "avaliacao": 4.5,
  "categoria": "Eletrônicos"
}
```
- **Exemplo de Resposta**:
```json
{
  "id": 1,
  "nome": "Produto Teste",
  "codigo": "12345",
  "preco": 99.99,
  "descricao": "Descrição do produto teste",
  "quantidade": 10,
  "avaliacao": 4.5,
  "categoria": "Eletrônicos"
}
```

---

### 3. **Atualizar Produto**
- **Método**: PUT
- **URL**: `http://localhost:3000/products/:id`
- **Headers**:
  - Content-Type: application/json
- **Body**:
```json
{
  "nome": "Produto Atualizado",
  "preco": 149.99,
  "descricao": "Descrição atualizada",
  "quantidade": 5,
  "avaliacao": 4.8,
  "categoria": "Eletrônicos"
}
```
- **Exemplo de Resposta**:
```json
{
  "id": 1,
  "nome": "Produto Atualizado",
  "codigo": "12345",
  "preco": 149.99,
  "descricao": "Descrição atualizada",
  "quantidade": 5,
  "avaliacao": 4.8,
  "categoria": "Eletrônicos"
}
```

---

### 4. **Deletar Produto**
- **Método**: DELETE
- **URL**: `http://localhost:3000/products/:id`
- **Descrição**: Remove o produto com o ID especificado.
- **Exemplo de Resposta**:
```json
{
  "message": "Produto removido com sucesso."
}
```

---

## Observações
- Substitua `:id` pelo ID do produto que deseja atualizar ou deletar.
- Certifique-se de que o servidor está em execução antes de realizar as requisições.
- Utilize ferramentas como Postman ou cURL para testar os endpoints.

---

## Importação no Postman
Para facilitar os testes, você pode importar a coleção `Postman_Collection.json` incluída no projeto.