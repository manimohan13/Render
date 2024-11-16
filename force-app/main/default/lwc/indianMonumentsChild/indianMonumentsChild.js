import { LightningElement, track } from 'lwc';

export default class IndianMonumentsChild extends LightningElement {
  @track selectedMonuments=[];
  
    indianMonuments=[
    {
        name:"Qutubminar",
        imgSrc:"https://www.mapsofindia.com/ci-moi-images/my-india/qutub-minar-delhi.jpg"
    },
    {
        name:"Tajmahal",
        imgSrc:"https://i0.wp.com/unciatrails.com/wp-content/uploads/2020/07/Taj2-1.jpg?resize=960%2C636&ssl=1"
    },
    {
        name:"Meenakshi Temple",
        imgSrc:"https://upload.wikimedia.org/wikipedia/commons/d/d0/Golden_Lily_Pond_and_South_Gopuram_at_Meenakshi_Amman_Temple_%2C_Madurai.jpg"
    }
  ];
  handleCloseClick(event)
  {
    //create a custom event
    const myEvent=new CustomEvent('close',{detail:this.selectedMonuments});//close is my custom event
    this.dispatchEvent(myEvent);
  }
  handleCheckChange(event)
  {
    const newMonuments=event.target.label;
    //console.log(newMonuments);
    this.selectedMonuments.push(newMonuments);
    //console.log(JSON.stringify(this.selectedMonuments));
    //console.log('child: '+selectedMonuments.lengths);
  }
}