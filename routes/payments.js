var express = require('express');
var router = express.Router();
var paymentService = require('../services/payment-service');

/* GET all payments */
router.get('/:orderId?', function (req, res, next) {

    paymentService.get(null, function (err, data) {
        if (err) {
            //return res.json(err);
            return res.send();
        }
        res.json(data, err);
    });

});

/* GET specific payment */
router.get('/get/:id?', function (req, res, next) {

    paymentService.get(req.params.id, function (err, data) {
        if (err) {
            return res.send();
        }
        res.json(data);
    });
});

router.post('/create/:orderId?', function (req, res, next) {

    paymentService.create(req.params.orderId, req.body, function (err) {
        if (err) {
            return res.send();
        }
        res.json(req.body);
    });
});


router.post('/update', function (req, res, next) {

    paymentService.update(req.body, function (err) {
        if (err) {
            return res.send();
        }
        res.json(req.body);
    });
});



router.post('/delete', function (req, res, next) {

    paymentService.delete(req.body, function (err) {
        if (err) {
           return res.send();
        }
        res.json(req.body);
    });
});

module.exports = router;
