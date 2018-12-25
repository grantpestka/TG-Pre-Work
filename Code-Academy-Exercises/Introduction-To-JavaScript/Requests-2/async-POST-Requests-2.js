const getData = async () =>{
  try{
    const response = await fetch('https://api-to-call.com/endpoint',{
      method: 'POST',
      body: JSON.stringify({id: 200})
    });
    if (response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  }catch(error){
    console.log(error);
  }
}

// In every transations information is sent and recieved.  Which is why fetch is used in both GETs and POSTs. The GET or POST is concerned with the final resting place of what ever specific chunk of data trying to be sent or recieved.  There is never a one way transation on the web.

//https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/async+await+POST+diagram.svg
