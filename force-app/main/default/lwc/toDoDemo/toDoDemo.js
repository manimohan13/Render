import { LightningElement, track} from 'lwc';

export default class ToDoDemo extends LightningElement {
    //1.Create a Array Property
    //2.captired input from text box this.newTask
    //3.object Array Form
    @track toDoList=[];//empty array 1.string array["Yoga"] 2. Object Array[{taskId:1, taskName:"yoga"}]
    newTask;
    
    handleTaskChange(event)
    {
    this.newTask=event.target.value;

    }
    handleAddClick(event){
        //1.toDoList size-->task generate
        let taskId;
        taskId=this.toDoList.length;
        console.log(taskId);
        taskId++;
        //object formation
        let newtaskObj;
        newtaskObj={
            taskId:taskId,
            taskName:this.newTask
        }
        console.log(JSON.stringify(newtaskObj));
        //add to the TODO list
        //Array Methods
        //spread Operator
        this.toDoList=[...this.toDoList,newtaskObj];
        console.log(JSON.stringify(this.toDoList));
        this.newTask=" ";
    }

    get isToDoListAvl()
        {
            return this.toDoList.length>0;
        }
        handleRemoveTask(event)
        {
           //console.log(`iconId ${event.target.name}`);
           let iconId;
           iconId=event.target.name;
           //Array Method
           //filter--> it filters the array and creates a new array(To Do List) with the given Criteria
            this.toDoList=this.toDoList.filter(curTask=>curTask.taskId!==iconId);
        }
    
}