# Padrão Comportamental: Observer (Observador)

## Propósito:

O Observer é um padrão de projeto comportamental que permite que você defina um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.

## Problema:

Imagine que você tem dois tipos de objetos: um Cliente e uma Loja. O cliente está muito interessado em uma marca particular de um produto (digamos que seja um novo modelo de iPhone) que logo deverá estar disponível na loja.

O cliente pode visitar a loja todos os dias e checar a disponibilidade do produto. Mas enquanto o produto ainda está a caminho, a maioria desses visitas serão em vão.

Por outro lado, a loja poderia mandar milhares de emails (que poderiam ser considerados como spam) para todos os clientes cada vez que um novo produto se torna disponível. Isso salvaria alguns clientes de incontáveis viagens até a loja. Porém, ao mesmo tempo, irritaria outros clientes que não estão interessados em novos produtos.

Parece que temos um conflito. Ou o cliente gasta tempo verificando a disponibilidade do produto ou a loja gasta recursos notificando os clientes errados.

## Solução:

O sujeito, conhecido por ter um estado interessante, é comumente chamado de publicador, pois ele notifica outros objetos sobre mudanças em seu estado. Os objetos interessados nessas mudanças são chamados de assinantes. O padrão Observer sugere adicionar um mecanismo de assinatura à classe publicadora, permitindo que objetos individuais assinem ou cancelem a assinatura de eventos provenientes dessa publicadora. Isso é alcançado através de um vetor para armazenar referências aos objetos assinantes e métodos públicos para adicionar e remover assinantes. Quando ocorre um evento importante, a publicadora notifica seus assinantes chamando um método específico de notificação em seus objetos.

Para garantir que os assinantes sejam compatíveis com todas as publicadoras, é crucial que todos implementem a mesma interface, através da qual a publicadora se comunica com eles. Essa interface deve declarar o método de notificação e um conjunto de parâmetros para passar dados contextuais junto com a notificação. Se houver diferentes tipos de publicadoras na aplicação, e deseja-se garantir a compatibilidade dos assinantes com todas elas, pode-se fazer todas as publicadoras seguirem a mesma interface, permitindo que os assinantes observem o estado das publicadoras sem se acoplar às suas classes concretas.

## Diagrama UML - Observer:

![Diagrama UML - Observer](C:\Users\Elder\Pictures\Eng_Software\structure-observer)

## Explicação do Exemplo de Código (PadraoComportamental.js):

O exemplo de código fornecido demonstra como implementar o padrão Observer em JavaScript. Aqui está uma breve explicação do código:

1. **Sujeito (Subject)**: A classe `Sujeito` representa o objeto que será observado. Ele mantém uma lista de observadores e fornece métodos para adicionar, remover e notificar observadores sobre mudanças de estado.

2. **Observador (Observer)**: A classe `Observador` representa os objetos que estão interessados em observar mudanças no objeto Sujeito. Ele implementa um método `atualizar(dados)` que será chamado pelo Sujeito quando ocorrerem mudanças. Neste exemplo, o método simplesmente imprime os dados recebidos no console.

3. **Exemplo de Uso**: Criamos um objeto Sujeito (`sujeito`) e dois objetos Observador (`observador1` e `observador2`). Em seguida, adicionamos os observadores à lista de observadores do sujeito usando o método `adicionarObservador()`. Por fim, chamamos o método `notificar()` do sujeito, passando uma mensagem como parâmetro. Isso resultará na chamada do método `atualizar()` em cada observador, que imprimirá a mensagem recebida no console.


# Padrão Criacional: Factory Method (Método de Fábrica)

## Propósito:

O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

## Problema:

Imagine que você está criando uma aplicação de gerenciamento de logística. A primeira versão da sua aplicação pode lidar apenas com o transporte de caminhões, portanto a maior parte do seu código fica dentro da classe Caminhão.

Depois de um tempo, sua aplicação se torna bastante popular. Todos os dias você recebe dezenas de solicitações de empresas de transporte marítimo para incorporar a logística marítima na aplicação.

