const apiKey="hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
const query='funny'
const limit=20
async function fitchGifS() {
    const url =`https://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&api_key=${apiKey}`
    try {
        const reponse=await fetch(url)
        if(!reponse.ok){
                throw new Error(`http error status${reponse.status}`);
                
        }
        const data=await reponse.json()
        const gifs = data.data;
        const randomIndex = Math.floor(Math.random() * gifs.length);
        const gifUrl = gifs[randomIndex].images.original.url;
const image=document.createElement('img')
image.src=gifUrl
image.alt="random giphy"
document.getElementById("gifContainer").appendChild(image)
  
        
    } catch (error) {
        console.log("error fetchin gif",error);
        
        
    }
    
}
fitchGifS()