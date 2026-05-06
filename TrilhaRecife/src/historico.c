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
    printf("Sessao salva com sucesso!\n");
}