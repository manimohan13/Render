import { LightningElement } from 'lwc';

export default class ParentMountPhase extends LightningElement {
    value;
    hasRendered=true;
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
       if(this.hasRendered)
       {
        console.log("Parent renderCallback invoked");
        this.hasRendered=false;
       console.log(this.innerText);//targetting the template tags
       }
       
     }
    handleChange(event)
    {
        this.value=event.target.value;
    }

}