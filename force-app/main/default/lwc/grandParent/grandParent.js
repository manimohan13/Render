import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    handleClose(event)
    {
        console.log("Grand parent Called");
    }
}