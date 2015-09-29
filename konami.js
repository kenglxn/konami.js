(function () {
  var konami,
      buffer,
      latchId,
      onKonami,
      konamiChk,
      root = this,
      code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

  onKonami = function () {
    console.log("konami!!!");
  };

  konamiChk = function (ev) {
    buffer = buffer || code.slice();
    if (buffer[0] === ev.keyCode) {
      window.clearTimeout(latchId);
      buffer.splice(0, 1);
      if (buffer.length === 0) {
        onKonami();
      }
      latchId = window.setTimeout(function () {
        buffer = code.slice();
      }, 500);
    }
  };

  konami = function (cb) {
    onKonami = cb || onKonami;
    window.addEventListener("keyup", konamiChk);
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = konami;
    }
    exports.konami = konami;
  } else {
    root.konami = konami;
  }
}());

// konami(function())