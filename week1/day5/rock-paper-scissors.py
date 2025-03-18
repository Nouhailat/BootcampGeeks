from advanced_game import AdvancedGame

def get_user_menu_choice():
    print("\nMenu:")
    print("-1:Play a new game")
    print("-2:Show your scores")
    print("-3: exit")
    choice = input("Enter your choice: ")
    return choice

def main():
    game = AdvancedGame()
    while True:
        choice = get_user_menu_choice()
        if choice == '1':
            rounds = int(input("write the number of rounds: "))
            game.play_multiple_rounds(rounds)
        elif choice == '2':
            game.print_results()
        elif choice == '3':
            game.print_results()
            break
        else:
            print("invalid choice please select 1, 2, or 3.")

if __name__ == "__main__":
    main()
