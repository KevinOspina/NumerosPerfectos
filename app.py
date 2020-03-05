
# Realizar un código el cual permita encontrar los anteriores y siguientes 50 números primos desde un número n

# Lista para guardar los números primos
n_primosp = []
n_primosn = []

# Comprueba si el número es primo


def primos(numero):
    if numero < 2:
        return False
    for x in range(2, numero):
        if numero % x == 0:
            return False
        else:
            return True


# Cantidad de números primos a encontrar de 0 a n
def numerosPP(numero):
    cont = 0
    i = numero

    while cont < 50:
        i = i+1
        if primos(i):
            cont = cont + 1
            n_primosp.append(i)

    print(n_primosp)


def numerosPN(numero):
    cont = 0
    i = numero

    while cont < 50 and i >= 2:
        i = i-1
        if primos(i):
            cont = cont + 1
            n_primosn.append(i)

    print(n_primosn)


# Selecciona el número desde el cual se quieran ver los siguientes y anteriores(de ser posibles) 50 números primos
f = 100


print(f" ")
print(f"Siguientes 50 números primos de {f}:")
numerosPP(f)
print(f" ")
print(f"Anteriores números primos de {f}:")
numerosPN(f)
print(f" ")
