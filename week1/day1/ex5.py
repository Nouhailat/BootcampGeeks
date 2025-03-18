myFavNumbers={
    12 ,18,17
}
myFavNumbers.add(23)
myFavNumbers.add(24)
myFavNumbers.remove(max(myFavNumbers))

partnerfavnumbers={
    17,11,25
}
ourfavnumbers=myFavNumbers.union(partnerfavnumbers)
print("my fav numbers is",myFavNumbers)
print("partner fav numbers is",partnerfavnumbers)
print("our fav numbers is",ourfavnumbers)