//establish connection
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200'})
} )
  .then(response => {
  //check for errors
  if (response.ok) {
    //return data
    return response.json();
  }
  //for debug
  throw new Error('Request failed!');
}, networkError => {
  //for debug
  console.log(networkError.message);
}
  )
  .then(jsonResponse => {
  renderResponse(jsonResponse);
}
)

// When fetch() is returned a promise, the .then() methods trigger.
