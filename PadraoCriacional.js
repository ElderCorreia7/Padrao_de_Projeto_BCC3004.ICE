// Padrão Criacional: Factory Method (Método de Fábrica)

class Produto {
    constructor(nome) {
      this.nome = nome;
    }
  
    descrever() {
      console.log(`Produto: ${this.nome}`);
    }
  }
  
  class FabricaDeProduto {
    criarProduto(nome) {
      return new Produto(nome);
    }
  }
  
  // Exemplo de uso
  const fabrica = new FabricaDeProduto();
  const produto = fabrica.criarProduto('Widget');
  produto.descrever();