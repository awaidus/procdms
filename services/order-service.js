var Order = require('../models/order').Order;

exports.create = function (order, next) {
    var newOrder = new Order({
        orderType: order.orderType,
        coverCompanyCode: order.coverCompanyCode,
        orderNo: order.orderNo,
        orderDate: order.orderDate,
        subjectStores: order.subjectStores,
        localSupplier: order.localSupplier._id,
        laRep: order.laRep._id,
        foreignSupplier: order.foreignSupplier._id,
        deliveryPort: order.deliveryPort,
        receivePort: order.receivePort,
        shipMode: order.shipMode,
        payTerm: order.payTerm,
        deliveryPeriod: order.deliveryPeriod,
        partShip: order.partShip,
        transShip: order.transShip,
        currency: order.currency,
        exWorksValue: order.exWorksValue,
        fobCharges: order.fobCharges,
        freightCharges: order.freightCharges,
        freightType: order.freightType,
        rsRate: order.rsRate,
        laOrderNo: order.laOrderNo,
        laOderDate: order.laOderDate,
        addDocReq: order.addDocReq,
        laRefNo: order.laRefNo,
        laRefDate: order.laRefDate,
        piNo: order.piNo,
        piDate: order.piDate,

        project: order.project,
        headProject: order.headProject,
        indenter: order.indenter,
        indentNo: order.indentNo,
        indentDate: order.indentDate,
        budgetHead: order.budgetHead
    });

    newOrder.save(function (err) {
        if (err) {
            return next(err);
        }
        next(null);
    });
};


exports.update = function (order, next) {
    var id = order._id;
    Order.findById(id, function (err, data) {
        if (err) {
            return next(err);
        }

        data.orderType = order.orderType;
        data.coverCompanyCode = order.coverCompanyCode;
        data.orderNo = order.orderNo;
        data.orderDate = order.orderDate;
        data.subjectStores = order.subjectStores;
        data.localSupplier = order.localSupplier._id;
        
        data.deliveryPort = order.deliveryPort;
        data.receivePort = order.receivePort;
        data.shipMode = order.shipMode;
        data.payTerm = order.payTerm;
        data.deliveryPeriod = order.deliveryPeriod;
        data.partShip = order.partShip;
        data.transShip = order.transShip;
        data.currency = order.currency;
        data.exWorksValue = order.exWorksValue;
        data.fobCharges = order.fobCharges;
        data.freightCharges = order.freightCharges;
        data.freightType = order.freightType;
        data.rsRate = order.rsRate;
        data.laOrderNo = order.laOrderNo;
        data.laOderDate = order.laOderDate;
        data.addDocReq = order.addDocReq;
        data.laRefNo = order.laRefNo;
        data.laRefDate = order.laRefDate;
        data.piNo = order.piNo;
        data.piDate = order.piDate;

        data.project = order.project;
        data.headProject = order.headProject;
        data.indenter = order.indenter;
        data.indentNo = order.indentNo;
        data.indentDate = order.indentDate;
        data.budgetHead = order.budgetHead

        data.save();

        next(null);
    });

};

exports.get = function (id, next) {

    if (id) {
        Order
            .findById(id)
            //.populate('localSupplier')
            .exec(function (err, data) {
                next(err, data);
            });
    }
    else {
        Order
            .find()
            .populate('localSupplier')
            .exec(function (err, data) {                
                next(err, data);
            });
    }

}