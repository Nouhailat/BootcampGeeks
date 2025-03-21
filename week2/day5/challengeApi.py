from fastapi import FastAPI,HTTPException
from pydantic import BaseModel
from menu_manager import MenuManager
from menu_item import Menu_items

app = FastAPI()
class MenuItem(BaseModel):
    # id: int
    name: str
    price: float
@app.get("/menu")
def get_menu():
    items=MenuManager.all_items()
    return [{"name":item.name,"price":item.price} for item in items]
@app.get("/menu/{item_name}")
def get_menu_item(item_name: str):
    item = MenuManager.get_menu(item_name)
    if item:
        return {"name": item.name, "price": item.price}
@app.post("/menu")
def add_menu_item(item: MenuItem):
    new_item = Menu_items(item.name, item.price)
    new_item.save()
    return {"message": "item added with succes"}
@app.put("/menu/{item_name}")
def update_menu_item(item_name: str, item: MenuItem):
    existing_item = Menu_items.get_menu(item_name)
    if existing_item:
        existing_item.update(item.name, item.price)
        return {"message": "item  was updated "}
    raise HTTPException(status_code=404, detail="item not exist")
@app.delete("/menu/{item_name}")
def delete_menu_item(item_name: str):
    item = MenuManager.get_menu(item_name)
    if item:
        item.delete()
        return {"message": "Item  has been deleted sucessfully"}
    raise HTTPException(status_code=404, detail="item not exesist")

    
