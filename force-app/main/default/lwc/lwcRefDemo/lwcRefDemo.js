import { LightningElement } from 'lwc';

export default class LwcRefDemo extends LightningElement {
    age;
    name;

    handleNameChange(event)
    {
        this.name=event.target.value;
        this.refs.refAgeInput.required=true;// input box target --> required
    }
    handleAgeChange(event)
    {
        this.age=event.target.value;
    }
    handleEligibleClick(event)
    {
        if(this.age>18)
            {
                //this.template.querySelector(".");
               //innerText,innerHTML - we can use here because fo Ref
                //this.refs.refEligible.innerText="Eligible for DRIVING!!!"
                this.refs.refEligible.innerHTML="<p>Eligible for DRIVING!!!</p>"
                this.refs.refJoinBut.disabled=false;//enable
            }



            else
            {
                //this.refs.refEligible.innerText="NOT Eligible for DRIVING!!!"
                this.refs.refEligible.innerHTML="<p>NOT Eligible for DRIVING!!!</p>"
                this.refs.refJoinBut.disabled=true;//disable
            }
            handleJoinClick(event)
            {
                alert(`Welcome ${this.name} to JOIN our Driving School`);
            }
            this.handleEligibleClick(event)
            {
                //to test the Multiple Tags -use query selector All
                //console.log(this.refs.refTagP1.innertext);
                this.template.querySelectorAll(".refTagP1").forEach((item)=>console.log(item.innertext));
            }
    }
}