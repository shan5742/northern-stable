import { format } from "date-fns";

export const formatDate = (date) => {
  let day = new Date(date);
  if (!date) {
    return "Continuous";
  } else {
    return format(day, "do MMM yyyy");
  }
};
