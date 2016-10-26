
"use strict";

angularApp.filter('array', function () {
    return function (items) {
        var filtered = [];
        angular.forEach(items, function (item) {
            filtered.push(item);
        });
        return filtered;
    };
});

angularApp.filter('toArray', function () {
    return function (obj, addKey) {
        if (!angular.isObject(obj)) return obj;
        if (addKey === false) {
            return Object.keys(obj).map(function (key) {
                return obj[key];
            });
        } else {
            return Object.keys(obj).map(function (key) {
                var value = obj[key];
                return angular.isObject(value) ?
                    Object.defineProperty(value, '$key', { enumerable: false, value: key }) :
                    { $key: key, $value: value };
            });
        }
    };
});


angularApp.filter('labelCase', function () {
    return function (input) {
        input = input.replace(/([A-Z])/g, ' $1');
        return input[0].toUpperCase() + input.slice(1);
    };
});	//end labelCase filter

angularApp.filter('labelCaseDot', function () {
    return function (input) {
        input = input.replace(/([A-Z])/g, '.$1');
        return input[0].toUpperCase() + input.slice(1);
    };
});	//end labelCaseDot filter

angularApp.filter('propsFilter', function () {
    return function (items, props) {
        var out = [];

        if (angular.isArray(items)) {
            items.forEach(function (item) {
                var itemMatches = false;

                var keys = Object.keys(props);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    }
});