Boa notícia, certo? Mas e o código? Atualmente, a maior parte do seu código é acoplada à classe Caminhão. Adicionar Navio à aplicação exigiria alterações em toda a base de código. Além disso, se mais tarde você decidir adicionar outro tipo de transporte à aplicação, provavelmente precisará fazer todas essas alterações novamente.

Como resultado, você terá um código bastante sujo, repleto de condicionais que alteram o comportamento da aplicação, dependendo da classe de objetos de transporte.

## Solução:

O padrão Factory Method propõe substituir chamadas diretas de construção de objetos (usando new) por chamadas a um método fábrica especial. Essa abordagem permite a criação de objetos através do new, mas dentro do método fábrica. Os objetos retornados por esse método são geralmente chamados de produtos.

Essa mudança aparentemente simples tem uma vantagem significativa: agora é possível sobrescrever o método fábrica em subclasses e alterar a classe dos produtos que ele cria. No entanto, há uma limitação: as subclasses só podem retornar tipos diferentes de produtos se esses produtos compartilharem uma classe ou interface base. Além disso, o método fábrica na classe base deve declarar seu tipo de retorno como essa interface.

Por exemplo, as classes Caminhão e Navio podem implementar a interface Transporte, que declara o método entregar. Cada classe implementa esse método de forma diferente: caminhões entregam carga por terra e navios entregam carga por mar. O método fábrica na classe LogísticaViária retorna objetos de caminhão, enquanto o método fábrica na classe LogísticaMarítima retorna navios.

O código cliente que usa o método fábrica não vê diferença entre os produtos reais retornados por várias subclasses. O cliente trata todos os produtos como um Transporte abstrato. Ele sabe que todos os objetos de transporte devem ter o método entregar, mas não precisa saber exatamente como ele é implementado.

## Diagrama UML - Factory Method:

![Diagrama UML - Factory Method](C:\Users\Elder\Pictures\Eng_Software\structure-factoryMethod)

## Explicação do Exemplo de Código (PadraoCriacional.js):

O exemplo de código fornecido demonstra como implementar o padrão Factory Method em JavaScript. Aqui está uma breve explicação do código:

1. **Produto**: A classe `Produto` representa o tipo abstrato de objeto que será criado pelo método fábrica. Neste exemplo, a classe Produto possui um método `entregar()` que deve ser implementado pelas subclasses.

2. **Método Fábrica**: A classe abstrata `FabricaDeProduto` define o método fábrica `criarProduto()`, que as subclasses devem implementar para criar objetos de produto. Neste exemplo, a classe abstrata possui um método para criar objetos Produto.

3. **Subclasses**: As subclasses `FabricaDeProdutoA` e `FabricaDeProdutoB` implementam o método fábrica para criar objetos de produto específicos (ProdutoA e ProdutoB, respectivamente).

4. **Exemplo de Uso**: Criamos uma instância de uma fábrica de produtos (`fabrica`) e usamos seu método `criarProduto()` para criar diferentes tipos de produtos. O cliente que usa a fábrica não precisa saber como os produtos são criados; ele só precisa chamar o método `criarProduto()` com o tipo de produto desejado.

# Padrão Estrutural: Adapter (Adaptador)

## Propósito:

O Adapter é um padrão de projeto estrutural que permite objetos com interfaces incompatíveis colaborarem entre si.

## Problema:

Imagine que você está criando uma aplicação de monitoramento do mercado de ações da bolsa. A aplicação baixa os dados das ações de múltiplas fontes em formato XML e então mostra gráficos e diagramas maneiros para o usuário.

Em algum ponto, você decide melhorar a aplicação ao integrar uma biblioteca de análise de terceiros. Mas aqui está a pegadinha: a biblioteca só trabalha com dados em formato JSON.

Você poderia mudar a biblioteca para que ela funcione com XML. Contudo, isso pode quebrar algum código existente que depende da biblioteca. E pior, você pode não ter acesso ao código fonte da biblioteca para começo de conversa, fazendo dessa abordagem uma tarefa impossível.

## Solução:

