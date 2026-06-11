# 📍 Trilha Recife

## 🧠 Sobre o Projeto

**Trilha Recife** é um jogo interativo que transforma a história de Recife e Pernambuco em uma experiência de descoberta e aprendizado.

O jogador enfrenta uma sequência de **eventos históricos** e deve adivinhar o ano em que cada um ocorreu. A cada acerto ou erro, o jogo revela uma **curiosidade histórica** sobre o evento, tornando cada rodada uma oportunidade de aprender algo novo.

Com sistema de pontuação, barra de progresso e feedback imediato, a experiência recompensa o conhecimento e desperta curiosidade sobre a história da capital pernambucana.

**Trilha Recife transforma o aprendizado em jogo, onde acertar o ano certo é só o começo.**

---

## 🎯 Problema

Muitas pessoas, inclusive moradores, conhecem pouco a história do Recife e, quando conhecem, a aprendizagem costuma ser linear e pouco engajante.

Além disso:

* quizzes tradicionais são pouco imersivos;
* decorar datas isoladas gera baixo engajamento;
* o conteúdo histórico raramente vem acompanhado de contexto interessante.

---

## 💡 Solução

Criar um jogo histórico interativo que mistura:

✅ Desafio de adivinhar o ano de eventos históricos
✅ Feedback imediato de acerto ou erro
✅ Curiosidades históricas a cada evento
✅ Sistema de pontuação baseado na precisão
✅ Progressão por eventos ao longo da sessão

O jogador não apenas responde: ele **descobre a história do Recife a cada tentativa.**

---

## 🎮 Visão Geral do Produto

### Conceito do jogo

O jogador recebe o nome de um evento histórico de Pernambuco e deve digitar o ano em que ele ocorreu.

Cada resposta gera feedback imediato — acerto ou erro — seguido de uma curiosidade histórica contextualizada sobre aquele evento.

### 🧩 Mecânica Principal — Ano Perdido

Dado o nome de um evento histórico, o jogador tenta descobrir o ano correto digitando sua resposta.

Exemplos de eventos:

* "Em que ano Recife foi elevada à categoria de cidade?"
* "Em que ano aconteceu a Insurreição Pernambucana?"

Ao acertar:

> ✅ **RESPOSTA CORRETA!**
> +10 Pontos
> *Curiosidade: Após crescer como importante centro comercial e portuário, Recife foi oficialmente elevada à categoria de cidade e se tornou um dos principais polos econômicos e políticos do Brasil.*

Ao errar:

> ❌ **QUE PENA! VOCÊ ERROU.**
> +0 Pontos
> O ano secreto era: **1645**
> *Fato Histórico: A Insurreição Pernambucana marcou o início da revolta contra os holandeses. Pernambucanos, cansados de serem dominados, uniram forças para recuperar o território tomado pelos invasores.*

---

## ⭐ Loop Principal do Jogo

```
Tela inicial → Tutorial (Como Jogar) → Evento 1/10 → Tentativa → Feedback + Curiosidade → Evento 2/10 → ... → Resultado final
```

A cada sessão, o jogador enfrenta **10 eventos históricos** em sequência.

---

## 🏆 Sistema de Pontuação

* Acerto: **+10 pontos**
* Erro: **+0 pontos**
* Pontuação máxima por sessão: **100 pontos**

A pontuação é exibida na barra superior durante toda a partida, junto com o contador de eventos (ex: Evento 2/10).

---

## 📖 Como Jogar

1. O objetivo é adivinhar o ano correto de um evento histórico de Pernambuco.
2. Digite o ano e clique em **Chutar**.
3. O jogo informa se você acertou ou errou.
4. Ao acertar, você ganha uma **curiosidade histórica** como recompensa.
5. Ao errar, o **Fato Histórico** é revelado mesmo assim — porque aprender é parte do jogo.

---

## 📊 Interface e Telas

