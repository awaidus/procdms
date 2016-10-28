var express = require('express');
var router = express.Router();
var companyService = require('../services/company-service');

/* GET all Companies */
router.get('/', function (req, res, next) {
    
    companyService.get(null, function (err, data) {
        if (err) {
            return res.json(error);
        }
        res.json(data);
    });

});

router.get('/get/:id?', function (req, res, next) {

    companyService.get(req.params.id, function (err, data) {
        if (err) {
            return res.json(error);
        }
        res.json(data);
    });
});

router.get('/create', function (req, res, next) {
    var order = new Order();
    res.json({ data: order, title: 'Add Order' });
});


router.post('/create', function (req, res, next) {

    companyService.create(req.body, function (err) {
        if (err) {
            return res.json(error);
        }
        res.json(req.body);
    });
});


router.post('/update', function (req, res, next) {

    companyService.update(req.body, function (err) {
        if (err) {
            return res.json(error);
        }
        res.json(req.body);
    });
});



router.post('/delete', function (req, res, next) {

    companyService.findOneAndDelete(req.body, function (err) {
       if (err) {
            return res.json(error);
        }
        res.json(req.body);
    });
});

module.exports = router;
