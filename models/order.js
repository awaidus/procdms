var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderScehma = new Schema({
    orderType: String,
    coverCompanyCode: String,
    orderNo: String,
    orderDate: Date,
    subjectStores: String,
    localSupplierId: Number,
    laRepId: Number,
    foreignSupplierId: Number,
    deliveryPort: Number,
    receivePort: String,
    shipMode: String,
    payTerm: String,
    deliveryPeriod: String,
    partShip: Boolean,
    transShip: Boolean,
    currency: String,
    exWorksValue: Number,    
    fobCharges: Number,
    freightCharges: Number,
    freightType: String,    
    rsRate: Number,
    laOrderNo: String,
    laOderDate: String,
    addDocReq: String,    
    laRefNo: String,
    laRefDate: Date,
    piNo: String,
    piDate: Date,
    
    project: String,
    headProject: String,
    indenter: String,
    indentNo: String,
    indentDate: Date,
    budgetHead: String,

    
    created: { type: Date, default: Date.now }
});

var Order = mongoose.model('Order', orderScehma);

module.exports = {
    Order : Order 
};

    
    
    

   