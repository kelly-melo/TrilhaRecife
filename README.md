# 📍 Trilha Recife

## 🧠 Sobre o Projeto

**Trilha Recife** é um jogo interativo que transforma a história de Recife em uma experiência de exploração, estratégia e descoberta.

O jogador percorre uma **linha do tempo gamificada**, avançando por diferentes períodos históricos enquanto enfrenta desafios variados e toma decisões que impactam seu progresso.

Ao longo da jornada, o jogo propõe mais do que respostas diretas: o jogador analisa eventos, organiza sequências cronológicas, interpreta pistas e desenvolve estratégias para avançar na trilha.

Com progressão por fases, sistema de pontuação, vidas e conquistas, a experiência se constrói a partir das escolhas feitas em cada etapa.

**Trilha Recife transforma o aprendizado em uma jornada jogável, onde entender a história faz parte do avanço no jogo.**


---

# 🎯 Problema

Muitas pessoas, inclusive moradores, conhecem pouco a história do Recife e, quando conhecem, frequentemente a aprendizagem é linear e pouco engajante.

Além disso:

* quizzes tradicionais são pouco imersivos;
* decorar datas isoladas gera baixo engajamento;
* jogos educativos costumam ter pouca profundidade estratégica.

---

# 💡 Solução

Criar um jogo histórico interativo que mistura:

✅ Linha do tempo gamificada
✅ Progressão por fases e trilhas
✅ Desafios históricos variados
✅ Sistema de pontuação e conquistas
✅ Perfil e estatísticas do jogador
✅ Análise de padrões de jogo (PIF)

O jogador não apenas responde perguntas:

Ele **navega pela história do Recife.**

---

# 🎮 Visão Geral do Produto

## Conceito do jogo

O jogador percorre uma trilha histórica.

Cada casa da trilha apresenta um tipo diferente de desafio.

## 🧩 Tipos de Desafios

## 1. Depois ou Antes? (Desafio Cronológico)

Escolher qual evento ocorreu antes ou depois de outro.

Ex:

"O que aconteceu depois da Proclamação da República?"

* Inauguração da Ponte Buarque de Macedo
* Confederação do Equador

---

## 2. Ordene os Eventos

Organizar 3 ou 4 eventos na ordem correta.

Ex:

* Invasão Holandesa
* Fundação do Recife
* Expulsão dos Holandeses
* Revolução Pernambucana

---

## 3. Ano Perdido

Descobrir o ano correto com dicas “maior/menor” (mecânica original preservada).

Ex:

Em que ano ocorreu a Revolução Pernambucana?

Tentativas recebem:

🔼 Mais tarde
🔽 Mais cedo

---

## 4. Trilha de Decisão Histórica

O jogador escolhe caminhos A ou B.

Um leva a avanço.
Outro faz retroceder.

Gamificação inspirada em board games.

---

## 5. Cartas de Contexto

Cartas especiais:

* Dica histórica
* Evento surpresa
* Bônus de pontos
* Segunda chance
* “Volte 2 casas”

---

## 6. Missões Temáticas

Fases por temas:

* Recife Colonial
* Ocupação Holandesa
* Pernambuco Revolucionário
* Recife Moderno
* Cultura e Patrimônio

Cada fase possui chefe final (desafio especial).

---

# ⭐ Loop Principal do Jogo

Fluxo:

Início → Escolha de fase → Desafios → Feedback → Progressão → Estatísticas → Próxima fase

Não é apenas "acertar uma data".

Existe:

* progressão
* estratégia
* desempenho
* exploração

---

# 🏆 Mecânicas de Gamificação

## Sistema de Pontos

Pontos por:

* acerto
* streak de acertos consecutivos
* poucas tentativas
* uso eficiente de dicas
* decisões estratégicas

---

## Vidas

Jogador começa com 3 vidas.

Erros podem:

* consumir vida
* fazer voltar casas
* reduzir pontuação

---

## Conquistas (Achievements)

Exemplos:

🥇 Cronista do Recife
Complete 10 eventos sem erro

🏛 Mestre da História
Complete todas as fases

⚡ Estrategista
Vencer usando menos de 2 dicas

🧠 Memória de Ferro
Acertar 5 desafios de ordenação seguidos

---

## Ranking

* ranking local
* pontuação pessoal
* recordes
* melhores sessões

---

# 📊 Sistema de Perfil e Estatísticas

Além do jogo:

Modo “Analisar Desempenho”

O sistema salva sessões e gera:

## Métricas

* total de partidas
* média de tentativas
* melhor sessão
* pior sessão
* desvio padrão de desempenho
* taxa de acertos por tipo de desafio
* viés do jogador

  * arrisca cedo demais?
  * exagera nas dicas?
  * usa estratégia binária eficiente?

---

# 🤖 Sistema de Avaliação do Jogador

Ao fim das sessões:

