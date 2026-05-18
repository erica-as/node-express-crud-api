const express = require('express');
const { sql, poolPromise } = require('../db');
const Product = require('../models/productModel');
const router = express.Router();

// Criar produto
router.post('/products', async (req, res) => {
  try {
    const { nome, codigo, preco, descricao, quantidade, avaliacao, categoria } = req.body;
    const pool = await poolPromise;
    await pool.request()
      .input('nome', sql.VarChar, nome)
      .input('codigo', sql.VarChar, codigo)
      .input('preco', sql.Decimal, preco)
      .input('descricao', sql.Text, descricao)
      .input('quantidade', sql.Int, quantidade)
      .input('avaliacao', sql.Float, avaliacao)
      .input('categoria', sql.VarChar, categoria)
      .query(`INSERT INTO Products (nome, codigo, preco, descricao, quantidade, avaliacao, categoria) 
              VALUES (@nome, @codigo, @preco, @descricao, @quantidade, @avaliacao, @categoria)`);
    res.status(201).send('Produto criado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao criar produto: ' + err);
  }
});

// Ler todos os produtos
router.get('/products', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM Products');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send('Erro ao buscar produtos: ' + err);
  }
});

// Ler produto por código
router.get('/products/:codigo', async (req, res) => {
  try {
    const { codigo } = req.params;
    const pool = await poolPromise;
    const result = await pool.request()
      .input('codigo', sql.VarChar, codigo)
      .query('SELECT * FROM Products WHERE codigo = @codigo');
    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).send('Erro ao buscar produto: ' + err);
  }
});

// Ler produtos por categoria
router.get('/products/category/:categoria', async (req, res) => {
  try {
    const { categoria } = req.params;
    const pool = await poolPromise;
    const result = await pool.request()
      .input('categoria', sql.VarChar, categoria)
      .query('SELECT * FROM Products WHERE categoria = @categoria');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send('Erro ao buscar produtos: ' + err);
  }
});

// Atualizar produto
router.put('/products/:codigo', async (req, res) => {
  try {
    const { codigo } = req.params;
    const { nome, preco, descricao, quantidade, avaliacao, categoria } = req.body;
    const pool = await poolPromise;
    await pool.request()
      .input('codigo', sql.VarChar, codigo)
      .input('nome', sql.VarChar, nome)
      .input('preco', sql.Decimal, preco)
      .input('descricao', sql.Text, descricao)
      .input('quantidade', sql.Int, quantidade)
      .input('avaliacao', sql.Float, avaliacao)
      .input('categoria', sql.VarChar, categoria)
      .query(`UPDATE Products SET nome = @nome, preco = @preco, descricao = @descricao, 
              quantidade = @quantidade, avaliacao = @avaliacao, categoria = @categoria
              WHERE codigo = @codigo`);
    res.send('Produto atualizado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao atualizar produto: ' + err);
  }
});

// Deletar produto
router.delete('/products/:codigo', async (req, res) => {
  try {
    const { codigo } = req.params;
    const pool = await poolPromise;
    await pool.request()
      .input('codigo', sql.VarChar, codigo)
      .query('DELETE FROM Products WHERE codigo = @codigo');
    res.send('Produto deletado com sucesso!');
  } catch (err) {
    res.status(500).send('Erro ao deletar produto: ' + err);
  }
});

module.exports = router;