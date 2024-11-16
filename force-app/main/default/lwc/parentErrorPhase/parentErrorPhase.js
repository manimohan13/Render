import { LightningElement } from 'lwc';

export default class ParentErrorPhase extends LightningElement {
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

       errorCallback(error,stack)
    {
        console.log("Parent Handles the Child Error")
        alert(error);
    }

}