# Coleção do Postman - Node API CRUD

## 1. **Get Products**
- **Método**: GET
- **URL**: `http://localhost:3000/products`
- **Descrição**: Retorna todos os produtos cadastrados.

---

## 2. **Create Product**
- **Método**: POST
- **URL**: `http://localhost:3000/products`
- **Headers**:
  - Content-Type: application/json
- **Body - Teste 1**:
```json
{
  "nome": "Produto Teste 1",
  "codigo": "12345",
  "preco": 99.99,
  "descricao": "Descrição do produto teste 1",
  "quantidade": 10,
  "avaliacao": 4.5,
  "categoria": "Eletrônicos"
}
```
- **Body - Teste 2**:
```json
{
  "nome": "Produto Teste 2",
  "codigo": "67890",
  "preco": 199.99,
  "descricao": "Descrição do produto teste 2",
  "quantidade": 20,
  "avaliacao": 4.7,
  "categoria": "Eletrônicos"
}
```

---

## 3. **Update Product**
- **Método**: PUT
- **URL**: `http://localhost:3000/products/:id`
- **Headers**:
  - Content-Type: application/json
- **Body - Teste 1**:
```json
{
  "nome": "Produto Atualizado 1",
  "preco": 149.99,
  "descricao": "Descrição atualizada 1",
  "quantidade": 5,
  "avaliacao": 4.8,
  "categoria": "Eletrônicos"
}
```
- **Body - Teste 2**:
```json
{
  "nome": "Produto Atualizado 2",
  "preco": 249.99,
  "descricao": "Descrição atualizada 2",
  "quantidade": 8,
  "avaliacao": 4.9,
  "categoria": "Eletrônicos"
}
```

---

## 4. **Delete Product**
- **Método**: DELETE
- **URL**: `http://localhost:3000/products/:id`
- **Descrição**: Remove o produto com o ID especificado.
- **Exemplo de Testes**:
  - Teste 1: `DELETE /products/1`
  - Teste 2: `DELETE /products/2`

---

## **Importação no Postman**
Para importar esta coleção no Postman, utilize o arquivo `Postman_Collection.json` ou crie manualmente as requisições com base nas informações acima.