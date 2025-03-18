import math
import turtle

class Circle:
    def __init__(self, radius):
        self.radius = radius
    
    @property
    def diameter(self):
        return self.radius * 2
    
    @property
    def area(self):
        return math.pi * (self.radius ** 2)
    
    def __str__(self):
        return f"Circle with radius: {self.radius}, diameter: {self.diameter}, area: {self.area:.2f}"
    
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        raise TypeError("Can only add another Circle")
    
    def __lt__(self, other):
        return self.radius < other.radius
    
    def __le__(self, other):
        return self.radius <= other.radius
    
    def __eq__(self, other):
        return self.radius == other.radius

def draw_circles(circles):
    turtle.speed(0)
    for circle in circles:
        turtle.penup()
        turtle.goto(0, -circle.radius)  
        turtle.pendown()
        turtle.circle(circle.radius)
    turtle.done()

if __name__ == "__main__":
    c1 = Circle(5)
    c2 = Circle(7)
    c3 = c1 + c2
    
    print(c1)
    print(c2)
    print(c3)
    
    circles = [c1, c2, c3, Circle(3), Circle(10)]
    circles.sort()
    print("Sorted Circles:", [str(c) for c in circles])
    
    draw_circles(circles)