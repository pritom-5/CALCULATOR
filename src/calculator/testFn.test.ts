import { describe, expect, it } from "vitest";
import { hello, testVal } from "./testFn";

describe("test testVal", () => {
	it("should show test", () => {
		expect(testVal()).toMatch(/test/);
	});
});
