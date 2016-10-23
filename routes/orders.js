var express = require('express');
var router = express.Router();
var Order = require('../models/order').Order;
var orderService = require('../services/order-service');

/* GET orders listing. */
router.get('/', function (req, res, next) {
    Order.find()
        .then(function (data) {
            res.json({ data: data, title: 'Orders Index' });
        })
});



router.get('/create', function (req, res, next) {
    var order = new Order();
    res.json({ data: order, title: 'Orders Index' });
});


router.post('/create', function (req, res, next) {
    orderService.create(req.body, function (err) {
        if (err) {
            var vm = {
                title: 'Register User',
                input: req.body,
                error: err
            }
            return res.render('orders/create', vm);
        }
        res.json({ data: req.body, title: 'Orders Index' });
    });
});

router.post('/register', function (req, res, next) {
    userService.addUser(req.body, function (err) {
        if (err) {
            var vm = {
                title: 'Register User',
                input: req.body,
                error: err
            }
            return res.render('users/register', vm);
        }
        res.redirect('/')
    });
});

module.exports = router;