Você pode simplificar criando um adaptador, um objeto especial que converte a interface de um objeto para que outro possa entendê-lo. Este adaptador esconde a complexidade da conversão, permitindo que o objeto original seja usado sem saber sobre o adaptador.

Por exemplo, você pode usar um adaptador para converter dados entre unidades de medida, como metros para pés, sem que o objeto original precise se preocupar com essa conversão.

Os adaptadores não apenas convertem dados entre formatos, mas também ajudam objetos com interfaces diferentes a colaborar. Eles funcionam assim:

- O adaptador obtém uma interface compatível com o objeto original.
- O objeto original chama os métodos do adaptador usando essa interface.
- O adaptador traduz a chamada para o formato esperado pelo segundo objeto e a repassa.

Às vezes, é possível criar um adaptador de duas vias que converte chamadas em ambas as direções.

Voltando ao exemplo da bolsa de valores, para lidar com formatos incompatíveis, você pode criar adaptadores XML-para-JSON para cada classe da biblioteca de análise. Então, ajusta-se o código para usar esses adaptadores para se comunicar com a biblioteca. Quando o adaptador recebe uma chamada, ele traduz os dados de XML para JSON e repassa a chamada para os métodos adequados do objeto de análise.

## Diagrama UML - Object adapter e Class adapter:
# Padrão Estrutural: Adaptador de objeto
## Descrição:
Essa implementação usa o princípio de composição do objeto: o adaptador implementa a interface de um objeto e encobre o outro. Ele pode ser implementado em todas as linguagens de programação populares.

![Diagrama UML - Adapter ()](C:\Users\Elder\Pictures\Eng_Software\structure-object-adapter)

# Padrão Estrutural: Adaptador de classe
## Descrição:
Essa implementação utiliza herança: o adaptador herda interfaces de ambos os objetos ao mesmo tempo. Observe que essa abordagem só pode ser implementada em linguagens de programação que suportam herança múltipla, tais como C++.

![Diagrama UML - Adapter ()](C:\Users\Elder\Pictures\Eng_Software\structure-class-adapter)

## Diagrama UML - Object Adapter e Class Adapter

### Padrão Estrutural: Adaptador de Objeto

#### Descrição:
Esta implementação utiliza o princípio de composição de objeto: o adaptador implementa a interface de um objeto e encobre o outro. Pode ser implementado em todas as linguagens de programação populares.

![Diagrama UML - Adapter](C:/Users/Elder/Pictures/Eng_Software/structure-object-adapter)

### Padrão Estrutural: Adaptador de Classe

#### Descrição:
Esta implementação utiliza herança: o adaptador herda interfaces de ambos os objetos ao mesmo tempo. Observe que essa abordagem só pode ser implementada em linguagens de programação que suportam herança múltipla, como C++.

![Diagrama UML - Adapter](C:/Users/Elder/Pictures/Eng_Software/structure-class-adapter)


## Explicação do Exemplo de Código (PadraoEstrutural.js):

O exemplo de código fornecido demonstra como implementar o padrão Adapter em JavaScript. Aqui está uma breve explicação do código:

1. **Objeto Adaptado (Adaptee)**: A classe `ObjetoAdaptado` representa o objeto com a interface incompatível que precisamos adaptar. Neste exemplo, a classe `ObjetoAdaptado` possui um método `operacaoEspecifica()` que não é compatível com a interface esperada pelo cliente.

2. **Adaptador (Adapter)**: A classe `Adaptador` é a responsável por adaptar a interface do `ObjetoAdaptado` para a interface esperada pelo cliente. Ela implementa os métodos da interface do cliente e delega a chamada aos métodos do `ObjetoAdaptado` conforme necessário.

3. **Cliente (Client)**: O cliente é quem utiliza a interface esperada pelo adaptador. Ele chama os métodos do adaptador sem saber que está sendo adaptado.

4. **Exemplo de Uso**: Criamos uma instância do `Adaptador` e a utilizamos como se fosse um objeto da interface esperada pelo cliente. O adaptador, por sua vez, utiliza o `ObjetoAdaptado` internamente para realizar as operações necessárias.

