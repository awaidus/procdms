var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shipmentScehma = new Schema({
    
    docRecvDate: {type: Date},
    originalDocRecvDate: {type: Date},
    shipMode: {type: String},
    consignmentNature: {type: String},
    paymentNo: {type: String},
    project: {type: String},
    budgetHead: {type: String},
    billNoLabel: {type: String},
    billNo: {type: String},
    billNo2Label: {type: String},
    billNo2: {type: String},
    billDate: {type: Date},
    loadingPort: {type: String},
    departurePort: {type: String},
    arrivedAt: {type: String},
    invoiceNo: {type: String},
    invoiceDate: {type: Date},
    shipmentConsignee: {type: String}
},
    {
        timestamps: true
    }
);

var Shipment = mongoose.model('Shipment', shipmentScehma);

module.exports = {
    Shipment: Shipment
};