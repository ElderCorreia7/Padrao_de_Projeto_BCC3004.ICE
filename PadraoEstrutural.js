// Padrão Estrutural: Adapter (Adaptador)

class CalculadoraAntiga {
    constructor() {
      this.operacoes = function(termo1, termo2, operacao) {
        switch (operacao) {
          case 'soma':
            return termo1 + termo2;
          case 'subtracao':
            return termo1 - termo2;
          default:
            return NaN;
        }
      };
    }
  }
  
  class CalculadoraNova {
    soma(termo1, termo2) {
      return termo1 + termo2;
    }
  
    subtracao(termo1, termo2) {
      return termo1 - termo2;
    }
  }
  
  class Adaptador {
    constructor() {
      this.calculadoraNova = new CalculadoraNova();
    }
  
    operacoes(termo1, termo2, operacao) {
      switch (operacao) {
        case 'soma':
          return this.calculadoraNova.soma(termo1, termo2);
        case 'subtracao':
          return this.calculadoraNova.subtracao(termo1, termo2);
        default:
          return NaN;
      }
    }
  }
  
  // Exemplo de uso
  const adaptador = new Adaptador();
  console.log(adaptador.operacoes(5, 3, 'soma'));
  console.log(adaptador.operacoes(5, 3, 'subtracao'));
  