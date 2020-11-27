const { handleDate } = require("./handleDate");

const testValue = new Date("2001-01-01T23:59:00+00:00");
const testValue2 = new Date("2031-01-01T23:59:00+00:00");
const testValue3 = null;

test("Expect date to return Inactive", () => {
  expect(handleDate(testValue)).toBe("Inactive");
});

test("Expect date to return Running", () => {
  expect(handleDate(testValue2)).toBe("Running");
});

test("Expect to return Continuous", () => {
  expect(handleDate(testValue3)).toBe("Continuous");
});
