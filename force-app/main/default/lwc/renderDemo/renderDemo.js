import { LightningElement } from 'lwc';
import enrollmentTemplate from './enrollmentTemplate.html';
import alumniTemplate from './alumniTemplate.html';
import renderDemo from './renderDemo.html';//main component default template

export default class RenderDemo extends LightningElement {
chosenTemplate;
templateName;
   
render()
{
    return this.chosenTemplate==='New Enrollment'?enrollmentTemplate:
            this.chosenTemplate==='Alumni'?alumniTemplate:renderDemo;
}

handleClick(event)
{
    this.chosenTemplate=event.target.label;
    // if(this.chosenTemplate==='New Enrollment')
    // {
    //     this.templateName=enrollmentTemplate
    // }
    // else if(this.chosenTemplate==='Alumni')
    // {
    //     this.templateName=alumniTemplate;
    // }
}
}