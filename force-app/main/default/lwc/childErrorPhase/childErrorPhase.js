import { LightningElement } from 'lwc';

export default class ChildErrorPhase extends LightningElement {
    age;
    constructor()
    {
        super();
        console.log("Child constructor Called");

    }
    
    connectedCallback()
    {
        console.log("Child connected Callback Invoked");
       this.timer=0;
       this.startTimer();
    }
    startTimer()
    {
        this.timerId=setInterval(()=>{
            this.timer++;
        },1000)
    }

    renderedCallback()
     {
       
        console.log("Child renderCallback invoked");

       }

       disconnectedCallback()
       {
        console.log("CHILD disconnected Callback Invoked");

       }
    
    handleAgeChange(event)
    {
        this.age=event.target.value;
    }

    handleChildClick(event)
    {
        if(this.age<18)
            throw new Error("Invalid Age!! Give Age > 18"); //throw - kew word, new - operator, Error - constructor
    }
    
    

}