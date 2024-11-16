import { LightningElement } from 'lwc';

export default class MyCourse extends LightningElement {
    //Local Properties
    firstName="AJ";
    lastname="Skill";
    days=90;
    noOfWeeks=" ";
    course=["Admin","Apex","LWC","AURA"];
    QASLOT={
        Session:"8AM",
        Timing:"8:00",
        Duration:"1 Hour"
    }
    isSlotAvailable=true;
    isApexChosen=" ";
    //We dont want invoke(rendering) the get method
    //it will be automatically invoked 

    get fullName()
    {
        return this.firstName+" "+this.lastname;
    }

    get noOfCoursesChosen()
    {
        return this.course.length;
    }

    get ApexChosen() {
        // Check if 'Apex' is in the course array
        return this.course.includes("Apex") ? "Yes" : "No";
    }
    
    get noOfWeaks(){
        //Convert No of day to Weeks
        return Math.round(this.days/7);
    }

    //methods
    //2 ways to invoke a methods
    //1. Invoke through HTML
    //2. Invoke From the another method from the same class
//     getName(){
//         //business
//         //using this - we bring the properties inside the methods
//         console.log(this.firstName)
//     }
//     //
//     changeName(){
//         this.getName();
//     }
// }
handleChange(event) //event is an Object
{
this.firstName=event.target.value;
}
}
