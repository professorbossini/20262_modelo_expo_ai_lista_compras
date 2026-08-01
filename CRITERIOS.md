# Critérios de aceitação

Escreva o critério **antes** de acionar o agente. Depois de aplicar a
correção, verifique no aplicativo rodando — não na resposta do chat — e
marque cada item.

Um critério bom fala do que se vê ou se mede, não da implementação. Ele não
diz `flexDirection: 'row'`; diz o que aparece na tela. E tem um jeito claro de
falhar: se nada nele pode reprovar, não é critério.

---

## Defeito 1 — a linha empilhada

- [ ]
- [ ]
- [ ]

**Verificado em:** ( ) aparelho físico ( ) emulador
**Resultado:** ( ) passou ( ) reprovou

---

## Defeito 2 — o aviso de chaves

- [ ]
- [ ]

**Resultado:** ( ) passou ( ) reprovou

---

## Defeito 3 — o efeito em laço

- [ ]
- [ ]

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
