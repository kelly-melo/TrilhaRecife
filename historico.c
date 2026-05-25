#include <stdio.h>
#include "historico.h"

void salvar_sessao(GameState *estado) {
    FILE *arquivo;
    arquivo = fopen("data/historico.csv", "a");

    if (arquivo == NULL) {
        printf("Erro ao abrir arquivo de historico.\n");
        return;
    }

    fprintf(arquivo, "%d,%d,%d,%d\n", estado->acertos, estado->tentativas, estado->dicas, estado->pontos);
    fclose(arquivo);
    printf("Sessao salva com sucesso!\n");
}