| Tela | Descrição |
|------|-----------|
| **Tela Inicial** | Logo do jogo e botão "Iniciar Partida" |
| **Como Jogar** | Tutorial com as regras antes da partida começar |
| **Desafio** | Pergunta do evento + campo de digitação do ano + botão Chutar |
| **Feedback de Acerto** | "Resposta Correta!" + pontos ganhos + curiosidade histórica |
| **Feedback de Erro** | "Que Pena! Você Errou." + ano correto revelado + fato histórico |

---

## 📋 Histórias de Usuário

### EPIC 1 — Experiência de jogo

#### US01
Como jogador,
quero ver uma explicação das regras antes de começar,
para entender como o jogo funciona sem precisar adivinhar.

Confirmação:
* tela "Como Jogar" exibida antes da primeira partida
* botão "Entendi" para avançar ao jogo

---

#### US02
Como jogador,
quero digitar o ano de um evento histórico e receber resposta imediata,
para saber se acertei ou errei sem esperar.

Confirmação:
* campo de entrada de ano disponível
* feedback imediato após clicar em "Chutar"

---

#### US03
Como jogador,
quero ver uma curiosidade histórica ao fim de cada evento — seja acerto ou erro,
para aprender algo novo independentemente do resultado.

Confirmação:
* curiosidade exibida na tela de feedback de acerto
* fato histórico exibido na tela de feedback de erro
* conteúdo diferente para cada evento

---

#### US04
Como jogador,
quero ver minha pontuação atualizada a cada acerto,
para acompanhar meu desempenho ao longo da partida.

Confirmação:
* pontuação visível na barra superior
* atualização imediata após cada resposta

---

### EPIC 2 — Progressão e encerramento

#### US05
Como jogador,
quero saber em qual evento estou (ex: Evento 2/10),
para entender quanto falta para terminar a partida.

Confirmação:
* contador de progresso visível (ex: Evento 1/10)
* avanço automático após cada feedback

---

#### US06
Como jogador,
quero ver um resumo da minha performance ao fim da sessão,
para saber quantos acertei e qual pontuação obtive.

Confirmação:
* tela de resultado final ao completar os 10 eventos
* exibição de pontuação total e aproveitamento

---

## 🗂️ Product Backlog (priorizado)

### 🔴 Alta prioridade (MVP)

* Tela inicial com botão "Iniciar Partida"
* Tutorial "Como Jogar"
* Desafio de ano por evento histórico
* Feedback imediato (acerto/erro)
* Curiosidade/fato histórico por evento
* Sistema de pontuação (+10 por acerto)
* Contador de progresso (Evento X/10)
* Barra de progresso visual

---

### 🟡 Média prioridade

* Tela de resultado final da sessão
* Histórico de pontuações anteriores
* Diferentes categorias de eventos (colonial, holandês, republicano...)
* Dificuldade variável (faixa de anos como dica)

---

### 🟢 Baixa prioridade / expansão

* Ranking entre jogadores
* Perfil com estatísticas detalhadas
* Conquistas (ex: 10 acertos seguidos)
* Modo com dicas progressivas (maior/menor)

---

## 👥 Público-alvo

* estudantes
* turistas
* moradores do Recife
* professores
* escolas
* jogadores casuais interessados em história

---

## 🧭 Diferenciais do Produto

Não é quiz de múltipla escolha.

É um jogo de **precisão histórica** que:

* desafia o jogador a lembrar datas reais
* ensina através do erro (fato histórico sempre revelado)
* recompensa o acerto com curiosidades contextualizadas
* mantém a sessão ágil (10 eventos por partida)

---

## 👥 Equipe

Elisa Martins Galindo Santos
Kelly Priscilla de Siqueira Melo
Maria Eduarda Vasconcelos da Silva

---

## 🧩 Papéis no Projeto

### Maria Eduarda Vasconcelos da Silva

Product Owner / Game Designer

Responsável por:

* visão do produto
* regras dos desafios
* histórias de usuário
* experiência do jogador

---

### Kelly Priscilla de Siqueira Melo

Scrum Master / UX Strategy

Responsável por:

* gestão do projeto
* organização das entregas
* prototipação e fluxo do jogo
* documentação e README

---

### Elisa Martins Galindo Santos

Analista de Requisitos / Backlog Owner

Responsável por:

* backlog
* priorização
* requisitos funcionais
* critérios de aceitação

---

## 📎 Board do Projeto

[link do board](https://www.notion.so/33d7ce26612080c097c2df14dc4f5c91?v=33d7ce266120801ab784000c67441be4&source=copy_link)

📸 [Print do board](https://files.fm/u/fjgdnpx6uk)

---

## 🎥 Screencast

[link do screencast](https://www.youtube.com/watch?v=dUyouVpBnrw)

---

## 💻 Repositório

[link github](https://github.com/kelly-melo/TrilhaRecife)

---

## 🐛 Bugs Encontrados e Resolvidos

Durante o desenvolvimento, alguns bugs foram identificados e corrigidos ao longo das sprints:

| Bug | Descrição | Status |
|-----|-----------|--------|
| Campo de ano sem validação | O jogador conseguia submeter o campo vazio, travando a lógica de feedback | ✅ Resolvido |
| Temporizador não pausava no feedback | O contador continuava rodando mesmo com a tela de acerto/erro aberta | ✅ Resolvido |
| Pontuação duplicada em clique rápido | Clicar duas vezes rapidamente no botão "Chutar" computava +20 pontos no acerto | ✅ Resolvido |
| Curiosidade não carregava no primeiro evento | Na primeira rodada, a caixa de curiosidade aparecia em branco por erro de índice | ✅ Resolvido |
| Barra de progresso fora de sincronia | Os quadradinhos de acerto/erro não correspondiam ao evento atual em casos de navegação rápida | ✅ Resolvido |

---

## ⚠️ Impasses e Desafios do Projeto

### Gestão de Equipe e Tempo

O maior desafio enfrentado pela equipe foi a **combinação entre tamanho reduzido do time e fatores externos** que impactaram diretamente a disponibilidade de cada integrante ao longo do semestre.

Com apenas 3 pessoas, qualquer ausência ou impedimento individual tinha impacto direto no ritmo de entrega. Por fatores externos à equipe — compromissos acadêmicos paralelos, imprevistos pessoais e sobreposição de demandas de outras disciplinas — a gestão do tempo se tornou o principal gargalo do projeto.

Isso exigiu replanejamento constante do backlog e repriorização das histórias a cada sprint, concentrando esforços no que era essencial para o funcionamento do jogo.

### Programação em Pares — Relato

A programação em pares foi adotada de forma parcial ao longo do projeto, especialmente nas funcionalidades de maior complexidade.

**Sprint 01 (Entrega 03):**

Kelly e Eduarda trabalharam juntas na implementação da lógica de feedback (acerto/erro) e na exibição das curiosidades históricas. A sessão ajudou a identificar o bug de índice na primeira rodada antes que fosse para produção. Elisa atuou revisando os critérios de aceitação em paralelo.

**Sprint 02 e 03 (Entrega 04):**

Elisa e Kelly parearam na implementação do temporizador e da barra de progresso visual, onde o bug de sincronia dos quadradinhos foi pego em tempo real durante a sessão. Eduarda contribuiu com a revisão do conteúdo histórico (perguntas, anos e curiosidades) de forma assíncrona.

**Lições aprendidas com o pareamento:**

A prática se mostrou mais eficaz para bugs lógicos do que para tarefas de conteúdo ou estilo. A principal dificuldade foi conciliar horários disponíveis entre as três integrantes, o que fez com que algumas sessões acontecessem de forma remota e assíncrona — funcional, mas menos fluída do que o ideal.

---

## 📌 Status do Projeto

✅ **Concluído — Entrega 04**

Todas as histórias prioritárias foram implementadas. O jogo está funcional com deploy realizado, contendo a mecânica principal de adivinhar o ano de eventos históricos, exibição de curiosidades e fatos históricos, sistema de pontuação, temporizador e barra de progresso por sessão.
