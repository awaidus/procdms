var express = require('express');
var router = express.Router();
var Order = require('../models/order').Order;
var orderService = require('../services/order-service');

/* GET all orders */
router.get('/', function (req, res, next) {

    orderService.get(null, function (err, data) {
        if (err) {
            return res.json(err);
        }
        res.json(data);
    });

});

/* GET specific order */
router.get('/get/:id?', function (req, res, next) {

    orderService.get(req.params.id, function (err, data) {
        if (err) {
            res.json(err);
        }
        res.json(data);
    });
});

router.get('/create', function (req, res, next) {
    var order = new Order();
    res.json(order);
});


router.post('/create', function (req, res, next) {

    orderService.create(req.body, function (err) {
        if (err) {
            res.json(err);
        }
        res.json(req.body);
    });
});


router.post('/update', function (req, res, next) {

    orderService.update(req.body, function (err) {
        if (err) {
            res.json(err);
        }
        res.json(req.body);
    });
});



router.post('/delete', function (req, res, next) {

    orderService.delete(req.body, function (err) {
        if (err) {
            res.json(err);
        }
        res.json(req.body);
    });
});

module.exports = router;
