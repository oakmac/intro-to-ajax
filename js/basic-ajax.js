;(function () {
  //
  // AJAX stands for Asynchronous JavaScript and XML. Despite the name, it basically
  // has nothing to do with XML; that is just a historical quirk.
  //
  // It basically means "you can load content on a webpage dynamically". Traditionally,
  // webpages were static once they had been loaded from the server. AJAX allows
  // more interactive webpages and web applications.
  //
  // Example: Google Maps dynamically loads map content as you scroll around the world.
  // This is done via AJAX.
  //
  // The XMLHttpRequest object was the original way to use AJAX. Example below:
  //

  const request = new XMLHttpRequest() // create the object
  request.addEventListener('load', receiveData) // attach a function to the 'load' event
  request.open('GET', 'jumbotron.html') // where should this request be made to?
                                        // in this case, we are making an HTTP GET request
                                        // to the 'jumbotron.html' file

  // add a click event to our button
  const buttonEl = document.getElementById('loadJumbotronBtn')
  buttonEl.addEventListener('click', clickBtn)

  // when the "Load Jumbotron" button is clicked, we fire the .send() method of request
  function clickBtn (evt) {
    console.info('button clicked! fetching "jumbotron.html" now…')
    request.send() // <-- this initializes the HTTP request for 'jumbotron.html'
                   // Note that the event listener for this request was attached on Line 17
  }

  // this function fires when the request has completed
  // remember that HTTP requests require time to complete; they are not instant operations
  function receiveData (x) {
    console.info('ajax request has completed')

    // now we check the original request object for it's status
    // the line below means "is the request finished and was an HTTP 200 received?"
    if (request.readyState === 4 && request.status === 200) {
      // the .responseText property contains the raw text of the request
      // in our case, that is the HTML found in 'jumbotron.html'
      console.info('This is the raw text that we got from our AJAX request:')
      console.log(request.responseText)

      // let's add that HTMl into the DOM
      const jumbotronContainerEl = document.getElementById('jumbotronContainer')
      jumbotronContainerEl.innerHTML = request.responseText

      // and remove the button
      buttonEl.remove()
    } else {
      console.error('uh-oh! something went wrong with our AJAX request')
    }
  }

  //
  // As you can see, the API for XMLHttpRequest is pretty verbose. Most web developers
  // do not use this object directly in 2018. Instead choosing to use library wrappers on top of it
  //
  // You can read more about the history of AJAX and XMLHttpRequest here:
  // https://en.wikipedia.org/wiki/Ajax_(programming)
  // https://en.wikipedia.org/wiki/XMLHttpRequest
  //
  // Now that we have seen how to use the XMLHttpRequest object, let's try the
  // same thing using jQuery!
  //
})()
