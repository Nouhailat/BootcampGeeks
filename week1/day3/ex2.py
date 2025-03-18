class Dog:
    def __init__(self,dog_name,dog_height=0):
        self.name=dog_name
        self.height=dog_height

    def bark(self):
         print(f"{self.name} goes woof!")

    # dog1=Dog("rucky")

    def jump (self):
         print(f"{self.name} jums {self.height*2} cm high")
dog1=Dog("rucky",60)
dog1.jump()

#davids_dog={
 #  "dog_name":"Rex",
  #  "height" :50
#}
davids_dog=Dog("Reex",50)
print(f"davids dog name is {davids_dog.name}and its hieght {davids_dog.height} cm")
davids_dog.bark()
davids_dog.jump()
sarahs_dog=Dog("Teacup",20)
print(f"sarahs_dog name is {sarahs_dog.name} and his height {sarahs_dog.height}")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
   print(f"the bigger dog is {davids_dog.name}")
else:
   print(f"the bigger dog is {sarahs_dog.name}")

