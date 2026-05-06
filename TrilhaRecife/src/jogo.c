#include <stdio.h>
#include <stdlib.h>
#include "jogo.h"
#include "historico.h"

typedef struct {
    char descricao[100];
    int ano;
} Evento;

void jogar_partida() {
    Evento eventos[] = {
        {"Fundacao do Recife", 1537},
        {"Invasao Holandesa", 1630},
        {"Expulsao dos Holandeses", 1654},
        {"Revolucao Pernambucana", 1817},
        {"Proclamacao da Republica", 1889}
    };

    int total_eventos = 5;
    int acertos = 0;
    int tentativas_totais = 0;
    int uso_dicas = 0;
    int pontos = 0;

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
            tentativas_totais++;

            if (palpite == eventos[i].ano) {
                printf("Correto!\n");
                acertos++;
                acertou = 1;

                if (tentativas_evento == 1)
                    pontos += 10;
                else if (tentativas_evento <= 3)
                    pontos += 7;
                else
                    pontos += 5;

            } else {
                uso_dicas++;

                if (palpite < eventos[i].ano)
                    printf("Dica: mais tarde\n");
                else
                    printf("Dica: mais cedo\n");
            }
        }
    }

    salvar_sessao(acertos, tentativas_totais, uso_dicas, pontos);

    printf("\n=== FIM DA PARTIDA ===\n");
    printf("Acertos: %d\n", acertos);
    printf("Tentativas: %d\n", tentativas_totais);
    printf("Dicas usadas: %d\n", uso_dicas);
    printf("Pontuacao: %d\n", pontos);
}
📄 src/historico.c
#include <stdio.h>
#include "historico.h"

void salvar_sessao(int acertos, int tentativas, int dicas, int pontos) {
    FILE *arquivo;
    arquivo = fopen("data/historico.csv", "a");

    if (arquivo == NULL) {
        printf("Erro ao abrir arquivo de historico.\n");
        return;
    }

    fprintf(arquivo, "%d,%d,%d,%d\n", acertos, tentativas, dicas, pontos);
    fclose(arquivo);
}