// NOTE: this file makes the tabs at the top of the page work
// It is otherwise unrelated to the AJAX exercises

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes#Polyfill
if (!String.prototype.includes) {
  Object.defineProperty(String.prototype, 'includes', {
    value: function(search, start) {
      if (typeof start !== 'number') {
        start = 0
      }

      if (start + search.length > this.length) {
        return false
      } else {
        return this.indexOf(search, start) !== -1
      }
    }
  })
}

// https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove#Polyfill
;(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        if (this.parentNode !== null)
          this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

;(function () {
  const $ = window.jQuery
  const loadedViaFile = window.location.protocol.includes('file')

  function isValidHash (hash) {
    return hash === '#basic' || hash === '#jquery' || hash === '#fetch'
  }

  function showSection (sectionHash) {
    $('section.body-section').hide()
    $('#tabsNav .nav-link').removeClass('active')
    $(sectionHash + 'NavLink').addClass('active')
    $(sectionHash + 'BodyContainer').show()
  }

  function hashChange (_evt) {
    const currentHash = window.location.hash
    if (isValidHash(currentHash)) {
      showSection(currentHash)
    } else {
      window.location.hash = 'basic'
    }
  }

  function shutItDown () {
    document.body.innerHTML = '<h1>Please <a href="https://github.com/oakmac/intro-to-ajax#running-a-local-web-server">run a local webserver</a> to view this exercise.</h1>'
  }

  function init () {
    window.addEventListener('hashchange', hashChange)
    hashChange()
  }

  if (loadedViaFile) {
    shutItDown()
  } else {
    $(init)
  }
})()
