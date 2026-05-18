require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rotas básicas
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

const productRoutes = require('./routes/productRoutes');

app.use('/api', productRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});