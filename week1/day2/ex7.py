import random

def get_random_temp(season):
    if season == "winter":
        return random.randint(-10, 16)
    if season == "spring":
        return random.randint(5, 25)
    if season == "summer":
        return random.randint(20, 40)
    if season == "autumn" or season == "fall":
        return random.randint(0, 20)
    return random.randint(-10, 40)

def main():
    season = input("Enter a season (winter, spring, summer, autumn): ").lower()
    temp = get_random_temp(season)
    
    print(f"The temperature right now is {temp}°C.")

    if temp < 0:
        print("Brrr, it’s freezing! Wear warm clothes.")
    elif temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif temp <= 23:
        print("Nice weather, enjoy your day!")
    elif temp <= 32:
        print("Warm and pleasant, stay hydrated.")
    else:
        print("It's really hot! Stay in the shade and drink lots of water.")

main()
