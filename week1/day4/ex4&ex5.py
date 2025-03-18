class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f" Félicitations à la famille {self.last_name} pour la naissance de {kwargs['name']}!")
    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] >= 18
        return None 
    def family_presentation(self):
        print(f" Famille {self.last_name} :")
        for member in self.members:
            print(f"- {member['name']}, {member['age']} ans, {member['gender']}, {'Enfant' if member['is_child'] else 'Adulte'}")

class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] < 18:
                    raise Exception(f"{name} is not over 18 years old and cannot use their power!")
                print(f"{member['incredible_name']} uses their power: {member['power']}!")

smith_family = Family("Touati", [
    {'name': 'mouna', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'houda', 'age': 32, 'gender': 'Female', 'is_child': False}
])


smith_family.family_presentation()
print(smith_family.is_18("mouna"))  
print(smith_family.is_18("houda"))   

smith_family.born(name="Emma", age=0, gender="Female", is_child=True)