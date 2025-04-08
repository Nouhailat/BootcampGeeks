const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
fetch(apiUrl)
.then(response=>{
    if (!response.ok) {
        throw new Error(`http error${response.status}`)
        
    }
    return response.json()
})
.then(data=>{
    console.log("giphyy",data);
    
})
.catch(error=>{
    console.log("error from fetching giphy",error);
    
})
// exercice2
const apiKey="hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const query="sun"
const limit=10
const offset=2
const rating='g'
const apiUrl2=`https://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&api_key=${apiKey}`;
fetch(apiUrl2)
.then(reponse=>{
    if(!reponse.ok){
        throw new Error(`http errot statue ${reponse.status}`)
    }
    return reponse.json()
})
.then(data=>{
    console.log('gifs',data);
    
})
.catch(error=>{
    console.log("erreur catch ",error);
    
})
// exercice3
async function fetchStartship() {
    const url="ttps://www.swapi.tech/api/starships/9/"
    try{
        const response=await fetch(url)
        if (!response.ok) {
            throw new Error(`http error staetus${response.status}`)
            
        }
        const data=await response.json()
        console.log(data.result);
        
    }
    catch(error){
        console.log("error fetching star data",error);
        
    }

    

}
fetchStartship()
// exercice4 
// puisque hn aandna fun avec promise li hta kadoz 2 sec 3ad ktban frah fconsol ayban lina calling 3ad moraha resolve