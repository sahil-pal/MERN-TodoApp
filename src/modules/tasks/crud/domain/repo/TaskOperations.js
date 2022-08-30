export const TaskOperations = {
    allTasks : [],
    add(task){
        this.allTasks.push(task);
    },
    view(){
        return this.allTasks;
    }
}