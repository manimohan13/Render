import { LightningElement,track } from 'lwc';

export default class ChildComponentDemo extends LightningElement {
    name;
    //handleClick(event)//close button
    //{
        //create a custom event

        //passing String
        //const myEvent=new CustomEvent('close',{detail:"Im Child!! Im Closed"});//close is my custom event
        //this.dispatchEvent(myEvent);
        
        //passing Array
        //const myEvent=new CustomEvent('close',{detail:[100,200,300,400]});
        //this.dispatchEvent(myEvent);

        //create a custom Event
        //const myEvent=new CustomEvent('close',{detail:{name:"Sachin",team:"India"}});
        //this.dispatchEvent(myEvent);
    //}
   
//     course="LWC";
//     courses=["Apex","Aura","LWC"];
//     @track playerObj={
//         name:"Sachin",
//         team:"India"
//     }

//     @track players=[
//         {
//         name:"Sachin",
//         team:"India"
//     },
//     {
//         name:"dhoni",
//         team:"India"
//     }
// ];
    handleClick(event)//close button
    {
        //create a Custom Event
        
        const myEvent=new CustomEvent('close',{detail:this.name});
        this.dispatchEvent(myEvent);
        //create a Custom Event
        //1.String
        //const myEvent=new CustomEvent('close',{detail:this.course});
    
        //2.Array
        //const myEvent=new CustomEvent('close',{detail:this.courses});
    
         //3.Object
         //const myEvent=new CustomEvent('close',{detail:this.playerObj});
    
        //4.Object Array
        //const myEvent=new CustomEvent('close',{detail:this.players});
    }

    handleNameChange(event)
    {
       this.name=event.target.value;
       
}
}