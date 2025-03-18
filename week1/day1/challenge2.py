#CHALLENGE 2
wordInput=input("write a word")
result=""
for w in wordInput:
    if len(result) == 0 or w !=result[-1]:
        result+=w
print(f"the clean word is {result}")