def create_letter_index_dict(word):
    letterDict = {}
    
    for index, letter in enumerate(word):
        if letter in letterDict:
            letterDict[letter].append(index)
        else:
            letterDict[letter] = [index]
    
    return letterDict

word = input("Enter a word: ").strip()

r= create_letter_index_dict(word)


print(r)
