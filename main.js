(() => {
  "use strict";
  async function e(e) {
    let t = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${e}&appid=458b6f24d9bec1db57c2f337dc35dbcc`,
      n = await fetch(t);
    return await n.json();
  }
  async function t(n) {
    const a = document.querySelector(".weather");
    a.innerHTML = "";
    const c = document.querySelector(".map");
    c.innerHTML = "";
    const i = document.createElement("p");
    if (void 0 === n.name)
      return (
        (i.innerText = "Can't find this city, try again."),
        void a.appendChild(i)
      );
    (i.innerText = `Showing weather for ${n.name}`), a.appendChild(i);
    const r = document.createElement("p");
    (r.innerText = `Current weather is ${n.main.temp} degrees of Celcium`),
      a.appendChild(r);
    const o = document.createElement("img"),
      d = n.weather[0].icon;
    (o.src = `https://openweathermap.org/img/wn/${d}@2x.png`),
      a.appendChild(o),
      (document.querySelector(
        "#favicon"
      ).href = `https://openweathermap.org/img/wn/${d}@2x.png`);
    const s = document.createElement("img");
    (s.src = `https://static-maps.yandex.ru/1.x/?ll=${n.coord.lon},${n.coord.lat}&size=450,450&z=11&l=map`),
      c.appendChild(s),
      (function (n) {
        const a = document.querySelector(".history"),
          c = a.querySelectorAll("p");
        let i = !1;
        if (
          (c.forEach((e) => {
            e.innerText !== n || (i = !0);
          }),
          i)
        )
          return;
        const r = document.createElement("p");
        (r.innerText = n),
          r.addEventListener("click", async function () {
            const n = await e(this.innerText);
            await t(n);
          }),
          a.insertBefore(r, c[0]),
          c.length >= 10 && c[c.length - 1].remove();
      })(n.name);
  }
  !(async function () {
    const n = await (async function () {
      let e = "https://get.geojs.io/v1/ip/geo.json",
        t = await fetch(e),
        n = await t.json();
      return (
        (e = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${n.latitude}&lon=${n.longitude}&appid=458b6f24d9bec1db57c2f337dc35dbcc`),
        (t = await fetch(e)),
        (n = await t.json()),
        n
      );
    })();
    await t(n),
      document.querySelector("#submit").addEventListener("click", async () => {
        const n = document.querySelector(".city"),
          a = await e(n.value);
        await t(a);
      });
  })();
})();
