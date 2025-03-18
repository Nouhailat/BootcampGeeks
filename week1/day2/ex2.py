family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}
count=0
for name,age in family.items():
    price=0 if age< 3 else 10 if age <= 12 else 15
    print(f"{name}  should give ${price}")
count+=price
print(f" the all many should give for all family is ${count}")

#with bonus
dicFamily={}
info=int(input("enter  the  numbers of your family"))
for i in range (info):
    name1=input("name")
    age1=int(input("age"))
    dicFamily[name1]=age1
total3=sum(0 if age1< 3 else 10 if age1 <= 12 else 15 for age1 in dicFamily.values())
print("\n".join(f"{name1} should puy ${0 if age1 < 3 else 10 if age1 <= 12 else 15}."for name1 ,age1 in dicFamily.items()))
print(f"total is ${total3}")