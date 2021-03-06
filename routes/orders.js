var express = require('express');
var router = express.Router();

var orderService = require('../services/order-service');

/* GET all orders */
router.get('/', function (req, res, next) {

    orderService.get(null, function (err, data) {
        if (err) {
            return res.send();
        }
        res.json(data);
    });

});

/* GET specific order */
router.get('/get/:id?', function (req, res, next) {

    orderService.get(req.params.id, function (err, data) {
        if (err) {
            return res.send();
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
            return res.send();
        }
        res.json(req.body);
    });
});


router.post('/update', function (req, res, next) {

    orderService.update(req.body, function (err) {
        if (err) {
            return res.send();
        }
        res.json(req.body);
    });
});



router.post('/delete', function (req, res, next) {

    orderService.delete(req.body, function (err) {
        if (err) {
            return res.send();
        }
        res.json(req.body);
    });
});

module.exports = router;
