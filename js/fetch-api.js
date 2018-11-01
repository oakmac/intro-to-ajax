;(function () {
  //
  // More recently, browsers have adopted the Fetch API in order to make AJAX easier
  // to work with without requiring an external library like jQuery.
  //
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // https://developers.google.com/web/updates/2015/03/introduction-to-fetch
  //
  // The Fetch API uses Promises, so we will be learning something new in addition
  // to this new AJAX technique. Promises can be a complex topic, so we will try
  // and keep to the basics for these exercises.
  //
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
  // https://developers.google.com/web/fundamentals/primers/promises
  //
  // From MDN:
  // The Promise object represents the eventual completion (or failure) of an asynchronous
  // operation, and its resulting value.
  //
  // This is a good fit for AJAX since you never really know when an AJAX request will "finish".
  // It may take just a few milliseconds and return as you expect.
  // It may take minutes and return something you were not expecting (ie: bad data).
  // It may never return (fail) because someone unplugged your Internet connection.
  //
  // Promises help to deal with the uncertainty inherent in making HTTP requests
  // over a network.
  //
  // Let's see our jumbotron example using the Fetch API:
  //

  const btnEl = document.getElementById('loadBtn3')
  btnEl.addEventListener('click', clickBtn)

  function clickBtn () {
    // The result of .fetch() is a Promise object, which has a .then() method.
    // The argument to .then() is a function that will be called once the Promise resolves.
    // In this case, the promise resolves once the AJAX request completes.
    // Promise objects can be "chained" together like below.
    console.info('Sending the AJAX request now using fetch()!')
    fetch('jumbotron.html') // <-- fetch() returns a Promise object
      .then(extractText)
      .then(setJumbotron)
  }

  // The response object that is passed into this function is the result of the AJAX call above.
  // That object has a method called .text() that returns *another* promise object, which allows it
  // to be "chained" as above.
  function extractText (response) {
    console.log('The AJAX request finished. I am the callback from the first Promise object.')
    return response.text() // <-- returns a new Promise object
  }

  // The responseTxt passed into this function is the result of the second Promise resolving (extractText).
  // Finally we have the raw response text from our AJAX request.
  // Like before, we put it into the DOM via innerHTML and hide the button.
  function setJumbotron (responseTxt) {
    console.log('response.text() has resolved. I am the callback from the second Promise object.')
    const containerEl = document.getElementById('jumbotronContainer3')
    containerEl.innerHTML = responseTxt

    btnEl.remove()
  }

  //
  // We can see that using fetch() is simpler than XMLHttpRequest, but Promises can be tricky initially.
  // I strongly recommend naming your promise callback functions instead of using anonymous functions;
  // it greatly helps with readability and understanding code "flow".
  //
  // Now let's put the fetch() API to work on something more interesting: cat pictures!
  //
  // 1) Sign up for an API key for TheCatAPI: https://thecatapi.com/
  //    They will send you an email with your API key.
  //
  // 2) Browse the API and see what kinds of calls you can make:
  //    https://documenter.getpostman.com/view/5578104/RWgqUxxh
  //
  //    Note that the 'x-api-key' http header is required for most calls to work correctly.
  //
  // 3) Using the Fetch API, repeat the exercise from the jQuery page where you click on
  //    "Generate Cat" and a random cat image appears inside <div id="catContainer">
  //
  //    This URL will return a single, random cat:
  //    https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&format=json&has_breeds=1&order=RANDOM&page=0&limit=1
  //
  //    Note that you will need to add your API key to the HTTP headers in order for that URL to return results.
  //    You may need to read some documentation on how to send custom headers with fetch():
  //    https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api#custom_headers
  //    https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Headers
  //
  //    Don't forget to disable the button while the AJAX request is active, and re-enable
  //    it once done.
  //

  // TODO: your code goes here :)

  //
  // What else can you build with your new AJAX knowledge?
  //
  // How about a cats vs dogs contest where the user clicks a button to load a random dog and random cat.
  // Then they have to vote for which one they like. Keep track of the votes.
  //
  // How about a picture gallery of cats and dogs with search functionality?
  //
  // Wikipedia has an extensive API: https://en.wikipedia.org/api/rest_v1/
  // What could you build on top of that using AJAX?
  //
  // Build something fun below using your favorite AJAX techniques.
  //

  // TODO: your code goes here :)

  //
  // Be sure to check out the axios project for another example of a Promise-based
  // AJAX library: https://github.com/axios/axios
  //
  // Congratulations! You are now an AJAX master.
  //
})()
