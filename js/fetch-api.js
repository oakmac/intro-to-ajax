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

  function clickBtn (_evt) {
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
  // I always advise naming your promise callback functions; it greatly helps with readability and
  // understanding code "flow".
  //
  // Now let's put the fetch() API to work on something more interesting: cat pictures!
  //
  // 1) Sign up for an API key for TheCatAPI: https://thecatapi.com/
  //    They will send you an email with your API key.
  //
  // 2) Browse the API and see what kinds of calls you can make:
  //    https://documenter.getpostman.com/view/5578104/RWgqUxxh
  // 3)



  //
  // Congratulations!
  //
})()
