import psycopg2
from menu_item import Menu_items
class MenuManager:
    @classmethod
    def get_menu(cls,name):
        try:
            cnx=psycopg2.connect(dbname="restaurant",
                                 user="postgres",
                                 host="localhost",
                                 password="nouh@",
                                port="5432"
                                  )
            cur = cnx.cursor()
            cur.execute(" SELECT item_name,item_price  FROM Menu_Items WHERE item_name=%s",(name,))
            rows = cur.fetchone()
            cur.close()
            cnx.close()
                    
            if rows:
                return Menu_items(rows[0],rows[1])
            else:
             return None
        except psycopg2.Error as e:
            print(f"Error: {e}")
    @classmethod
    def all_items(cls):
        try:
            cnx = psycopg2.connect(dbname="restaurant",
                                    user="postgres",
                                    host="localhost",
                                    password="nouh@",
                                    port="5432")
            cur=cnx.cursor()
            cur.execute("SELECT item_name,item_price FROM Menu_Items")
            rows=cur.fetchall()
            cur.close()
            cnx.close()
            return[Menu_items(row[0],row[1])for row in rows]
        except psycopg2.Error as e:
            print(f"Error: {e}")
            return []
                    
                     
        
