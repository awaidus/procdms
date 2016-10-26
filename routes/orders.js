var express = require('express');
var router = express.Router();
var Order = require('../models/order').Order;
var orderService = require('../services/order-service');

/* GET all orders */
router.get('/', function (req, res, next) {
    /* Order.find()
         .then(function (data) {
             res.json({ data: data, title: 'Contracts Index' });
         })*/
    orderService.get(null, function (err, data) {
        if (err) {
            return res.json({ data: error, title: 'Error' });
        }
        res.json({ data: data, title: 'Contracts Index' });
    });

});

/* GET specific order */
router.get('/get/:id?', function (req, res, next) {

    /*Order.findById(req.params.id)
        .then(function (data) {
            res.json({ data: data, title: 'Contract' });
        })*/
    orderService.get(req.params.id, function (err, data) {
        if (err) {
            return res.json({ data: error, title: 'Error' });
        }
        res.json({ data: data, title: 'Contract' });
    });
});

router.get('/create', function (req, res, next) {
    var order = new Order();
    res.json({ data: order, title: 'Add Order' });
});


router.post('/create', function (req, res, next) {

    orderService.create(req.body, function (err) {
        if (err) {
            var vm = {
                title: 'Add-Contract',
                data: req.body,
                error: err
            }
            //return res.render('orders/create', vm);
            res.json({ data: vm });
        }
        res.json({ data: req.body });
    });
});


router.post('/update', function (req, res, next) {

    orderService.update(req.body, function (err) {
        if (err) {
            var vm = {
                title: 'Update-Contract',
                data: req.body,
                error: err
            }
            //return res.render('orders/create', vm);
            res.json({ data: vm });
        }
        res.json({ data: req.body });
    });
});



router.post('/delete', function (req, res, next) {

    orderService.delete(req.body, function (err) {
        if (err) {
            var vm = {
                title: 'Delete-Order',
                data: req.body,
                error: err
            }
            //return res.render('orders/create', vm);
            res.json({ data: vm });
        }
        res.json({ data: req.body });
    });
});

module.exports = router;
