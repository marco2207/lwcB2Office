import { LightningElement, wire, track } from 'lwc';
import getLocationStatus from '@salesforce/apex/LocationStatusController.getLocationStatus';

const columns = [ 
    { label: 'Office Name', fieldName: 'Name' }, 
    { label: 'City', fieldName: 'City__c' }, 
    { label: 'Status', fieldName: 'Status__c' }
];

export default class LocationStatus extends LightningElement {
    @track locationStatus;
    @track error; 
    @track columns = columns;

    @wire(getLocationStatus) 
    wiredLocation({error, data}) {
        if (data) {
            this.locationStatus = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.locationStatus = undefined;
        }
    }
}