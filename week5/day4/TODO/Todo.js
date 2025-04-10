class Todolist {
    constructor(){
        this.tasks=[]
    }
    addTask(task){
        this.tasks.push({descrption:task,completed:false})
        console.log(`tach ajoute${task}`);
        
    }
markDone(i){
    if (i<=0 &&i<this.tasks.length) {
        this.tasks[i].completed=true
        console.log(`task  ${this.tasks[i].descrption}was done`);
        
        
    }else{
        console.log('task not found');
        
    }
}
listTask(){
    console.log('list tasks');
    this.tasks.forEach((task,i)=>{
        const status=task.completed? " DONE✅" : "NOT YET❌"
    console.log(`${i+1}.${task.descrption}[${status}]`);
    
    })
    
}
}
export {Todolist}