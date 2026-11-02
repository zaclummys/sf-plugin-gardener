# Convenções do código

## Comparação com undefined

Use `!x` ou `== null`. Nunca use `=== undefined` nem `!== undefined`.

## Ausência de valor

Quando não há valor, retorne `null`. Nunca retorne `undefined`.

## Promises

Prefira `async/await`. Nunca use `.then()`.

## Getters

Nunca use `get` accessor. Toda resposta derivada é um método, como `findings.errors()` e não `findings.errors`.

## Expressões recém-criadas

Atribua o resultado de `new` a uma variável antes de chamar um método nele.

## Await

Atribua o valor de um `await` a uma variável antes de ler uma propriedade dele.

## Cadeia de métodos

Atribua o resultado de uma cadeia de chamadas a uma variável antes de ler uma propriedade dele.

## Idioma

Todo código fica em inglês. Isso inclui identificadores, nomes de coleção e variáveis de template.

## Pacotes

Prefira os pacotes oficiais da Salesforce, publicados no npm sob `@salesforce` e no GitHub em `forcedotcom` e `salesforcecli`. Use um pacote de terceiros só quando não houver equivalente oficial.

## Versões

Use a versão mais recente de tudo. Marque apenas o major, como `^5` e não `^5.1.11`. Isso vale para pacotes, actions e runtimes.

## Erros

Nunca lance erro em `src/core/` nem em `src/services/`. Quem lança é o comando.

## Tipo de resultado

Todo tipo que tem `success` termina com `Result`, como `ProjectLocateResult`.

## Nome de função

Todo nome de função e de método começa com um verbo.

## Let

Evite `let`. Prefira `const`, e extraia uma função quando a atribuição depender de um `try/catch`.

## Retorno de sucesso

O `return` do caso de sucesso fica por último na função. Dentro de `try/catch` ele pode ficar no `try`.

## Método estático

Todo método que não usa `this` é `static`, exceto os dos adaptadores, que são injetados no serviço.

## JSDoc

Documente com JSDoc e uma descrição bem simples. Quando a função recebe um único objeto anônimo, use `@param` com o nome da propriedade e não referencie o objeto.

## Um aspecto por teste

Cada teste verifica um aspecto só. Um fixture contém apenas o que esse aspecto exige.

## TDD

Escreva o teste e pare no vermelho. Só implemente o código depois que eu revisar o teste. Antes de começar o green, commite o red.

## Commit

Só commite quando eu pedir naquela mensagem. Um pedido anterior não vale para as mudanças seguintes.

# Convenções da documentação

## Valores derivados

Nunca escreva à mão um valor que se deriva de outra fonte, como a contagem de itens de uma lista. Omita o valor ou referencie a fonte.
