class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal, count=1):
        self.animals[animal] = self.animals.get(animal, 0) + count

    def get_info(self):
        result = f"{self.name}'s farm"
        for animal, count in self.animals.items():
            result += f"{animal} : {count}"
        result += "\n    E-I-E-I-0"
        return result

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animal_list = self.get_animal_types()
        animal_str = ", ".join([f"{animal}s" for animal in animal_list])
        return f"{self.name}’s farm has {animal_str}."


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
