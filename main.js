(()=>{"use strict";async function e(e){let t=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${e}&appid=458b6f24d9bec1db57c2f337dc35dbcc`,n=await fetch(t);return await n.json()}async function t(){const t=await e(this.innerText);await a(t)}function n(e){const n=document.querySelector(".history"),a=n.querySelectorAll("p");if(Array.from(a).map((e=>e.innerText)).includes(e))return;const c=document.createElement("p");c.innerText=e,c.addEventListener("click",t),n.insertBefore(c,a[0]),a.length>=10&&a[a.length-1].remove()}async function a(e){const t=document.querySelector(".weather");t.innerHTML="";const a=document.querySelector(".map");a.innerHTML="";const c=document.createElement("p");if(void 0===e.name)return c.innerText="Can't find this city, try again.",void t.appendChild(c);c.innerText=`Showing weather for ${e.name}`,t.appendChild(c);const o=document.createElement("p");o.innerText=`Current weather is ${e.main.temp} degrees of Celcium`,t.appendChild(o);const i=document.createElement("img"),r=e.weather[0].icon;i.src=`https://openweathermap.org/img/wn/${r}@2x.png`,t.appendChild(i);const d=document.createElement("img");d.src=`https://static-maps.yandex.ru/1.x/?ll=${e.coord.lon},${e.coord.lat}&size=450,450&z=11&l=map`,a.appendChild(d),n(e.name);let s=JSON.parse(localStorage.getItem("history"));s?.indexOf(e.name)&&s.push(e.name),localStorage.setItem("history",JSON.stringify(s))}async function c(e){const t=await fetch(e);return await t.json()}!async function(){!function(){const e=document.createElement("title");e.innerText="Weather",document.head.appendChild(e);const t=document.createElement("input");t.type="text",t.className="city",document.body.appendChild(t);const n=document.createElement("button");n.id="submit",n.innerText="Submit",document.body.appendChild(n);const a=document.createElement("div");a.className="weather",document.body.appendChild(a);const c=document.createElement("div");c.className="map",document.body.appendChild(c);const o=document.createElement("div");o.className="history",document.body.appendChild(o)}(),function(){let e=localStorage.getItem("history");e?JSON.parse(e).forEach((e=>{n(e)})):(e=[],localStorage.setItem("history",JSON.stringify(e)))}();const t=await async function(){const e=await c("https://get.geojs.io/v1/ip/geo.json"),t=e.latitude,n=e.longitude;return await c(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${t}&lon=${n}&appid=458b6f24d9bec1db57c2f337dc35dbcc`)}();await a(t),document.querySelector("#submit").addEventListener("click",(async()=>{const t=document.querySelector(".city"),n=await e(t.value);await a(n)}))}()})();