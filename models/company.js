var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    
    companyType: { type: String },
    companyCode: { type: String },
    companyName: { type: String },
    address: { type: String },
    cityCountry: { type: String },
    fax: { type: String },
    phone: { type: String },
    email: { type: String },
    contactPerson: { type: String },
    bankDetails: { type: String },
        
    created: { type: Date, default: Date.now }
});

var Company = mongoose.model('Company', companySchema);

module.exports = {
    Company: Company
};





