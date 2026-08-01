# Lista de compras

Aplicativo de apoio à aula de **programação assistida por agentes**. Ele é
pequeno, tem uma tela só e usa apenas conceitos já vistos no curso: `View`,
`Text`, `Pressable`, `TextInput`, `FlatList`, `useState`, `useEffect`,
`StyleSheet` e Flexbox.

> **Este aplicativo está quebrado de propósito.** Há cinco defeitos plantados.
> Consertá-los é o exercício.

## Como rodar

```bash
npm install
npx expo start
```

Leia o QR Code com o Expo Go no celular. Rodar em aparelho físico é
recomendado — a segunda metade da aula usa vibração, que não existe em
simulador.

## Estrutura

```
App.js                    tela: formulário, lista e rodapé com o resumo
components/ItemLista.js   uma linha da lista
data/itens.js             itens iniciais
AGENTS.md                 contexto de projeto lido pelo agente
```

## O que você deve observar na primeira execução

Três coisas aparecem sozinhas, sem você tocar em nada:

1. As linhas da lista ficam empilhadas na vertical em vez de lado a lado.
2. O console repete `recalculando resumo` sem parar e o app fica lento.
3. Um aviso do React Native sobre chaves faltando na lista.

Os outros dois defeitos só se manifestam quando você **usa** o aplicativo.
Abrir a tela e ver que ela renderiza não é teste de nada.

## Onde vão os critérios e os prompts

São coisas diferentes e vão para lugares diferentes.

Os **prompts** vão no painel do GitHub Copilot Chat, com o seletor de modo em
**Agent** — não no chat inline sobre o código, nem no modo Ask, porque nenhum
dos dois enxerga as ferramentas do MCP. Use `Shift+Enter` para quebrar linha
sem enviar.

Os **critérios de aceitação** não vão para o Copilot. Eles são o seu
instrumento de medida: você escreve antes para que o resultado do agente não
defina sozinho o que era sucesso. Use o `CRITERIOS.md` deste repositório, que
já vem com as seções vazias.

Dá para colar o critério dentro do prompt, e às vezes o resultado sai melhor.
Mas aí o agente passa a otimizar para o seu critério e a afirmar que o
atendeu — e você perde a medida independente.

## Conectando o servidor MCP do Expo

Crie `.vscode/mcp.json` na raiz do repositório:

```json
{
  "servers": {
    "expo": {
      "type": "http",
      "url": "https://mcp.expo.dev/mcp"
    }
  }
}
```

A chave raiz no VS Code é `servers` (não `mcpServers`) e o campo `type` é
obrigatório. Depois de salvar, use **MCP: List Servers** na paleta de comandos
para iniciar e autenticar com sua conta Expo.

## Branches e tags

| Ref | Estado |
| --- | --- |
| `main` | O aplicativo como você o recebe, com os cinco defeitos. |
| `solucao` | Todos os defeitos corrigidos, um commit por defeito, mais a funcionalidade de vibração. |
| `v0-quebrado` | Ponto de partida (igual a `main`). |
| `v1-layout` | Defeito 1 corrigido. |
| `v2-chaves` | Defeitos 1–2 corrigidos. |
| `v3-efeito` | Defeitos 1–3 corrigidos. |
| `v4-mutacao` | Defeitos 1–4 corrigidos. |
| `v5-numero` | Todos os cinco defeitos corrigidos. |
| `v6-haptics` | Com retorno tátil ao marcar um item. |

Ficou para trás durante a aula? Volte para o estado da turma sem perder o que
já fez:

```bash
git stash                 # guarda seu trabalho atual
git checkout v3-efeito    # vai para o estado combinado
```

Para voltar ao seu próprio código: `git checkout main` e `git stash pop`.

> A branch `solucao` é o gabarito. Ela existe para consulta **depois** da
> aula. Olhar antes economiza vinte minutos e custa o exercício inteiro.
