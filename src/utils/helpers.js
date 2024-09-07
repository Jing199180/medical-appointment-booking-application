import { format, parseISO } from "date-fns";

// const startTime = "2024-08-31T11:00:00";

// const parseDate = parseISO(startTime);

// const formatDate = format(parseDate, "MMM d, yyyy, h:mm a");

// console.log(formatDate);

export function formatData(time) {
  const parseDate = parseISO(time);
  return format(parseDate, "MMM d, yyyy, h:mm a");
}
