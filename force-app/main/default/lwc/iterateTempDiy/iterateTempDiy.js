import { LightningElement } from 'lwc';

export default class IterateTempDiy extends LightningElement {
    lwcConcepts = [
        {
            Id: 1,
            Topics: 'Reactivity',
            Concepts: '@track'
        },
        {
            Id: 2,
            Topics: 'Parent-Child Communication',
            Concepts: '@api'
        },
        {
            Id: 3,
            Topics: 'Child-Parent Communication',
            Concepts: 'custom dispatchEvent'
        },
        {
            Id: 4,
            Topics: 'Lifecycle Hooks',
            Concepts: 'Constructor, connectedCallback, renderedCallback, disconnectedCallback, errorCallback'
        },
        {
            Id: 5,
            Topics: 'Lightning Data Service (LDS)',
            Concepts: '@wire'
        }
    ];
}
