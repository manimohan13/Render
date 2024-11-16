import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    handleClose(event)
    {
       console.log("Parent Called"); 
    }
    handleDivClose(event)
    {
        console.log("DIV Called")
        event.stopPropagation();//to stop the propogation
    }
}