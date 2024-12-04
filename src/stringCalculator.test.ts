import {add} from "./stringCalculator";

describe("Calculator", () => {
    it("Return 0 for an empty string", () => {
        expect(add("")).toBe(0);
        expect(add(" ")).toBe(0);
    })

    it("Return number itself for single number", () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    })

    it("Return sum of number for comma separated string", () => {
        expect(add("1,8,9")).toBe(18);
        expect(add("2, 6, 8")).toBe(16);
    })

    it("Return sum of number for new line string", () => {
        expect(add("1\n4\n6")).toBe(11);
        expect(add("1\n4,6 \n 2")).toBe(13);
    })

    it("Retrun exception if any negative number found in string", () => {
        expect(() => add("1, -4, 6")).toThrow("negative numbers not allowed -4");
        expect(() => add("3, -9, -1")).toThrow("negative numbers not allowed -9, -1");
        expect(() => add("\n4\n-8, 9")).toThrow("negative numbers not allowed -8")
    })
})

