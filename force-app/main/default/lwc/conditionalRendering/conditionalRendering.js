import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isShoppingChosen=false;
    isReadingChosen=false;
    handleShoppingChange(event)
    {
        this.isShoppingChosen=event.target.checked; //it will be a 2 values either true or false
        this.isReadingChosen=false;
        console.log(`shopping: ${this.isShoppingChosen}`);
        //this.template.querySelector(".readCheck").checked=false;
        this.refs.readCheck.checked=false;
    }


handleReadingChange(event)
{
    this.isReadingChosen=event.target.checked; //it will be a 2 values either true or false
    this.isShoppingChosen=false;
    //this.template.querySelector(".shopCheck").checked=false;
    this.refs.shopCheck.checked=false;
    // console.log(`Reading: ${this.isRedingChosen}`);

}
}