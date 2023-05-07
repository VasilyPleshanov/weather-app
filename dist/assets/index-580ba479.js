(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const _=async r=>{try{return await(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r}&appid=1a8b3272acee1362eaa9611b0e1ba92f&lang=ru&units=metric`)).json()}catch(t){console.error(t)}},u=async r=>{try{return await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${r}&appid=1a8b3272acee1362eaa9611b0e1ba92f&lang=ru&units=metric&cnt=40`)).json()}catch(t){console.error(t)}},d=r=>{const t=document.createElement("div");t.classList.add("weather__modal","modal-weather");const a=`
    <p class="modal-weather__text">${r}</p>
  `;return t.innerHTML=a,t},b=r=>{const t=document.createElement("header");t.classList.add("weather__header","header-weather");const a=`
    <div class="header-weather__container">
      <div class="header-weather__city city-weather">
        <h1 class="city-weather__name">${r.name}</h1>
        <div class="city-weather__inner">
        
          <form class="search">
            <input class="search__input">
            <input class="search__btn" type="submit" value="OK"/>
            <p class="search__error"><p/>
          </form>
          
          <button class="city-weather__change"><i class="fa-solid fa-magnifying-glass"></i></button>
          <button class="city-weather__location"><i class="fa-solid fa-location-arrow"></i></i><span>Мое местоположение</span></button>
        </div>
      </div>
    </div>
  `;t.innerHTML=a;const s=t.querySelector(".search"),e=t.querySelector(".search__input"),o=t.querySelector(".city-weather__change"),i=t.querySelector(".city-weather__location"),n=t.querySelector(".city-weather__name");return i.addEventListener("click",()=>{g()}),o.addEventListener("click",()=>{s.classList.add("_show"),o.classList.add("_hide"),n.classList.add("_hide"),i.classList.add("_hide"),setTimeout(()=>{e.focus()},0)}),s.addEventListener("submit",async c=>{if(c.preventDefault(),!!e.value)try{const m=await _(e.value.trimEnd()),L=await u(e.value.trimEnd());if(m.message){const l=d("Город не найден, попробуйте снова");document.querySelector(".weather").append(l),setTimeout(()=>{l.classList.add("show")},500),setTimeout(()=>{l.classList.remove("show")},5e3),setTimeout(()=>{l.remove()},6e3)}else localStorage.setItem("city",JSON.stringify(e.value.trimEnd())),h(m,L)}catch{}}),window.onclick=c=>{c.target.classList.contains("search__input")||c.target.classList.contains("search__btn")||c.target.classList.contains("search__error")||c.target.classList.contains("city-weather__location")||c.target.classList.contains("city-weather__change")||c.target.parentNode.classList.contains("city-weather__change")||(s.classList.remove("_show"),o.classList.remove("_hide"),n.classList.remove("_hide"),i.classList.remove("_hide"),e.value="")},t},$=r=>r.split(" ")[1].split("").slice(0,5).join(""),M=r=>{let t="";const a=(s,e)=>`
      <li class="forecast-hourly__item">
        <p class="forecast-hourly__time">${$(s.list[e].dt_txt)}</p>
        <img class="forecast-hourly__icon" src="${`https://openweathermap.org/img/w/${s.list[e].weather[0].icon}.png`}" />
        <div class="forecast-hourly__temperature forecast-hourly-temperature">
          <div class="feeling-block__temperature-item temperature-item">
            <h2 class="temperature-item__temperature">${Math.floor(s.list[e].main.temp)}</h2>
            <div class="temperature-item__units">
              <p class="temperature-item__deg">o</p>
              <p class="temperature-item__unit">C</p>
            </div>
          </div>
        </div>
      </li>
     `;return r.list.forEach((s,e)=>{e>7||(t+=a(r,e))}),t},w=r=>r.charAt(0).toUpperCase()+r.slice(1),p=()=>new Date().toISOString().split("").splice(0,10).join(""),f=r=>{let t=r.split(" ")[0].split("-")[2].split(""),a="";return t[0]=="0"?a=t[1]:a=t.join(""),a},v=r=>{const t=["янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"];let a=r.split(" ")[0].split("-")[1].split(""),s="";return a[0]=="0"?s=a[1]:s=a.join(""),t.filter((o,i,n)=>{if(i+1==s)return!0})},y=r=>{const t=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];let a=r.split(" ")[0].split("-"),s=r.split(" ")[0].split("-")[1].split(""),e="";s[0]=="0"?e=s[1]:e=s.join("");let o=new Date(a[0],e-1,a[2]);return t[o.getDay()]},S=(r,t)=>{const a=document.createElement("section");a.classList.add("weather__now","now-weather");const s=`
      <div class="now-weather__container _container">
        <div class="now-weather__wrapper">
          <div class="now-weather__inner">
            <div class="now-weather__temperature-block temperature-block">
              <div class="temperature-block__temperature-item temperature-item">
                <h2 class="temperature-item__temperature">${Math.floor(r.main.temp)}</h2>
                <div class="temperature-item__units">
                  <p class="temperature-item__deg">o</p>
                  <p class="temperature-item__unit">C</p>
                </div>
              </div>
              <img class="now-weather__icon" src="${`https://openweathermap.org/img/w/${r.weather[0].icon}.png`}" />
            </div>
            <div class="now-weather__description-block">
              <p class="now-weather__description">${w(r.weather[0].description)}</p>
              <div class="now-weather__feeling-block feeling-block">
                <p class="feeling-block__feeling-text">Ощущается как</p>
                <div class="feeling-block__temperature-item temperature-item">
                  <h2 class="temperature-item__temperature">${Math.floor(r.main.feels_like)}</h2>
                  <div class="temperature-item__units">
                    <p class="temperature-item__deg">o</p>
                    <p class="temperature-item__unit">C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="now-weather__info">
            <div class="now-weather__date-block date-block">
              <p class="date-block__number">${f(p())}</p>
              <p class="date-block__month">${v(p())}</p>
              <p class="date-block__week-day">${y(p())}</p>
            </div>
            <div class="now-weather__max-min-temperature max-min-temperature">
              <div class="max-min-temperature__max-temperature max-temperature">
                <div class="max-temperature__temperature-item temperature-item">
                  <h2 class="temperature-item__temperature">${Math.floor(r.main.temp_max)}</h2>
                  <div class="temperature-item__units">
                    <p class="temperature-item__deg">o</p>
                    <p class="temperature-item__unit">C</p>
                  </div>
                </div>
              </div>
              <span>/</span>
              <div class="max-min-temperature__max-temperature min-temperature">
                <div class="min-temperature__temperature-item temperature-item">
                  <h2 class="temperature-item__temperature">${Math.floor(r.main.temp_min)}</h2>
                  <div class="temperature-item__units">
                    <p class="temperature-item__deg">o</p>
                    <p class="temperature-item__unit">C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="now-weather__forecast-hourly forecast-hourly">
          <ul class="forecast-hourly__list">
            ${M(t)}
          </ul>
        </div>
      </div>
    `;return a.innerHTML=s,a},T=r=>{let t="";const a=(s,e)=>`
      <li class="forecast-weather__item">
        <div class="forecast-weather__day">
          <p class="forecast-weather__week-day">${y(s.list[e].dt_txt)}</p>
          <p class="forecast-weather__date">${f(s.list[e].dt_txt)} ${v(s.list[e].dt_txt)}</p>
        </div>
        <img class="forecast-weather__icon" src="${`https://openweathermap.org/img/w/${s.list[e].weather[0].icon}.png`}" />
        <div class="forecast-weather__max-min-temperature max-min-temperature">
          <div class="max-min-temperature__max-temperature max-temperature">
            <div class="max-temperature__temperature-item temperature-item">
              <h2 class="temperature-item__temperature">${Math.floor(s.list[e].main.temp_max)}</h2>
              <div class="temperature-item__units">
                <p class="temperature-item__deg">o</p>
                <p class="temperature-item__unit">C</p>
              </div>
            </div>
          </div>
          <span>/</span>
          <div class="max-min-temperature__max-temperature min-temperature">
            <div class="min-temperature__temperature-item temperature-item">
              <h2 class="temperature-item__temperature">${Math.floor(s.list[e].main.temp_min)}</h2>
              <div class="temperature-item__units">
                <p class="temperature-item__deg">o</p>
                <p class="temperature-item__unit">C</p>
              </div>
            </div>
          </div>
        </div>
        <p class="forecast-weather__description">${w(s.list[e].weather[0].description)}</p>
      </li>
     `;return r.list.forEach((s,e)=>{(e===9||e===17||e===25||e===33)&&(t+=a(r,e))}),t},k=r=>{const t=document.createElement("section");t.classList.add("weather__forecast","forecast-weather");const a=`
    <div class="forecast-weather__container">
      <ul class="forecast-weather__list">
        ${T(r)}
      </ul>
    </div>
  `;return t.innerHTML=a,t},D=(r,t)=>{const a=document.createElement("main");a.classList.add("weather__main");const s=S(r,t),e=k(t);return a.append(s,e),a},H=r=>{const t=document.createElement("footer");t.classList.add("weather__footer","footer-weather");const a=`
    <div class="footer-weather__container">
      <ul class="footer-weather__list">
        <li class="footer-weather__item">
          <p class="footer-weather__title">Влажность</p>
          <p class="footer-weather__text">${r.main.humidity} %</p>
        </li>
        <li class="footer-weather__item">
          <p class="footer-weather__title">Давление</p>
          <p class="footer-weather__text">${r.main.pressure} мм рт. ст.</p>
        </li>
        <li class="footer-weather__item">
          <p class="footer-weather__title">Ветер</p>
          <p class="footer-weather__text">${Math.floor(r.wind.speed)} м/с</p>
        </li>
        <li class="footer-weather__item">
          <p class="footer-weather__title">Облачность</p>
          <p class="footer-weather__text">${r.clouds.all} %</p>
        </li>
      </ul>
    </div>
  `;return t.innerHTML=a,t},h=(r,t)=>{document.querySelector("#root").innerHTML="";const a=document.createElement("div");a.classList.add("weather");const s=b(r),e=D(r,t),o=H(r);a.append(s,e,o),document.querySelector("#root").append(a)},g=()=>{const r={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},t=async s=>{const e=s.coords,i=await(await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${e.latitude}&lon=${e.longitude}&lang=ru&apiKey=e0502ac96abf4f3190d9ac7c5a80cb44`)).json(),n=await _(i.features[0].properties.city),c=await u(i.features[0].properties.city);localStorage.setItem("city",JSON.stringify(i.features[0].properties.city)),h(n,c)},a=async s=>{const e="Сочи",o=await _(JSON.parse(localStorage.getItem("city"))||e),i=await u(JSON.parse(localStorage.getItem("city"))||e),n=d("Включите службу определения местоположения для получения метеорологических даных для текущего местоположения");h(o,i),document.querySelector(".weather").append(n),setTimeout(()=>{document.querySelector(".modal-weather").classList.add("show")},500),setTimeout(()=>{document.querySelector(".modal-weather").classList.remove("show")},5e3),setTimeout(()=>{n.remove()},6e3)};navigator.geolocation.getCurrentPosition(t,a,r)},N=()=>{g()};N();
