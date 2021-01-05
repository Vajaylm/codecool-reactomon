const getIdFromUrl = url => {
  let urlParts = url.split('/');
  return urlParts[urlParts.length - 2];
}

const capitalize = str => {
  if (str.length > 1) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  else {
    return str.charAt(0).toUpperCase();
  }
}

export { getIdFromUrl, capitalize };