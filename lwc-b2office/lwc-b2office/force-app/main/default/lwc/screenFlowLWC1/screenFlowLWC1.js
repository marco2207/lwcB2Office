import { LightningElement, wire, track } from 'lwc';
import getLocations from '@salesforce/apex/LocationStatusController.getLocationStatus';

let i=0;
export default class screenFlowLWC1 extends LightningElement {
    @track error;
    
    @track items = []; //this will hold key, value pair
    @track value = ''; //initialize combo box value
    @track isSelected = false; //Button

    @wire(getLocations)
    wiredLocations({ error, data }) {
        if (data) {
            //create array with elements which has been retrieved controller
            //here value will be Id and label of combobox will be Name
            for(i=0; i<data.length; i++)  {
                this.items = [...this.items ,{value: data[i].Name , label: data[i].Name} ];                                   
            }
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }

    get options() {
        return this.items
    }

    handleComboChange(event) {
        this.value = event.detail.value;
    }

    handleButtonClick() {
        this.isSelected = !this.isSelected;
    }

    
}