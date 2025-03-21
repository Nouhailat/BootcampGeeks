from menu_manager import MenuManager


item = MenuManager.get_menu("chicken crusty")

if item:
    print(f"Item found: {item.name} costs {item.price} MAD.")
else:
    print("Item not found.")
items=MenuManager.all_items()
if items:
    for item in items:
        print(f" All Items : {item.name} costs {item.price} MAD.")
    else:
        print("No items found")
