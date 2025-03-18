class Cat:
    def __init__(self, cat_name, cat_age=0):
        self.name = cat_name
        self.age = cat_age
cat1=Cat("mimi",2)
cat2=Cat("lolo",1)
cat3=Cat("bella",4)
def oldest_cat(*cats):
        return max(cats, key=lambda cat: cat.
                   

the_most_oldest=oldest_cat(cat1,cat2,cat3)
print(f"the oldest cat is {the_most_oldest.name} she have {the_most_oldest.age} years")