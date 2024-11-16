import { LightningElement } from 'lwc';

export default class ChildUnmountPhase extends LightningElement {
    timer;
    timerId;
    handleChildClick()
    {
        this.dispatchEvent(new CustomEvent('close'));
    }

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
       clearInterval(this.timerId);
    }

    

}