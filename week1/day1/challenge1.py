#challenge 1
number=int(input("write a number"))
lent=int(input("write a length"))
listofnumber=[]
for i in range (1,lent+1):
 listofnumber.append(number * i)
print(f"we have {number} and we want it with this lenght{len} the resulat is :{listofnumber}")