class Product {
  constructor(nome, codigo, preco, descricao, quantidade, avaliacao, categoria) {
    this.nome = nome;
    this.codigo = codigo;
    this.preco = preco;
    this.descricao = descricao;
    this.quantidade = quantidade;
    this.avaliacao = avaliacao;
    this.categoria = categoria;
  }
}

module.exports = Product;