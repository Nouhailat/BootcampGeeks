// ex1
const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
     {
      name: 'Cuty',
      age: 5,
      type: 'rabbit'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Rex',
      age: 10,
      type: 'dog'
    },
  ];
  let sum_Of_human_Year=0
  for (let i = 0; i < data.length; i++) {
   if (data[i].type==='dog') {
    sum_Of_human_Year+=data[i].age*7
    
   }
    
  }
  console.log(sum_Of_human_Year);
// ex2
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '.trim()
console.log(userEmail3);
// ex3
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
const userObjet={}
users.forEach(user=>{
    userObjet[`${user.firstName} ${user.lastName}`]=user.role
})
console.log(userObjet);
