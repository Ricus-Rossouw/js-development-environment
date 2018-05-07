import { getThings, deleteThing } from './api/thing-api';

// Populate things via API Call
getThings().then(result => {
  let thingsBody = '';

  result.forEach(thing => {
    thingsBody += `
      <tr>
        <td><a href="#" data-id="${thing.id}" class="delete-thing">Delete</a></td>
        <td>${thing.id}</td>
        <td>${thing.name}</td>
        <td>${thing.alias}</td>
        <td>${thing.origin}</td>
      </tr>
    `;
  });

  global.document.getElementById('things').innerHTML = thingsBody;

  const deleteLinks = global.document.getElementsByClassName('delete-thing');

  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteThing(element.attributes['data-id'].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });
});
