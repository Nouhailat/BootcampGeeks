import random
from ex2 import Dog
class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained=False
    import logging

logging.basicConfig(level=logging.INFO)

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained=False
        logging.info(f"PetDog {name} created")

    def train(self):
        logging.info(f"{self.name} is being trained")
        print(self.bark())  
        self.trained = True  
        logging.info(f"{self.name} has been trained")

    def play(self, *other_dogs):
        logging.info(f"{self.name} is playing with other dogs")
        dog_names = ", ".join([dog.name for dog in other_dogs])
        print(f"{self.name}, {dog_names} all play together!")
        logging.info(f"{self.name} has finished playing")

    def do_a_trick(self):
        if self.trained:
            logging.info(f"{self.name} is doing a trick")
            tricks = [
                f"{self.name} does a barrel roll.",
                f"{self.name} stands on his back legs.",
                f"{self.name} shakes your hand.",
                f"{self.name} plays dead."
            ]
            print(random.choice(tricks))  
            logging.info(f"{self.name} has finished doing a trick")
        else:
            logging.warning(f"{self.name} is not trained yet and cannot do a trick")
            print(f"{self.name} is not trained yet and cannot do a trick.")
    def train(self):
        print(self.bark())  
        self.trained = True  

    def play(self, *other_dogs):
        dog_names = ", ".join([dog.name for dog in other_dogs])
        print(f"{self.name}, {dog_names} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll.",
                f"{self.name} stands on his back legs.",
                f"{self.name} shakes your hand.",
                f"{self.name} plays dead."
            ]
            print(random.choice(tricks))  
        else:
            print(f"{self.name} is not trained yet and cannot do a trick.")
pet_dog1 = PetDog("kalinx", 5, 17)
pet_dog2 = PetDog("noby", 4, 13)
pet_dog3 = PetDog("farinx", 6, 18)
pet_dog1.train()