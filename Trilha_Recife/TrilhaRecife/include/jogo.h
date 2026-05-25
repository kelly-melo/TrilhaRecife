#ifndef JOGO_H
#define JOGO_H

typedef struct {
    int acertos;
    int tentativas;
    int dicas;
    int pontos;
} GameState;

void jogar_partida();

#endif