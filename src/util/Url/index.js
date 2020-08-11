function getHost() {
  return window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'https://lauraflix.herokuapp.com';
}

function getUrl(path) {
  const host = getHost();
  return `${host}${path}`;
}

export default getUrl;
