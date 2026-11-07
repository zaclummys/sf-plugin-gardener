# Convenções do código

## Comparação com undefined

Use `!x` ou `== null`. Nunca use `=== undefined` nem `!== undefined`.

## Ausência de valor

Quando não há valor, retorne `null`. Nunca retorne `undefined`.

## Parâmetro opcional

Nunca declare parâmetro nem propriedade de objeto com `?`. Use `T | null`. O adaptador converte o `undefined` da biblioteca com `?? null`.

## Verificação de nulo

Nunca use `Boolean(x)`. Use `x != null` ou `!x`.

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

## Tipo de saída

Todo tipo que tem `success` termina com `Output`, como `ProjectLocateOutput`.

## Nome de função

Todo nome de função e de método começa com um verbo.

## Obsessão por primitivos

Não use primitivo, `Map` nem `Array` para representar um conceito do domínio. Crie uma classe que o modele. A classe guarda a validação e os métodos do conceito.

## Construtor

O construtor de uma classe do domínio recebe os dados crus num objeto anônimo, com um campo por dado. Ele mesmo cria as classes internas. Não embrulhe os dados numa propriedade nem num tipo novo quando não houver necessidade.

## Método from

O método estático que cria uma classe a partir de um valor se chama `from`. Ele devolve `null` quando o valor é `null`. É a exceção da regra Nome de função.

## Uma regra, um elemento

Uma regra de lint verifica um único elemento. Nunca crie propriedade que escolha o que ela verifica. Crie uma regra por elemento.

## Nome específico

Nunca use um termo genérico onde houver um termo específico, como `input` ou `data`. Nomeie pelo que é, como `customFields`. O termo genérico só vale onde o tipo é genérico.

## Sufixo File

Toda classe que tem `path` como propriedade leva o sufixo `File`, como `ProjectFile` e `CustomFieldFile`. A coleção leva `Files`, como `CustomFieldFiles`.

## Ternário

Nunca use operador ternário. Use `if` ou extraia uma função.

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

## Fixtures

Valide cada fixture que tem metadado com `sf project deploy start --dry-run --source-dir force-app --target-org linter-scratch`, dentro do diretório dele. Um fixture só vale se o dry run passar.

## TDD

Escreva o teste e pare no vermelho. Só implemente o código depois que eu revisar o teste. Antes de começar o green, commite o red.

## Testes do red

No red, escreva todos os testes que o requisito pede para o que vai implementar. Não se limite a um teste.

## Commit

Só commite quando eu pedir naquela mensagem. Um pedido anterior não vale para as mudanças seguintes.

## Etapas

Nunca faça uma tarefa inteira num único comando de `Bash` ou script de `python`. Quebre em etapas pequenas, uma chamada por etapa. Assim uma falha não desfaz o resto e eu acompanho o progresso.

## Escopo

Faça só o que eu pedi. Não crie propriedade, tipo nem classe que eu não pedi.

## Decisões

Decida sozinho quando houver uma opção razoável e diga qual escolheu. Pergunte só quando não houver.

# Convenções da documentação

## Valores derivados

Nunca escreva à mão um valor que se deriva de outra fonte, como a contagem de itens de uma lista. Omita o valor ou referencie a fonte.
