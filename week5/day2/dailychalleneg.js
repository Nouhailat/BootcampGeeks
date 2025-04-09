const apiKey='hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
const form=document.getElementById('gifForm')
const input=document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');
form.addEventListener('submit',async function (event) {
    event.preventDefault()
    const query=input.value.trim()
    if (query==='') return
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}&rating=g`

    try {
    const response=await fetch(url)
    const result=await response.json()
    const gifUrl=result.data?.images?.downsized?.url
    if (gifUrl) {
        const img=document.createElement('img')
        img.src=gifUrl
        img.alt=query
        const giftCard=document.createElement('div')
        giftCard.className='gif-card'

        const deleteBtn=document.createElement('button')
        deleteBtn.textContent='DELETE'
        deleteBtn.onclick=()=>giftCard.remove()
        giftCard.appendChild(img)
        giftCard.appendChild(deleteBtn)
        gifContainer.appendChild(giftCard)
        
    } else {
        alert("no gif in this theme")
        
    }
    input.value=""
        
    } catch (error) {
        console.log('error in fetching data',error);
        alert("try again theres no gif ")
        
        
    }
    }

    
)
deleteAllBtn.addEventListener('click',()=>{
    gifContainer.innerHTML=""
})