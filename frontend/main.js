// This is the location of our server, when it's running locally
const serverUrl = 'http://localhost:3000';

// Grab all the elements we will be dealing with
const nameField = document.querySelector('#name-field');
const submitButton = document.querySelector('#submit-button');
const messageArea = document.querySelector('#message-area');


// When the submit button is clicked, trigger the `sendRequest`
// function which is defined below
submitButton.addEventListener('click', sendRequest)


// sendRequest(): Triggered when the submit button is clicked
//
// This is an 'async' function, meaning it will wait for our
// server request to be fulfilled before it returns.
async function sendRequest() {
  // Capture the text entered in the name field
  const name = nameField.value;

  // Use the fetch() function to query our url at the route
  // '/hello'. The headers tell the API to expect a JSON
  // object, which is how we send our data in the body.
  //
  // The 'await' keyword tells the function to wait for this
  // to be fulfilled before moving on with the code
  const response = await fetch(serverUrl + '/hello', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ name: name })
  });

  // Once we have requested from the server, wait for it
  // to finish sending us all the JSON data back. 
  const json = await response.json();

  // We get an object from the server that looks like
  // { message: 'Hello, [yourname]' }. Update the message area
  // with this text.
  const message = json.message;
  messageArea.innerText = message;
}