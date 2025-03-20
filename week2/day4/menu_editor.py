from menu_manager import MenuManager
from menu_item import Menu_items
def show_user_menu():
    while True:
        print(" Menu of resto")
        print("V:View an Item")
        print("A: Add an item")
        print("D: Delete an item")
        print("U: update an item")
        print("S: Show menu")
        
        userChoise=input("choose option").upper().strip()
        if userChoise=="V":
            view_item()
        elif userChoise=="A":
            add_item()
        elif userChoise=="D":
            delete_item()
        elif userChoise=="U":
            update_item()
        elif userChoise=="S":
            show_menu()
        else:
            print("your choice not existe")
def add_item():
    name = input("Enter the name of the item: ")
    price = input("Enter the price of the item: ")
    new_item=Menu_items(name,price)
    # MenuManager.add_item(new_item)
    new_item.save()
    print("item added")
def view_item():
    name=input("put name of item:").strip()
    item=MenuManager.get_menu(name)
    if item:
        print(f"{item.name} 'costs',{item.price}")
    else:
        print("item not found")
def delete_item():
    name=input("put name of item:").strip()
    item=MenuManager.get_menu(name)
    if item:
        item.delete()
        print(f"{name}item deleted")
    else:
        print("item not found")
def update_item():
    name=input("put name of item:").strip()
    item=MenuManager.get_menu(name)
    if item:
        new_name=input("put the new name(press enter to keep same):").strip()
        new_price=input("put the new price(press enter to keep same):").strip()
        new_name=new_name if new_name else item.name
        new_price=int (new_price) if new_price else item.price
        item.update(new_name,new_price)
        # item.price=input("put new price:").strip()
        # item.save()
        print(f"{name} Ditem updated")
    else:
        print("item not found")
def show_menu():
    print("Shoow all menu items")
    items=MenuManager.all_items()
    if items:
        for item in MenuManager.all_items():
            print(f"{item.name} 'costs',{item.price}")
    else:
        print("no items in menu")
if __name__ == "__main__":
    show_user_menu()
        
        
    
    
    
    
        
            
        
        
        
        
    
    
