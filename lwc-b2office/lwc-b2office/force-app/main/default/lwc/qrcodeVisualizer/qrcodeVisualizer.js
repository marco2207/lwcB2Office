import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import QRCODE_FIELD from '@salesforce/schema/Employee_Request__c.QR_Code_Text_URL__c';

const fields = [QRCODE_FIELD]

export default class QrcodeVisualizer extends LightningElement {

    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields })
    qrcodeimg;

    get qrcode() {
        return getFieldValue(this.qrcodeimg.data, QRCODE_FIELD);
    }
}