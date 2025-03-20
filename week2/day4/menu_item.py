import psycopg2
class Menu_items:
    def __init__(self, name, price):
        self.name = name
        self.price=price
    def save(self):
        cnx=psycopg2.connect(
            dbname="restaurant",
            user="postgres",
            password="nouh@",
            host="localhost",
            port="5432"
            
        )
        cur = cnx.cursor()
        cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)",(self.name, self.price))
        cnx.commit()
        cur.close()
        cnx.close()
        print(f"item'{self.name}' add with succes") 
    def delete(self):
        cnx=psycopg2.connect(
            dbname="restaurant",
            user="postgres",
            password="nouh@",
            host="localhost",
            port="5432"
        )
        cur = cnx.cursor()
        cur.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
        cnx.commit()
        cur.close()
        cnx.close()
        print(f"item'{self.name}' delete with succes")
    def update(self,new_name=None,new_price=None):
        cnx=psycopg2.connect(
        dbname="restaurant",
        user="postgres",
        password="nouh@",
        host="localhost",
        port="5432"
                )     
        cur = cnx.cursor()
        if new_name is not None and new_price is not None:
            cur.execute("UPDATE Menu_Items SET item_name = %s ,  item_price =%s  WHERE item_name = %s", (new_name, new_price,self.name))
            self.name, self.price = new_name, new_price
        elif new_name:
                cur.execute("UPDATE Menu_Items SET item_name = %s WHERE item_name = %s", (new_name,self.name))
                self.name = new_name
        elif new_price is not None:
                cur.execute("UPDATE Menu_Items SET item_price = %s WHERE item_name = %s", (new_price,self.name))
                self.price=new_price
                
        cnx.commit()
        cur.close()
        cnx.close()
        print(f"item'{self.name}' update with succes")
# item=Menu_items("chicken crusty",38)
item=Menu_items("potaetos",38)
# item=Menu_items("pizza four seasso",50)
item2=Menu_items("TACOS",37)
item.save()