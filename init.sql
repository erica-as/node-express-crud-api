-- Criar o banco de dados
CREATE DATABASE ProductsDB;
GO

-- Usar o banco de dados criado
USE ProductsDB;
GO

-- Criar a tabela Products
CREATE TABLE Products (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(255) NOT NULL,
    codigo NVARCHAR(50) NOT NULL UNIQUE,
    preco DECIMAL(18, 2) NOT NULL,
    descricao TEXT,
    quantidade INT NOT NULL,
    avaliacao FLOAT,
    categoria NVARCHAR(100)
);
GO