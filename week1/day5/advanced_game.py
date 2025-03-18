from game import Game


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
        print("******Thanks for playing see u next tiime*****")