var Payment = require('../models/payment').Payment;
var Order = require('../models/order').Order;

// ==================================================================================
exports.create = function (orderId, payment, next) {
   
   //1. setting new payment data
    var newPayment = new Payment(payment);
    // 2.  then save it
    newPayment.save(function (err, newId) {

        if (err) {
            return next(err);
        }
        //3. then push into order.payments
        Order.findByIdAndUpdate(orderId, { $push: { payments: newPayment } }, {safe: true, upsert: true}, function (err, data) {
            if (err) {
                console.error(err);
                return next(err);
            }
        });

        next(null);
    });
};

// ==================================================================================
exports.update = function (payment, next) {

    var id = payment._id;
    Payment.findByIdAndUpdate(id, { $set: payment }, function (err, data) {
        if (err) {
            return next(err);
        }
        next(null);
    })

};
// ==================================================================================
exports.delete = function (payment, next) {

    var id = payment._id;
    Payment.findByIdAndRemove(id, function (err, data) {
        if (err) {
            return next(err);
        }
        next(null);
    });
};

// ==================================================================================
exports.get = function (id, next) {

    if (id) {
        Payment
            .findById(id)
            .exec(function (err, data) {
                next(err, data);
            });
    }
    else {
        Payment
            .find()
            .exec(function (err, data) {
                next(err, data);
            });
    }

};
// ==================================================================================
