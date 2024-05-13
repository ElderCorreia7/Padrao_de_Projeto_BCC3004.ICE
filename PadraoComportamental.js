// Padrão Comportamental: Observer (Observador)

class Sujeito {
    constructor() {
      this.observadores = [];
    }
  
    adicionarObservador(observador) {
      this.observadores.push(observador);
    }
  
    notificar(dados) {
      this.observadores.forEach(observador => observador.atualizar(dados));
    }
  }
  
  class Observador {
    atualizar(dados) {
      console.log('Recebeu dados:', dados);
    }
  }
  
  // Exemplo de uso
  const sujeito = new Sujeito();
  const observador1 = new Observador();
  const observador2 = new Observador();
  
  sujeito.adicionarObservador(observador1);
  sujeito.adicionarObservador(observador2);
  
  sujeito.notificar('Olá mundo!');