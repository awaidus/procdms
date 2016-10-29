var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderScehma = new Schema({
    
    orderType: { type: String },
    coverCompanyCode: { type: String, ref: 'Company' },
    orderNo: { type: String },
    orderDate: { type: Date },
    subjectStores: { type: String },

    localSupplier: { type: Schema.Types.ObjectId, ref: 'Company' },
    laRep: { type: Schema.Types.ObjectId, ref: 'Company' },
    foreignSupplier: { type: Schema.Types.ObjectId, ref: 'Company' },

    deliveryPort: { type: String },
    receivePort: { type: String },
    shipMode: { type: String },
    payTerm: { type: String },
    deliveryPeriod: { type: String },
    partShip: { type: Boolean },
    transShip: { type: Boolean },
    currency: { type: String },
    exWorksValue: { type: Number, default: 0.00 },
    fobCharges: { type: Number, default: 0.00 },
    freightCharges: { type: Number, default: 0.00 },
    freightType: { type: String },
    rsRate: { type: Number, default: 0.00 },
    laOrderNo: { type: String },
    laOderDate: { type: String },
    addDocReq: { type: String },
    laRefNo: { type: String },
    laRefDate: { type: Date },
    piNo: { type: String },
    piDate: { type: Date },

    project: { type: String },
    headProject: { type: String },
    indenter: { type: String },
    indentNo: { type: String },
    indentDate: { type: Date },
    budgetHead: { type: String },

    created: { type: Date, default: Date.now }
});

var Order = mongoose.model('Order', orderScehma);

module.exports = {
    Order: Order
};





