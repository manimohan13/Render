import { LightningElement, track } from 'lwc';

export default class LeadRender extends LightningElement {
    @track leads = [];  // To store valid leads
    errorMessage = '';  // Validation error message
    showLeads = false;  // To display leads when the "Display" button is clicked
    noLeadsMessage = false;  // Display "No leads added yet" message

    handleChangeAdd() {
        const leadName = this.template.querySelector("lightning-input[data-id='leadName']").value;
        const leadSource = this.template.querySelector("lightning-input[data-id='leadSource']").value;
        const annualRevenue = this.template.querySelector("lightning-input[data-id='annualRevenue']").value;
        const email = this.template.querySelector("lightning-input[data-id='email']").value;

        // Validation: Ensure all fields are filled
        if (!leadName || !leadSource || !annualRevenue || !email) {
            this.errorMessage = 'Please fill out all fields before adding a lead.';
        } else {
            // Reset validation message
            this.errorMessage = '';

            // Create a new lead object
            const newLead = {
                leadName: leadName,
                leadSource: leadSource,
                annualRevenue: annualRevenue,
                email: email
            };

            // Add the new lead to the array
            this.leads = [...this.leads, newLead];
            console.log(JSON.stringify(this.leads));

            
        }
    }

    handleChangeClear() {
        this.template.querySelector("lightning-input[data-id='leadName']").value = '';
        this.template.querySelector("lightning-input[data-id='leadSource']").value = '';
        this.template.querySelector("lightning-input[data-id='annualRevenue']").value = '';
        this.template.querySelector("lightning-input[data-id='email']").value = '';
    }

    handleChangeDisplay() {
        if (this.leads.length > 0) {
            this.showLeads = true;
            this.noLeadsMessage = false;
        } else {
            this.showLeads = false;
            this.noLeadsMessage = true;
            this.errorMessage = '';  // Clear any error message when displaying "No leads added yet"
        }
    }
}
