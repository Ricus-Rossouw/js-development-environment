import 'whatwg-fetch';

export function getThings() {
  return get('things');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  return console.log(error); // eslint-disable-line no-console
}
