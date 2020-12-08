import { expect, it } from "@jest/globals";
import { describe } from "yargs";
import { greet } from "./index";

describe("Check start function", () => {
  it("Says hello console", () => {
    expect(greet()).toBe("Hello console");
  });
});
