import { isAfter } from "date-fns/esm";

export const handleDate = (date) => {
  let day = Date.parse(date);
  let today = Date.parse(new Date());
  if (!date) {
    return "Continuous";
  } else if (isAfter(day, today)) {
    return "Running";
  } else {
    return "Inactive";
  }
};
