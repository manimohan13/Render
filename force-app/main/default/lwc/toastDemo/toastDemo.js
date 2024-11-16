import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ToastDemo extends LightningElement {
    label;

    handleClick(event)
    {
        this.label=event.target.label
        switch(this.label){
            case 'Success':
                this.showToast('Success','{0} Account Created SuccessFully {1}', success)
                break;
                case 'Warning':
                this.showToast('Warning','{0} The requested record is not accessable {1}', warning)
                break;
                case 'Error':
                this.showToast('Error','{0} Error Creating an account {1}', warning)
                break;
                case 'Info':
                this.showToast('Info','{0} The Org Maintance is due on 15/01/2025 {1}', warning)
                break;
                default:
                    break;

        }
    }

    showToast(title,message,variant)
    {
        this.dispatchEvent(new ShowToastEvent({
            title:title,
            message:message,
            variant:variant,
            messageData:[
                'Salesforce',
                {
                url:'https://www.salesforce.com/in/?ir=1',
                label:"Click Here"
             }

            ]
        })
    );
    }
}
    
    //handleSuccessClick(event)
    // {
    //     const myToast=new ShowToastEvent({
    //         title:"Success",
    //         message:"{2} Account Created Successfully {3}",
    //         variant:"success",
    //         mode:"pester",
    //         messageData:[
    //             'Salesforce',
    //             {
    //                 url:'https://www.salesforce.com/in/?ir=1',
    //                 label:"Click Here"
    //             },
    //             'Contact',
    //             {
    //                 url:'https://www.salesforce.com/in/?ir=1',
    //                 label:"Click Here"
    //             }
    //         ]

    //     })
    //     this.dispatchEvent(myToast);
    // }
    //     handleErrorClick(event)
    //     {
    //         const myToast=new ShowToastEvent({
    //             title:"Error",
    //             message:"Error Creating an account",
    //             variant:"error",
    //             mode:"sticky"
    //         })
    //         this.dispatchEvent(myToast);
    //     }
       
    // handleInfoClick(event)
    // {
    //     const myToast=new ShowToastEvent({
    //         title:"Information",
    //         message:"The Org Maintance is due on 15/01/2025",
    //         variant:"info"

    //     })
    //     this.dispatchEvent(myToast);
    // }

    // handleWarnClick(event)
    // {
    //     const myToast=new ShowToastEvent({
    //         title:"Warning",
    //         message:"The requested record is not accessable",
    //         variant:"warning"

    //     })
    //     this.dispatchEvent(myToast);
    // }
