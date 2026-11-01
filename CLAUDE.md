# Convenções do código

## Comparação com undefined

Use `!x` ou `== null`. Nunca use `=== undefined` nem `!== undefined`.

## Promises

Prefira `async/await`. Nunca use `.then()`.

## Getters

Nunca use `get` accessor. Toda resposta derivada é um método, como `findings.errors()` e não `findings.errors`.

## Expressões recém-criadas

Atribua o resultado de `new` a uma variável antes de chamar um método nele.

## Await

Atribua o valor de um `await` a uma variável antes de ler uma propriedade dele.

## Idioma

Todo código fica em inglês. Isso inclui identificadores, nomes de coleção e variáveis de template.

## Pacotes

Prefira os pacotes oficiais da Salesforce, publicados no npm sob `@salesforce` e no GitHub em `forcedotcom` e `salesforcecli`. Use um pacote de terceiros só quando não houver equivalente oficial.

# Convenções da documentação

## Valores derivados

Nunca escreva à mão um valor que se deriva de outra fonte, como a contagem de itens de uma lista. Omita o valor ou referencie a fonte.
