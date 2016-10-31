var Shipment = require('../models/shipment').Shipment;

exports.create = function (data, next) {

    var newShipment = new Shipment({

        docRecvDate: data.docRecvDate,
        originalDocRecvDate: data.originalDocRecvDate,
        shipMode: data.shipMode,
        consignmentNature: data.consignmentNature,
        paymentNo: data.paymentNo,
        project: data.project,
        budgetHead: data.budgetHead,
        billNoLabel: data.billNoLabel,
        billNo: data.billNo,
        billNo2Label: data.billNo2Label,
        billNo2: data.billNo2,
        billDate: data.billDate,
        loadingPort: data.loadingPort,
        departurePort: data.departurePort,
        arrivedAt: data.arrivedAt,
        invoiceNo: data.invoiceNo,
        invoiceDate: data.invoiceDate,
        shipmentConsignee: data.shipmentConsignee
    });

    newShipment.save(function (err) {
        if (err) {
            return next(err);
        }
        next(null);
    });
};


exports.update = function (shipment, next) {

    Shipment.findById(shipment._id, function (err, data) {

        if (err) {
            return next(err);
        }

        data.docRecvDate = shipment.docRecvDate;
        data.originalDocRecvDate = shipment.originalDocRecvDate;
        data.shipMode = shipment.shipMode;
        data.consignmentNature = shipment.consignmentNature;
        data.paymentNo = shipment.paymentNo;
        data.project = shipment.project;
        data.budgetHead = shipment.budgetHead;
        data.billNoLabel = shipment.billNoLabel;
        data.billNo = shipment.billNo;
        data.billNo2Label = shipment.billNo2Label;
        data.billNo2 = shipment.billNo2;
        data.billDate = shipment.billDate;
        data.loadingPort = shipment.loadingPort;
        data.departurePort = shipment.departurePort;
        data.arrivedAt = shipment.arrivedAt;
        data.invoiceNo = shipment.invoiceNo;
        data.invoiceDate = shipment.invoiceDate;
        data.shipmentConsignee = shipment.shipmentConsigne;


        data.save();

        next(null);
    });

};

exports.get = function (id, next) {

    if (id) {
        Shipment
            .findById(id)
            .exec(function (err, data) {
                next(err, data);
            });
    }
    else {
        Shipment
            .find()
            .exec(function (err, data) {
                next(err, data);
            });
    }

}