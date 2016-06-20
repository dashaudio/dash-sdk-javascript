/**
 * Merge an object's keys and values into a URL querystring segment
 * @param {Object} parameters An object whose keys and values will be merged
 */
export function merge(parameters) {
  return Object.keys(parameters).map((key) => {
    return [key, encodeURIComponent(parameters[key])].join("=");
  }).join("&");
}
