import { LightningElement } from 'lwc';

export default class TemplateLoopingObject extends LightningElement {
    // students=[
    //     {
    //         RollNO:1,
    //         Name:"Jack",
    //         Average:90
    //     },
    //     {
    //         RollNO:2,
    //         Name:"Jill",
    //         Average:99
    //     },
    //     {RollNO:3,
    //         Name:"Ritu",
    //         Average:80
    //     }
    // ];
        students=[
        {
            
            Name:"Jack",
            Average:90
        },
        {
            
            Name:"Jill",
            Average:99
        },
        
           {
            Name:"Ritu",
            Average:80
           }
        
    ];
}