class Zoo:
    def __init__(self,zoo_name):
        self.zoo_name=zoo_name
        self.animals=[]
    def add_animal(self,new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        else:
            print("animal already exist")
    def get_animals(self):
        print(f"all animal in zoo {self.animals}")
    def sell_animal(self,animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold")
        else:
            print(f"{animal_sold} is not in the zoo")
    def sort_animals(self):
        self.animals.sort()
        grouped_animals={}

        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = []
            grouped_animals[first_letter].append(animal)
        for key in grouped_animals:
            if len(grouped_animals[key]) == 1:
                grouped_animals[key] = grouped_animals[key][0]
        self.animal_groups = grouped_animals
        return grouped_animals

    def get_groups(self):
        if not hasattr(self, 'animal_groups'):
            print("Please sort the animals first using sort_animals().")
            return

        for key, animals in self.animal_groups.items():
            print(f"{key}: {animals}")
zoologique = Zoo("zoologique")
zoologique.add_animal("lapin")
zoologique.add_animal("koala")
zoologique.add_animal("cat")
zoologique.add_animal("lavache")
zoologique.add_animal("giraffe")
sorted_groups = zoologique.sort_animals()
print("Sorted Animal Groups:", sorted_groups)
zoologique.get_groups()
zoologique.sell_animal("cat")
zoologique.get_groups()




