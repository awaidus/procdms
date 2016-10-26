var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var companySchema = new Schema({
    
    companyType: { type: String },
    companyCode: { type: String },
    companyName: { type: String },
    companyAddress: { type: String },
    companyCityCountry: { type: String },
    companyFax: { type: String },
    companyPhone: { type: String },
    companyEmail: { type: String },
    companyContactPerson: { type: String },
    companyBankDetails: { type: String },
        
    created: { type: Date, default: Date.now }
});

var Company = mongoose.model('Company', companySchema);

module.exports = {
    Company: Company
};





