"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("../src/calculator");
describe("test calculator", () => {
    test("sum", () => {
        const xd = (0, calculator_1.calc)(1, 1);
        expect(xd).toBe(2);
    });
    test("res", () => {
        const xd = (0, calculator_1.calc)(1, -1);
        expect(xd).toBe(0);
    });
});
//# sourceMappingURL=main.test.js.map