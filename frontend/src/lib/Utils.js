/**
 * Formats a date into a string representation.
 *
 * @param {Date} date - The date to format.
 * @return {string} The formatted date as a string.
 */
export function formatDate(date) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "short",
  });
}

/**
 * Formats the given date as a string in the format "HH:MM".
 *
 * @param {Date} date - The date to format.
 * @return {string} The formatted time string.
 */
export function formatTime(date) {
  if (!date) {
    return "";
  }
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

/**
 * Formats the input date into a string in the YYYY-MM-DD format.
 *
 * @param {Date} date - The input date to be formatted.
 * @return {string} The formatted date string in the YYYY-MM-DD format.
 */
export function inputFormatDate(date) {
  if (!date) {
    return "";
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

/**
 * Formats the input time to a specific format.
 *
 * @param {Date} date - The input date object to be formatted.
 * @return {string} The formatted time in the format "HH:MM".
 */
export function inputFormatTime(date) {
  if (!date) {
    return "";
  }
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

/**
 * Converts a date and time input into a JavaScript Date object.
 *
 * @param {string} date - The date in the format "YYYY-MM-DD".
 * @param {string} time - The time in the format "HH:MM".
 * @return {Date} The converted Date object.
 */
export function dateFromInput(date, time) {
  return new Date(`${date}T${time}`);
}

/**
 * Converts a blob to data URL.
 *
 * @param {Blob} data - The blob to convert.
 * @return {Promise} A promise that resolves to the data URL.
 */
export const blobToData = (data) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(data);
  });
};
