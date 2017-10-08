import 'mocha'
import * as assert from 'assert';
import {math} from "../dist/index";

describe("index", () => {
    it("Should be equal to 4 ", () => {
        assert.equal(math.add(3, 1), 4);
    })
});