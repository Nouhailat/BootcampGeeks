import psycopg2
import requests
import random
def cnx():
    try:
        return psycopg2.connect(
            dbname="countryDb",
            user="postgres",
            password="nouh@",
            host="localhost",
            port="5432"
        )
        print("cnx hass been done")
        return cnx
    except Exception as e:
        print("cnx failed",)
        return None
def get_country():
    URL = "https://restcountries.com/v3.1/all"
    response = requests.get(URL)
    
    if response.status_code == 200:
        return response.json()
    else:
        print("Erreur lors de la récupération des pays")
        return []

        
def insertCountry(countries):
    connexion=cnx()
    if cnx is None:
        print("cnx failed")
        return 
    # cnx = cnx()
    cur = connexion.cursor()
    for country in countries:
        name=country.get("name",{}).get("common","inconnu")
        capital=country.get("capital",["inconnu"])[0]
        flag=country.get("flags",{}).get("png","no flag")
        population=country.get("population",0)
        subregion = country.get("subregion", "inconnu")
        cur.execute("""INSERT INTO countries (name, capital, flag, population, subregion) VALUES
                    (%s, %s, %s, %s, %s)""", (name, capital,flag, population, subregion))
        print("country has been add in db ")
        connexion.commit()
    cur.close()
    connexion.close()
            
        
def main():
    print(" take country ")
    countries = get_country()
    print("country has been recupere")
    if countries:
         selected_country=random.sample(countries,10)
         print("Pays sélectionnés:", [c.get("name", {}).get("common", "Inconnu") for c in selected_country])
         insertCountry(selected_country)
         
if __name__=="__main__":
        print("script are load ")
        
        main()
        print("end of script ")
            
         
   
    
        
        
        
        
    

