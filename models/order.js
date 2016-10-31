var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderScehma = new Schema({

    orderType: { type: String },
    orderNo: { type: String },
    orderDate: { type: Date },
    subjectStores: { type: String },


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

    //navigations
    coverCompany: { type: Schema.Types.ObjectId, ref: 'Company' },
    localSupplier: { type: Schema.Types.ObjectId, ref: 'Company' },
    laRep: { type: Schema.Types.ObjectId, ref: 'Company' },
    foreignSupplier: { type: Schema.Types.ObjectId, ref: 'Company' },
     
    payments: [{ type: Schema.Types.ObjectId, ref: 'Payment' }],
    shipments: [{ type: Schema.Types.ObjectId, ref: 'Shipment' }]
    
    //created: { type: Date, default: Date.now }
},
    {
        timestamps: true
    }
);

var Order = mongoose.model('Order', orderScehma);

module.exports = {
    Order: Order
};





