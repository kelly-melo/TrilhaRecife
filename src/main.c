#include <stdio.h>
#include "menu.h"
#include "jogo.h"
#include "analise.h"

int main() {
    int opcao = 0;

    do {
        mostrar_menu();
        opcao = ler_opcao();

        switch (opcao) {
            case 1:
                jogar_partida();
                break;

            case 2:
                analisar_desempenho();
                break;

            case 3:
                printf("\nEncerrando o jogo...\n");
                break;

            default:
                printf("\nOpcao invalida. Tente novamente.\n");
        }

    } while (opcao != 3);

    return 0;
}