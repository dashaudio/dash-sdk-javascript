/**
 * Merge an object's keys and values into a URL querystring segment
 */
export function merge(parameters) {
  return Object.keys(parameters).map((key) => {
    return [key, encodeURIComponent(parameters[key])].join("=");
  }).join("&");
}
