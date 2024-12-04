import {add} from "./stringCalculator";

describe("Calculator", () => {
    it("Return 0 for an empty string", () => {
        expect(add("")).toBe(0);
    })

    it("Return number itself for single number", () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    })
})

