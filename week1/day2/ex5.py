import random

def compare_numbers(user_number):
    random_number = random.randint(1, 100)
    if user_number == random_number:
        print("🎉 Bravo ! Vous avez deviné le bon nombre.")
    else:
        print(f"❌ Perdu ! Votre nombre : {user_number}, Nombre généré : {random_number}")

# Utilisation
num = int(input("Entrez un nombre entre 1 et 100 : "))
compare_numbers(num)
