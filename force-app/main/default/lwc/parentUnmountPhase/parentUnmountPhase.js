import { LightningElement } from 'lwc';

export default class ParentUnmountPhase extends LightningElement {
    showChild;
    constructor()
    {
        super();
        console.log("Parent constructor Called");
        //console.log(this.PTag.innerText);//we cannot targetting the template tags
        // console.log("component Inserted into DOM Constructor Stage ?" , this.isConnected)
    }
    connectedCallback()
    {
        console.log("Parent connected Callback Invoked");
        //console.log(this.PTag.innerText);//we cannot targetting the template tags
        //console.log("component Inserted into DOM connectedCallBack Stage ?" , this.isConnected)
    }
    renderedCallback()
     {
       
        console.log("Parent renderCallback invoked");

       }
       
     
    handleChange(event)
    {
        this.value=event.target.value;
    }

    handleShowClick(event)
    {
        this.showChild=true;
    }

    handleClose(event)
    {
        this.showChild=false;
    }
}