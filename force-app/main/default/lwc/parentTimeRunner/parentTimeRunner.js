import { LightningElement } from 'lwc';

export default class ParentTimeRunner extends LightningElement {
    handlStartClick(event)
    {
//old method - QUERY SELECTOR
//this.template.querySelector('c-child-progess-demo').start();
//lwc:ref
this.refs.child.start();
    }
    handlStopClick(event)
    {
        this.refs.child.stop();
    }
    handlResetClick(event)
    {
        this.refs.child.reset();
    }
}
