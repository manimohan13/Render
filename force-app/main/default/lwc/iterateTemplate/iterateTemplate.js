import { LightningElement } from 'lwc';

export default class IterateTemplate extends LightningElement {
    employees=[
        {
            Id:1,
            Name:"Jack",
            Salary:1000
        },
        {
            Id:2,
            Name:"Ram",
            Salary:1500
        },
        {
            Id:3,
            Name:"Anna",
            Salary:3000
        },
        {
            Id:4,
            Name:"Elsa",
            Salary:5000
        },
        {
            Id:5,
            Name:"Rita",
            Salary:7000
        }
    ];
}