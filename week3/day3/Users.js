let containerDIV=document.getElementById("container");
    console.log(containerDIV)
    let listUL=document.querySelectorAll(".list");
    // <!-- let peten=listUL.children[1] -->
    let peten=listUL[1].children[1];
    peten.innerText="Richard"
    console.log(peten)
    let deletesecond=document.querySelectorAll(".list")[1];
    let secondul=deletesecond.children[1];
    deletesecond.removeChild(secondul)
    console.log(deletesecond)
    let lists=document.querySelectorAll(".list")
    lists.forEach(lists=>{
        lists.children[0].innerText="Nouhiala"

    })
    lists.forEach(list=> {
        list.classList.add("student_list");
    });
    lists[0].classList.add("university", "attendance")
containerDIV.style.backgroundColor="lightblue"
containerDIV.style.padding="10px"
let listIL=document.querySelectorAll("li")
listIL.forEach(li=>{
    if(li.textContent.trim()==="Dan"){
        li.style.display="none"
    }
})
listIL.forEach(li=>{
    if(li.textContent.trim()==="Richard"){
        li.style.padding="5px"
        li.style.border=" 2px solid black"
        

        }
})
if(containerDIV.style.backgroundColor==="lightblue")
{
    let Users=document.querySelectorAll(".list li")
    let user1=Users[0].textContent.trim()
    let user2=Users[1].textContent.trim()
    alert( ` hello ${user1} and ${user2}`)
}