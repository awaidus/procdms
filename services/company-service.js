var Company = require('../models/company').Company;


exports.create = function (company, next) {
    
    var newCompany = new Company({

        companyType: company.companyType,
        companyCode: company.companyCode,
        companyName: company.companyName,
        address: company.address,
        cityCountry: company.cityCountry,
        fax: company.fax,
        phone: company.phone,
        email: company.email,
        contactPerson: company.contactPerson,
        bankDetails: company.bankDetails
    });

    newCompany.save(function (err) {
        if (err) {
            return next(err);
        }
        next(null);
    });
};


exports.update = function (company, next) {
    
    var id = company._id;
    
    Company.findById(id, function (err, data) {
        if (err) {
            return next(err);
        }
        data.companyType = company.companyType;
        data.companyCode = company.companyCode;
        data.companyName = company.companyName;
        data.address = company.address;
        data.cityCountry = company.cityCountry;
        data.fax = company.fax;
        data.phone = company.phone;
        data.email = company.email;
        data.contactPerson = company.contactPerson;
        data.bankDetails = company.companyBankDetail;
        data.save();

        next(null);
    });

};

exports.get = function (id, next) {

    if (id) {
        Company.findById(id, function (err, data) {
            next(err, data);
        });
    }
    else {
        Company.find(function (err, data) {
            next(err, data);
        });
    }

}