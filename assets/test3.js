const blockedDomain = "s" + "o" + "r" + "a" + "temp" + "lates";

// Cegah assign
const originalAssign = window.location.assign;
window.location.assign = function (url) {
  if (url.toLowerCase().includes(blockedDomain)) {
    console.warn("Redirect (assign) diblok:", url);
  } else {
    originalAssign.call(window.location, url);
  }
};

// Cegah replace
const originalReplace = window.location.replace;
window.location.replace = function (url) {
  if (url.toLowerCase().includes(blockedDomain)) {
    console.warn("Redirect (replace) diblok:", url);
  } else {
    originalReplace.call(window.location, url);
  }
};

// Cegah window.open
const originalOpen = window.open;
window.open = function (url, ...args) {
  if (url.toLowerCase().includes(blockedDomain)) {
    console.warn("Redirect (open) diblok:", url);
    return null;
  }
  return originalOpen.call(window, url, ...args);
};
