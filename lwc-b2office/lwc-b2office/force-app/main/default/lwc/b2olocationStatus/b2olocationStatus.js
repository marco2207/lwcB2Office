import { LightningElement, wire } from 'lwc';
import getLocationStatus from '@salesforce/apex/LocationStatusController.getLocationStatus';

export default class B2olocationStatus extends LightningElement {
    locationStatus;
    error;

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