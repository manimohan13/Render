import { LightningElement, api } from 'lwc';

export default class ChildProgessDemo extends LightningElement {
    progress=0;
    intervalId;
    //local method
    //setInterval(()=>,1000 --> 1000ms=>1sec)
    //to invoke the Function From parent we have to change the method into public using @ api
   @api start()
    {
        this.intervalId=setInterval(()=>{
            //this.progress=this.progress+10;
            this.progress+=10;
        },1000)
        console.log("started");
    }

    @api stop()
    {
        clearInterval(this.intervalId);
    }

    @api reset()
    {
        this.progress=0;
    }

}