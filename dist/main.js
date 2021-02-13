(() => {
  "use strict";
  async function e(e) {
    let t = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${e}&appid=458b6f24d9bec1db57c2f337dc35dbcc`,
      n = await fetch(t);
    return await n.json();
  }
  async function t() {
    const t = await e(this.innerText);
    await n(t);
  }
  async function n(e) {
    const n = document.querySelector(".weather");
    n.innerHTML = "";
    const c = document.querySelector(".map");
    c.innerHTML = "";
    const a = document.createElement("p");
    if (void 0 === e.name)
      return (
        (a.innerText = "Can't find this city, try again."),
        void n.appendChild(a)
      );
    (a.innerText = `Showing weather for ${e.name}`), n.appendChild(a);
    const o = document.createElement("p");
    (o.innerText = `Current weather is ${e.main.temp} degrees of Celcium`),
      n.appendChild(o);
    const i = document.createElement("img"),
      d = e.weather[0].icon;
    (i.src = `https://openweathermap.org/img/wn/${d}@2x.png`),
      n.appendChild(i),
      (document.querySelector(
        "#favicon"
      ).href = `https://openweathermap.org/img/wn/${d}@2x.png`);
    const r = document.createElement("img");
    (r.src = `https://static-maps.yandex.ru/1.x/?ll=${e.coord.lon},${e.coord.lat}&size=450,450&z=11&l=map`),
      c.appendChild(r),
      (function (e) {
        const n = document.querySelector(".history"),
          c = n.querySelectorAll("p");
        if (
          Array.from(c)
            .map((e) => e.innerText)
            .includes(e)
        )
          return;
        const a = document.createElement("p");
        (a.innerText = e),
          a.addEventListener("click", t),
          n.insertBefore(a, c[0]),
          c.length >= 10 && c[c.length - 1].remove();
      })(e.name);
  }
  async function c(e) {
    const t = await fetch(e);
    return await t.json();
  }
  !(async function () {
    !(function () {
      const e = document.createElement("input");
      (e.type = "text"), (e.className = "city"), document.body.appendChild(e);
      const t = document.createElement("button");
      (t.id = "submit"), (t.innerText = "Submit"), document.body.appendChild(t);
      const n = document.createElement("div");
      (n.className = "weather"), document.body.appendChild(n);
      const c = document.createElement("div");
      (c.className = "map"), document.body.appendChild(c);
      const a = document.createElement("div");
      (a.className = "history"), document.body.appendChild(a);
      const o = document.createElement("link");
      (o.id = "favicon"), document.head.appendChild(o);
      const i = document.createElement("title");
      (i.innerText = "Weather"), document.head.appendChild(i);
    })();
    const t = await (async function () {
      let e = await c("https://get.geojs.io/v1/ip/geo.json");
      const t = e.latitude,
        n = e.longitude;
      return await c(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${t}&lon=${n}&appid=458b6f24d9bec1db57c2f337dc35dbcc`
      );
    })();
    await n(t),
      document.querySelector("#submit").addEventListener("click", async () => {
        const t = document.querySelector(".city"),
          c = await e(t.value);
        await n(c);
      });
  })();
})();
