import { LightningElement, track } from 'lwc';

export default class TemplateLooping extends LightningElement {
    //@track is used to if non primitive data types(array, object) values had any changes- dynamically it will be reactive
    //then only we can see the changes in UI
    @track course=["Admin","Apex","LWC","AURA"];
    newCourseName;
    handleCourseChange(event)
    {
        this.newCourseName=event.target.value;
        //console.log(this.newCourseName);
    }
    handleCourseClick(event)
    {
        this.course.push(this.newCourseName);
        console.log(JSON.stringify(this.course));
    }
    get isArray()//>0 true else 0 false
    {
      return this.course.length>0;
    }
}