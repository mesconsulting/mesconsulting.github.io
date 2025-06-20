const blockedDomain = "s" + "o" + "r" + "a" + "temp" + "lates";

// Blok location.assign
const originalAssign = window.location.assign;
window.location.assign = function(url) {
  if (url.toLowerCase().includes(blockedDomain)) {
    console.warn("Redirect diblok:", url);
  } else {
    originalAssign.call(window.location, url);
  }
};

// Blok location.replace
const originalReplace = window.location.replace;
window.location.replace = function(url) {
  if (url.toLowerCase().includes(blockedDomain)) {
    console.warn("Redirect diblok:", url);
  } else {
    originalReplace.call(window.location, url);
  }
};

// Blok location.href
Object.defineProperty(window.location, 'href', {
  set: function(url) {
    if (url.toLowerCase().includes(blockedDomain)) {
      console.warn("Redirect diblok:", url);
    } else {
      window.location.assign(url);
    }
  }
});

// Blok window.open
const originalOpen = window.open;
window.open = function(url, ...args) {
  if (url.toLowerCase().includes(blockedDomain)) {
    console.warn("window.open diblok:", url);
    return null;
  }
  return originalOpen.call(window, url, ...args);
};
