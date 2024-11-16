import { LightningElement } from 'lwc';

export default class ParentComponentDemo extends LightningElement {
    showChild;
    name;
    handleClick(event)
    {
       this.showChild=true; 
    }
    handleCloseChild(event)
    {
        this.showChild=false;
        //1.Access the string
        //console.log(event.detail);

        //2.Access the Array 1. user index or 2. loop
        //console.log(event.detail[0]);
        //let childArray=event.detail;
        //loop
        //childArray.forEach(item=>console.log(item));
        //if We want to change or update the child Array data we go with spread operator
        //let childArray=[...event.detail];//shallow copy
        //loop
        //childArray.forEach(item=>console.log(item));
    
        //3. Access the Object
        //let childObj=event.detail;//display only this is enough
        // let childObj=[...event.detail];
        // console.log(childObj.name);
        // console.log(childObj.team);
        this.name=event.detail;
    
    }

}