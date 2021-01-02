class Util {
  static getIdFromUrl(url) {
    let urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  }
}

export default Util;
