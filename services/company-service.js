var Company = require('../models/company').Company;


exports.create = function (company, next) {
    var newCompany = new Company({

        companyType: company.companyType,
        companyCode: company.companyCode,
        companyName: company.companyName,
        companyAddress: company.companyAddress,
        companyCityCountry: company.companyCityCountry,
        companyFax: company.companyFax,
        companyPhone: company.companyPhone,
        companyEmail: company.companyEmail,
        companyContactPerson: company.companyContactPerson,
        companyBankDetails: company.companyBankDetails
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
        data.companyAddress = company.companyAddress;
        data.companyCityCountry = company.companyCityCountry;
        data.companyFax = company.companyFax;
        data.companyPhone = company.companyPhone;
        data.companyEmail = company.companyEmail;
        data.companyContactPerson = company.companyContactPerson;
        data.companyBankDetails = company.companyBankDetail;
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