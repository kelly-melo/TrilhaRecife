CC = gcc
CFLAGS = -Wall -Iinclude

SRC = src/main.c src/menu.c src/jogo.c src/historico.c src/analise.c
OUT = jogo

all:
	$(CC) $(CFLAGS) $(SRC) -o $(OUT)

clean:
	rm -f $(OUT)