import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    //1. Pass a string data to the child
    datatoChild="Hi Child !!! Im Your Parent";
//2.Array
courses=["Apex","LWC","AURA","VF PAGES"];
//3.Object simple object(single Object)
// car={
//     brandName:"Honda",
//     yearFounded:1946
//}

//4.Object Array
car=[
    {
        Id:1,
        brandName:"Honda",
        yearFounded:1946
    },
    {
        Id:2,
        brandName:"FORD",
        yearFounded:1906
    },
    {
        Id:3,
        brandName:"TATA Motors",
        yearFounded:1945
    },
]

}
