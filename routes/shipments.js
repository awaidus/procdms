var express = require('express');
var router = express.Router();
var shipmentService = require('../services/shipment-service');

/* GET all shipments */
router.get('/', function (req, res, next) {

    shipmentService.get(null, function (err, data) {
        if (err) {
            return res.json(err);
        }
        res.json(data, err);
    });

});

/* GET specific shipment */
router.get('/get/:id?', function (req, res, next) {

    shipmentService.get(req.params.id, function (err, data) {
        if (err) {
            res.json(err);
        }
        res.json(data);
    });
});

router.post('/create', function (req, res, next) {

    shipmentService.create(req.body, function (err) {
        if (err) {
            res.json(err);
        }
        res.json(req.body);
    });
});


router.post('/update', function (req, res, next) {

    shipmentService.update(req.body, function (err) {
        if (err) {
            res.json(err);
        }
        res.json(req.body);
    });
});



router.post('/delete', function (req, res, next) {

    shipmentService.delete(req.body, function (err) {
        if (err) {
            res.json(err);
        }
        res.json(req.body);
    });
});

module.exports = router;
