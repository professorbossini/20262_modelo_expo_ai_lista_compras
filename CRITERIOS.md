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

- [ ] o laço para
- [ ] o arquivo não contém nenhum useState cujo valor possa ser calculado a partir de itens
- [ ] o arquivo não contém nenhum useEffect cuja única função seja manter esse valor

**Resultado:** ( ) passou ( ) reprovou

Depois de corrigir, releia a Parte 6 da apostila e responda: a correção tocou
a causa ou só o sintoma?

---

## Defeito 4 — o toque que não marca

- [ ]
- [ ]

**Resultado:** ( ) passou ( ) reprovou

---

## Defeito 5 — 6 mais 2 dá 62

- [ ]
- [ ]

**Resultado:** ( ) passou ( ) reprovou

---

## Funcionalidade nova — retorno tátil

- [ ]
- [ ]
- [ ]

**Resultado:** ( ) passou ( ) reprovou

---

## Antes de aceitar cada diff

1. Quais arquivos mudaram? Algum que você não esperava?
2. Quantas linhas? Muito mais do que o problema exige?
3. A causa foi tocada, ou só o sintoma?
4. Entrou alguma dependência nova? Com qual comando, em qual versão?
5. Você consegue explicar cada linha alterada?
6. O critério foi verificado no aplicativo rodando?
