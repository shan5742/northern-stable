const { formatDate } = require("./formatDate");

const testValue = new Date("2001-01-01T23:59:00+00:00");

test("Expect date to be outputted in readable format", () => {
  expect(formatDate(testValue)).toBe("1st Jan 2001");
});
