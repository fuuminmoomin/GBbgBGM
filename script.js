var gbfbgbgm = function (ev) {
  setTimeout(function () {
    window.dispatchEvent(new Event('focus'))
  }, 10);
};

var setgbfbgbgm = function () {
  window.removeEventListener("blur", gbfbgbgm);
  window.addEventListener("blur", gbfbgbgm);
};

setgbfbgbgm();