var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paymentSchema = new Schema({
        
    orderId : {type: String},
    releaseDate : {type: String},
    releaseAmount : {type: Number, default: 0.00},
    releaseAmountInWords : {type: String},
    project : {type: String},
    budgedHead : {type: String},
    fundsConfRef : {type: String},
    fundsAllocation : {type: String},
    shipmentPort : {type: String},
    paymentMode : {type: String},
    importPermitNo : {type: String},
    importPermitDate : {type: String},
    importPermitValue : {type: Number, default: 0.00},
    ipValueInWords : {type: String},
    subjectStores : {type: String},
    appSubDate : {type: String},
    bankBranch : {type: String},
    lastDateShipment : {type: String},
    expiryDateShipment : {type: String},
    coverCompany : {type: String},
    localSupplier : {type: String},
    foreignSupplier : {type: String},
    paymentNo : {type: String},
    paymentDate : {type: String},
    lcExpiryDate : {type: String},
    lcAmendmentDate : {type: String}

    created: { type: Date, default: Date.now }
});

var Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment : Payment 
};

    
    
    

   