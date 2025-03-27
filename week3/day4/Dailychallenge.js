document.getElementById("libform").addEventListener("submit", function(event){
    event.preventDefault()
    let noun = document.getElementById("noun").value;
            let adjective = document.getElementById("adjective").value;
            let person = document.getElementById("person").value;
            let verb = document.getElementById("verb").value;
            let place = document.getElementById("place").value;
           if (noun && adjective &&person && verb &&place){
            let story=person+ "went to"+place +"with a"+adjective+" "+noun+'to'+verb+'';
            document.getElementById("story").innerHTML=story;


           }else{
            alert("Please fill all the fields");
           }
           });
