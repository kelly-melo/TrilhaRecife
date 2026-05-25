#include <stdio.h>
#include <stdlib.h>
#include "jogo.h"
#include "historico.h"

#include <string.h>

#define MAX_EVENTOS 50

typedef struct {
    char descricao[100];
    int ano;
    char contexto[255];
} Evento;

int carregar_eventos(Evento eventos[]) {
    FILE *arquivo = fopen("data/eventos.csv", "r");
    if (arquivo == NULL) {
        printf("Erro ao abrir arquivo de eventos.\n");
        return 0;
    }

    int i = 0;
    char linha[400];
    while (fgets(linha, sizeof(linha), arquivo) != NULL && i < MAX_EVENTOS) {
        // Formato: Ano;Descricao;Contexto
        char *token = strtok(linha, ";");
        if (token != NULL) {
            eventos[i].ano = atoi(token);
            token = strtok(NULL, ";");
            if (token != NULL) {
                strncpy(eventos[i].descricao, token, sizeof(eventos[i].descricao) - 1);
                eventos[i].descricao[sizeof(eventos[i].descricao) - 1] = '\0';
                
                token = strtok(NULL, "\n"); // Lê até o final da linha
                if (token != NULL) {
                    strncpy(eventos[i].contexto, token, sizeof(eventos[i].contexto) - 1);
                    eventos[i].contexto[sizeof(eventos[i].contexto) - 1] = '\0';
                } else {
                    eventos[i].contexto[0] = '\0';
                }
                i++;
            }
        }
    }
    fclose(arquivo);
    return i;
}

void jogar_partida() {
    Evento eventos[MAX_EVENTOS];
    int total_eventos = carregar_eventos(eventos);

    if (total_eventos == 0) {
        printf("Nenhum evento carregado. Abortando a partida.\n");
        return;
    }

    GameState estado = {0, 0, 0, 0};

    printf("\n=== INICIO DA PARTIDA ===\n");

    for (int i = 0; i < total_eventos; i++) {
        int palpite = 0;
        int tentativas_evento = 0;
        int acertou = 0;

        printf("\nEvento: %s\n", eventos[i].descricao);

        while (!acertou) {
            printf("Digite o ano: ");
            scanf("%d", &palpite);

            tentativas_evento++;
            estado.tentativas++;

            if (palpite == eventos[i].ano) {
                printf("Correto!\n");
                printf("Contexto: %s\n", eventos[i].contexto);
                estado.acertos++;
                acertou = 1;

                if (tentativas_evento == 1)
                    estado.pontos += 10;
                else if (tentativas_evento <= 3)
                    estado.pontos += 7;
                else
                    estado.pontos += 5;

            } else {
                estado.dicas++;

                if (palpite < eventos[i].ano)
                    printf("Dica: mais tarde\n");
                else
                    printf("Dica: mais cedo\n");
            }
        }
    }

    salvar_sessao(&estado);

    printf("\n=== FIM DA PARTIDA ===\n");
    printf("Acertos: %d\n", estado.acertos);
    printf("Tentativas: %d\n", estado.tentativas);
    printf("Dicas usadas: %d\n", estado.dicas);
    printf("Pontuacao: %d\n", estado.pontos);
}