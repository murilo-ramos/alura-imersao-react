function getHost() {
  return window.location.hostname.includes('localhost')
    ? 'http://localhost:8080'
    : 'http://192.168.0.162:8080';
}

function getUrl(path) {
  const host = getHost();
  return `${host}${path}`;
}

export default getUrl;
