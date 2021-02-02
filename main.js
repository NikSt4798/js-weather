(() => {
  "use strict";
  var e = {
      138: (e, t, o) => {
        async function r() {
          let e = await fetch("https://get.geojs.io/v1/ip/geo.json");
          return (await e.json()).city;
        }
        console.log(r()),
          console.log(
            (async function (e) {
              let t = `api.openweathermap.org/data/2.5/weather?q=${e}&appid=458b6f24d9bec1db57c2f337dc35dbcc`,
                o = await fetch(t);
              return await o.json();
            })(r())
          );
      },
    },
    t = {};
  function o(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, o), a.exports;
  }
  (o.d = (e, t) => {
    for (var r in t)
      o.o(t, r) &&
        !o.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    o(138);
})();
