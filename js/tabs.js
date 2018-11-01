// NOTE: this file makes the tabs at the top of the page work
// It is otherwise unrelated to the AJAX exercises

;(function () {
  const $ = window.jQuery

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

  function init () {
    window.addEventListener('hashchange', hashChange)
    hashChange()
  }

  $(init)
})()

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
