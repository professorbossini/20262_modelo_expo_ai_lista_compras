# Critérios de aceitação

Escreva o critério **antes** de acionar o agente. Depois de aplicar a
correção, verifique no aplicativo rodando — não na resposta do chat — e
marque cada item.

Um critério bom fala do que se vê ou se mede, não da implementação. Ele não
diz `flexDirection: 'row'`; diz o que aparece na tela. E tem um jeito claro de
falhar: se nada nele pode reprovar, não é critério.

---

## Defeito 1 — a linha empilhada

- [ x ] marcador, nome e quantidade aparecem lado a lado na horizontal
- [ x ] o nome ocupa o espaço do meio, esticando conforme o texto
- [ x ] a quantidade fica encostada na margem direita

**Verificado em:** ( ) aparelho físico ( x ) emulador
**Resultado:** ( x ) passou ( ) reprovou

---

## Defeito 2 — o aviso de chaves

- [ x ] o aviso sobre chaves desaparece do terminal
- [ x ] cada linha é identificada pelo campo codigo
- [ x ] a identificação não usa a posição do item da lista

**Verificado em:** ( ) aparelho físico ( x ) emulador
**Resultado:** ( x ) passou ( ) reprovou

---

## Defeito 3 — o efeito em laço

- [ x ] o laço para
- [ x ] o arquivo não contém nenhum useState cujo valor possa ser calculado a partir de itens
- [ x ] o arquivo não contém nenhum useEffect cuja única função seja manter esse valor

**Resultado:** ( x ) passou ( ) reprovou
**Verificado em:** ( ) aparelho físico ( x ) emulador

Depois de corrigir, releia a Parte 6 da apostila e responda: a correção tocou
a causa ou só o sintoma?

---

## Defeito 4 — o toque que não marca

- [ x ] tocar em um item preenche o marcador e risca o nome no mesmo instante
- [ x ] a contagem do rodapé muda junto com o toque
- [ x ] tocar de novo no mesmo item desfaz as três coisas
- [ x ] nenhuma marcação aparece com atraso, ao digitar em outro campo

**Resultado:** ( x ) passou ( ) reprovou
**Verificado em:** ( ) aparelho físico (  ) emulador ( x ) web 

---

## Defeito 5 — 6 mais 2 dá 62

- [ x ] adicionar um item com quantidade 2 a uma lista de 6 unidades leva o rodapé a 8
- [ ] campo de quantidade vazio não quebra o total
- [ x ] texto não numérico no campo de quantidade não quebra o total
- [ x ] o rodapé nunca mostra NaN

**Resultado:** ( x ) passou ( ) reprovou
**Verificado em:** ( ) aparelho físico (  ) emulador ( x ) web 

---

## Funcionalidade nova — retorno tátil

- [ ]
- [ ]
- [ ]

**Resultado:** ( ) passou ( ) reprovou


## Funcionalidade nova — copiar e colar

- [ ] tocar em "Copiar lista" envia o conteúdo atual da lista para área de transferência
- [ ] colar em outro aplicativo reproduz uma linha por item
- [ ] cada linha indica se o item já foi comprado
- [ ] há uma quebra de linha entre os itens, e não tudo emendado
- [ ] a lista do aplicativo continua igual depois de copiar

**Resultado:** ( ) passou ( ) reprovou

---

## Antes de aceitar cada diff

1. Quais arquivos mudaram? Algum que você não esperava?
2. Quantas linhas? Muito mais do que o problema exige?
3. A causa foi tocada, ou só o sintoma?
4. Entrou alguma dependência nova? Com qual comando, em qual versão?
5. Você consegue explicar cada linha alterada?
6. O critério foi verificado no aplicativo rodando?
