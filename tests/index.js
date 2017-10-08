(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "mocha", "assert", "../dist/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    require("mocha");
    var assert = require("assert");
    var index_1 = require("../dist/index");
    describe("index", function () {
        it("Should be equal to 4 ", function () {
            assert.equal(index_1.math.add(3, 1), 4);
        });
    });
});
//# sourceMappingURL=index.js.map