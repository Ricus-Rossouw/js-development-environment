import { getThings } from './api/thing-api';

// Populate things via API Call
getThings().then(result => {
  let thingsBody = '';

  result.forEach(thing => {
    thingsBody += `
      <tr>
        <td><a href="#" data-id="${thing.id}" class="deleteThing">Delete</a></td>
        <td>${thing.id}</td>
        <td>${thing.name}</td>
        <td>${thing.alias}</td>
        <td>${thing.origin}</td>
      </tr>
    `;
  });

  global.document.getElementById('things').innerHTML = thingsBody;
});
