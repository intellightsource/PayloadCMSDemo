(function () {
  function getImplicitPreference() {
    var mql = window.matchMedia('(prefers-color-scheme: dark)')
    return typeof mql.matches === 'boolean' ? (mql.matches ? 'dark' : 'light') : null
  }
  function themeIsValid(t) {
    return t === 'light' || t === 'dark'
  }
  var preference = window.localStorage.getItem('payload-theme')
  var theme = themeIsValid(preference) ? preference : getImplicitPreference() || 'light'
  document.documentElement.setAttribute('data-theme', theme)
})()