Exemplos:

“Você costuma começar com palpites muito baixos.”

“Seu padrão se aproxima de busca binária eficiente.”

“Você erra mais em eventos republicanos do que coloniais.”

Isso transforma estatística em feedback pedagógico.

---

# 👥 Público-alvo

* estudantes
* turistas
* moradores do Recife
* professores
* escolas
* jogadores casuais interessados em história

---

# 🧭 Diferenciais do Produto

Não é quiz.

Não é só jogo de adivinhar datas.

É mistura de:

* timeline game
* puzzle histórico
* estratégia
* análise de desempenho
* aprendizado adaptativo

---

# 👥 Equipe

Elisa Martins Galindo Santos
Kelly Priscilla de Siqueira Melo
Maria Eduarda Vasconcelos da Silva
Pedro Henrique Marques Feitosa

---

# 🧩 Papéis no Projeto

## Maria Eduarda Vasconcelos da Silva

Product Owner / Game Designer

Responsável por:

* visão do produto
* regras dos desafios
* histórias de usuário
* experiência do jogador

---

## Kelly Priscilla de Siqueira Melo

Scrum Master / UX Strategy

Responsável por:

* gestão do projeto
* organização das entregas
* prototipação e fluxo do jogo
* documentação e README

---

## Elisa Martins Galindo Santos

Analista de Requisitos / Backlog Owner

Responsável por:

* backlog
* priorização
* requisitos funcionais
* critérios de aceitação

---

## Pedro Henrique Marques Feitosa

Desenvolvedor / Arquitetura do Protótipo

Responsável por:

* lógica do jogo
* prototipação funcional
* futura implementação em C

---

# 📋 Histórias de Usuário

## EPIC 1 — Progressão e exploração

### US01

Como jogador,
quero avançar por uma trilha histórica com múltiplos caminhos,
para explorar a história do Recife de forma progressiva.

Confirmação:

* mapa navegável
* progressão por fases
* caminhos corretos/incorretos

---

### US02

Como jogador,
quero enfrentar diferentes tipos de desafios históricos,
para que a experiência não seja repetitiva.

Confirmação:

* desafios cronológicos
* ordenação
* ano perdido
* trilhas decisórias

---

### US03

Como jogador,
quero desbloquear novas fases temáticas,
para sentir evolução no jogo.

Confirmação:

* fases bloqueadas/desbloqueadas
* progresso salvo

---

# EPIC 2 — Estratégia e gamificação

### US04

Como jogador,
quero acumular pontos e conquistas,
para ser recompensado pelo desempenho.

---

### US05

Como jogador,
quero utilizar dicas e cartas especiais,
para adotar estratégias durante desafios.

---

### US06

Como jogador,
quero ter vidas e consequências por erro,
para que minhas escolhas tenham impacto.

---

# EPIC 3 — Aprendizagem e análise

### US07

Como jogador,
quero receber feedback histórico contextual após cada desafio,
para aprender com os acertos e erros.

---

### US08

Como jogador,
quero visualizar estatísticas do meu desempenho,
para entender como estou evoluindo.

---

### US09

Como jogador,
quero receber sugestões estratégicas baseadas nas minhas partidas,
para melhorar minha performance.

---

# EPIC 4 — Persistência e histórico (PIF)

### US10

Como jogador,
quero que minhas sessões sejam registradas,
para acompanhar meu histórico.

---

### US11

Como jogador,
quero consultar relatórios analíticos das partidas,
para identificar padrões.

---

### US12

Como jogador,
quero comparar meu desempenho em rankings,
para aumentar engajamento.

---

# 🗂️ Product Backlog (priorizado)

## 🔴 Alta prioridade (MVP FDS)

* Mapa da trilha do tempo
* Desafios cronológicos
* Ordenação de eventos
* Sistema de progressão
* Pontuação
* Feedback contextual
* Conquistas básicas

---

## 🟡 Média prioridade

* Vidas
* Cartas especiais
* Ranking
* Fases temáticas
* Dicas estratégicas

---

## 🟢 Baixa prioridade / expansão

* Relatórios analíticos avançados
* Perfil completo do jogador
* Sugestões por heurísticas
* Modos extras

---

# 📎 Board do Projeto

[link do board](https://www.notion.so/33d7ce26612080c097c2df14dc4f5c91?v=33d7ce266120801ab784000c67441be4&source=copy_link)

📸 [Print do board](https://files.fm/u/fjgdnpx6uk)

📸 Print backlog

---

# 🎥 Screencast

[link do screencast](https://www.youtube.com/watch?v=dUyouVpBnrw)

---

# 💻 Repositório

[link github](https://github.com/kelly-melo/TrilhaRecife)

---

# 📌 Status do Projeto

🚧 Em desenvolvimento

Fase atual:
Repaginação do produto e prototipação das novas mecânicas.