const getData = async () => {
  try{
    const response = await fetch('https://api-to-call.com/endpoint')
    if (response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!')
  }catch(error){
    console.log(error);
  }
};

//Another way to make GET requests is with async and await.  programs awating a response can continue to run while waiting for hte infomation.

//https://s3.amazonaws.com/codecademy-content/courses/intermediate-javascript-requests/diagrams/async+await+GET+diagram.svg
