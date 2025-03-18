import random

class Game:
    def get_user_item(self):
        Moves = ['rock', 'paper', 'scissors']
        while True:
            user_input = input("Choose one : rock, paper, or scissors: ").lower()
            if user_input in Moves:
                return user_input
            print("Invalid choice please try again .")

    def get_computer_item(self):
        return random.choice(['rock', 'paper', 'scissors'])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        elif (user_item == 'rock' and computer_item == 'scissors') or \
                (user_item == 'scissors' and computer_item == 'paper') or \
                (user_item == 'paper' and computer_item == 'rock'):
            return 'win'
        else:
            return 'loss'

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f"You selected {user_item}.  I selected {computer_item}. You {result}!")
        return result


class AdvancedGame(Game):
    def __init__(self):
        super().__init__()
        self.results = {'win': 0, 'loss': 0, 'draw': 0}

    def play_multiple_rounds(self, rounds):
        for _ in range(rounds):
            result = self.play()
            self.results[result] += 1
        self.print_results()

    def print_results(self):
        print("\nGame Summary:")
        print(f"Wins: {self.results['win']}, Losses: {self.results['loss']}, Draws: {self.results['draw']}")
        print("****µµThanks for playing*******")
