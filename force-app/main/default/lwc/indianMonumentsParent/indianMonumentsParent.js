import { LightningElement,track } from 'lwc';

export default class IndianMonumentsParent extends LightningElement {
    showbutton;
    @track selectedMonuments=[];
    HandleChange(event)
    {
        this.showbutton=true;
    }
    handleCloseChild(event)
    {
        this.showbutton=false;
        this.selectedMonuments=event.detail;
        
        //console.log('parent:' +selectedMonuments.lengths);
       // console.log( JSON.stringify(this.selectedMonuments));
       //this.selectedMonuments.forEach(item=>console.log(item));
    }
   

}