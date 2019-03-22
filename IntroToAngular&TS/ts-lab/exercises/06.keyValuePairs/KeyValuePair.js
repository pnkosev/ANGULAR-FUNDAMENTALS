"use strict";
exports.__esModule = true;
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
        this.result = [];
    }
    KeyValuePair.prototype.setKeyValue = function (k, v) {
        var obj = {
            key: k,
            value: v
        };
        this.result.push(obj);
    };
    KeyValuePair.prototype.display = function () {
        this.result.forEach(function (r) { return console.log("key = " + r['key'] + ", value = " + r['value']); });
    };
    return KeyValuePair;
}());
exports["default"] = KeyValuePair;
