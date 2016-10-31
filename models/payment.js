var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paymentSchema = new Schema({

    releaseDate: { type: String },
    releaseAmount: { type: Number, default: 0.00 },
    releaseAmountInWords: { type: String },
    project: { type: String },
    budgetHead: { type: String },
    fundsConfRef: { type: String },
    fundsAllocation: { type: String },
    shipmentPort: { type: String },
    paymentMode: { type: String },
    importPermitNo: { type: String },
    importPermitDate: { type: String },
    importPermitValue: { type: Number, default: 0.00 },
    ipValueInWords: { type: String },
    subjectStores: { type: String },
    appSubDate: { type: Date },
    bankBranch: { type: String },
    lastDateShipment: { type: Date },
    expiryDateShipment: { type: Date },
    
    paymentNo: { type: String },
    paymentDate: { type: Date },
    lcExpiryDate: { type: Date },
    lcAmendmentDate: { type: Date }
},
    {
        timestamps: true
    }
);

var Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment: Payment
};





