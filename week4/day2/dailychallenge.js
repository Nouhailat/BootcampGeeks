const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
   const usernames=[]
   gameInfo.forEach((gameInfo) => {
    usernames.push(gameInfo.username+"!")
    });
    console.log(usernames)

    const winners=[]
    gameInfo.forEach((gameInfo) => {
        if(gameInfo.score>(5)){
            winners.push(gameInfo.username+"!")
            }
            });
    console.log(winners);

 const Sum_SCored=gameInfo.reduce((total,player)=>total+player.score,0) 
 console.log(Sum_SCored)

