#include <stdio.h>
#include "menu.h"

void mostrar_menu() {
    printf("\n=== MENU ===\n");
    printf("1 - Jogar\n");
    printf("2 - Analisar desempenho\n");
    printf("3 - Sair\n");
}

int ler_opcao() {
    int opcao;
    printf("Escolha uma opcao: ");
    scanf("%d", &opcao);
    return opcao;
}