var express = require('express');
var router = express.Router();
var companyService = require('../services/company-service');

/* GET all Companies */
router.get('/', function (req, res, next) {
    
    companyService.get(null, function (err, data) {
        if (err) {
            return res.json({ data: error, title: 'Error' });
        }
        res.json({ data: data, title: 'Company Index' });
    });

});

router.get('/get/:id?', function (req, res, next) {

    companyService.get(req.params.id, function (err, data) {
        if (err) {
            return res.json({ data: error, title: 'Error' });
        }
        res.json({ data: data, title: 'Company' });
    });
});

router.get('/create', function (req, res, next) {
    var order = new Order();
    res.json({ data: order, title: 'Add Order' });
});


router.post('/create', function (req, res, next) {

    companyService.create(req.body, function (err) {
        if (err) {
            var vm = {
                title: 'Add-Company',
                data: req.body,
                error: err
            }           
            res.json({ data: vm });
        }
        res.json({ data: req.body });
    });
});


router.post('/update', function (req, res, next) {

    companyService.update(req.body, function (err) {
        if (err) {
            var vm = {
                title: 'Update-Company',
                data: req.body,
                error: err
            }
           
            res.json({ data: vm });
        }
        res.json({ data: req.body });
    });
});



router.post('/delete', function (req, res, next) {

    companyService.delete(req.body, function (err) {
        if (err) {
            var vm = {
                title: 'Delete-Company',
                data: req.body,
                error: err
            }            
            res.json({ data: vm });
        }
        res.json({ data: req.body });
    });
});

module.exports = router;
