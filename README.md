# Guia

Este guia contém uma lista de snippets úteis para agilizar o desenvolvimento em React Native, além de comandos essenciais para diagnosticar e corrigir problemas no Expo.

---

## Lista de Snippets Disponíveis

Esses snippets ajudam a criar componentes e configurar estilos rapidamente. Para usar o snippet, basta digitar o código correspondente e pressionar a tecla TAB (⇥).

| Snippet  | Conteúdo                                                     |
| -------- | ------------------------------------------------------------ |
| `rnbc`   | Cria um novo componente básico em React Native               |
| `rnso`   | Cria um novo componente com Stylesheet em React Native       |
| `rnsc`   | Cria um novo componente com Styled Component em React Native |
| `rnscs`  | Cria um novo arquivo de Styled Component                     |
| `rnsctc` | Caminho para acessar as propriedades de cor no tema          |
| `rnsctf` | Caminho para acessar as propriedades de fontes no tema       |
| `nbc`    | Cria um componente do Native Base                            |

Esses atalhos tornam o desenvolvimento em React Native mais eficiente e ajudam a manter um padrão no código.

---

## Comandos de Diagnóstico e Correção no Expo

Esses comandos ajudam a identificar e corrigir problemas rapidamente ao usar o Expo.

### Passo a Passo

1. **Diagnóstico Inicial**  
   Para verificar se há problemas na configuração do projeto Expo, utilize:

   ```bash
   npx expo-doctor

   ```

2. **Correção de Dependências**
   Caso o diagnóstico apresente algum problema, corrija as dependências com:
   ```bash
   npx expo install --check
   ```
   Esses comandos são úteis para garantir que todas as dependências estejam corretamente instaladas e configuradas no projeto Expo.
