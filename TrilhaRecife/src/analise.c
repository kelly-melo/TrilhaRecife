#include <stdio.h>
#include "analise.h"

void analisar_desempenho() {
    FILE *arquivo;
    int acertos, tentativas, dicas, pontos;

    int total_sessoes = 0;
    int soma_acertos = 0;
    int melhor = 0;
    int pior = 999999;

    arquivo = fopen("data/historico.csv", "r");

    if (arquivo == NULL) {
        printf("\nNenhum historico encontrado.\n");
        return;
    }

    printf("\n=== ANALISE DE DESEMPENHO ===\n");

    while (fscanf(arquivo, "%d,%d,%d,%d\n",
                  &acertos, &tentativas, &dicas, &pontos) == 4) {

        total_sessoes++;
        soma_acertos += acertos;

        if (acertos > melhor)
            melhor = acertos;

        if (acertos < pior)
            pior = acertos;
    }

    fclose(arquivo);

    if (total_sessoes == 0) {
        printf("Nenhuma sessao registrada.\n");
        return;
    }

    printf("Total de sessoes: %d\n", total_sessoes);
    printf("Media de acertos: %.2f\n", (float)soma_acertos / total_sessoes);
    printf("Melhor sessao (acertos): %d\n", melhor);
    printf("Pior sessao (acertos): %d\n", pior);
}