import { describe, expect, it } from "vitest";
import {
  roundDollars,
  sixYearTotal,
  yearOneTax,
} from "./calculator";

describe("Measure Z calculator", () => {
  it("1,500 residential @ 4% → Year 1 $90.00, 6-year $596.97, UI $597", () => {
    const year1 = yearOneTax(1500, "residential");
    const six = sixYearTotal(year1, 0.04);
    expect(year1).toBe(90);
    expect(six).toBe(596.97);
    expect(roundDollars(six)).toBe(597);
  });

  it("2,000 residential @ 0% → Year 1 $120, 6-year $720", () => {
    const year1 = yearOneTax(2000, "residential");
    expect(year1).toBe(120);
    expect(sixYearTotal(year1, 0)).toBe(720);
  });

  it("5,000 commercial @ 4% → Year 1 $450, 6-year ~$2,985", () => {
    const year1 = yearOneTax(5000, "commercial");
    const six = sixYearTotal(year1, 0.04);
    expect(year1).toBe(450);
    expect(roundDollars(six)).toBe(2985);
  });

  it("2,200 residential year one is $132", () => {
    expect(yearOneTax(2200, "residential")).toBe(132);
  });
});
