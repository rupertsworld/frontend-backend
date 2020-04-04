// This port is specified in the backend server file
const serverUrl = 'http://localhost:3000';

const nameField = document.querySelector('#name-field');
const submitButton = document.querySelector('#submit-button');
const messageArea = document.querySelector('#message-area');

submitButton.addEventListener('click', sendRequest)

async function sendRequest() {
  const name = nameField.value;

  const response = await fetch(serverUrl + '/hello', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ name: name })
  });
  const json = await response.json();
  const message = json.message;

  messageArea.innerText = message;
}