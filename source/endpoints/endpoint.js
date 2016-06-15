export class Endpoint {

  merge(parameters) {
    return Object.keys(parameters).map((key) => {
      return [key, encodeURIComponent(parameters[key])].join("=");
    }).join("&");
  }

}
