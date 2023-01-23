import { calc } from "../src/calculator";

describe("test calculator", () => {
  test("sum", () => {
    const xd = calc(1, 1);
    expect(xd).toBe(2);
  });
  test("res", () => {
    const xd = calc(1, -1);
    expect(xd).toBe(0);
  });
});
