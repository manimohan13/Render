import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    handleClick(event)
    {
        this.dispatchEvent(new CustomEvent('close',{bubbles:true,composed:true}));
    }
}