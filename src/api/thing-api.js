import 'whatwg-fetch';
import getBaseUrl from './base-url';

const baseUrl = getBaseUrl();

export function getThings() {
  return get('things');
}

export function deleteThing(id) {
  return del(`things/${id}`);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  return console.log(error); // eslint-disable-line no-console
}
