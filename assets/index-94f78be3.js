(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const _=async r=>{try{return await(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r}&appid=1a8b3272acee1362eaa9611b0e1ba92f&lang=ru&units=metric`)).json()}catch(e){console.error(e)}},u=async r=>{try{return await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${r}&appid=1a8b3272acee1362eaa9611b0e1ba92f&lang=ru&units=metric&cnt=40`)).json()}catch(e){console.error(e)}},d=r=>{const e=document.createElement("div");e.classList.add("weather__modal","modal-weather");const s=`
    <p class="modal-weather__text">${r}</p>
  `;return e.innerHTML=s,e},b=r=>{const e=document.createElement("header");e.classList.add("weather__header","header-weather");const s=`
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
  `;e.innerHTML=s;const o=e.querySelector(".search"),t=e.querySelector(".search__input"),a=e.querySelector(".city-weather__change"),i=e.querySelector(".city-weather__location"),c=e.querySelector(".city-weather__name");return i.addEventListener("click",()=>{g()}),a.addEventListener("click",()=>{o.classList.add("_show"),a.classList.add("_hide"),c.classList.add("_hide"),i.classList.add("_hide"),setTimeout(()=>{t.focus()},0)}),o.addEventListener("submit",async n=>{if(n.preventDefault(),!!t.value)try{const m=await _(t.value.trimEnd()),L=await u(t.value.trimEnd());if(m.message){const l=d("Город не найден, попробуйте снова");document.querySelector(".weather").append(l),setTimeout(()=>{l.classList.add("show")},500),setTimeout(()=>{l.classList.remove("show")},5e3),setTimeout(()=>{l.remove()},6e3)}else localStorage.setItem("city",JSON.stringify(t.value.trimEnd())),h(m,L)}catch{}}),window.addEventListener("click",n=>{n.target.classList.contains("search__input")||n.target.classList.contains("search__btn")||n.target.classList.contains("search__error")||n.target.classList.contains("city-weather__location")||n.target.classList.contains("city-weather__change")||n.target.parentNode.classList.contains("city-weather__change")||(o.classList.remove("_show"),a.classList.remove("_hide"),c.classList.remove("_hide"),i.classList.remove("_hide"),t.value="")}),e},$=r=>r.split(" ")[1].split("").slice(0,5).join(""),M=r=>{let e="";const s=(t,a)=>`
      <li class="forecast-hourly__item">
        <p class="forecast-hourly__time">${$(t.list[a].dt_txt)}</p>
        <img class="forecast-hourly__icon" src="${`https://openweathermap.org/img/w/${t.list[a].weather[0].icon}.png`}" />
        <div class="forecast-hourly__temperature forecast-hourly-temperature">
          <div class="feeling-block__temperature-item temperature-item">
            <h2 class="temperature-item__temperature">${Math.floor(t.list[a].main.temp)}</h2>
            <div class="temperature-item__units">
              <p class="temperature-item__deg">o</p>
              <p class="temperature-item__unit">C</p>
            </div>
          </div>
        </div>
      </li>
     `;return r.list.forEach((t,a)=>{a>7||(e+=s(r,a))}),`
    <ul class="forecast-hourly__list">${e}</ul>
  `},w=r=>r.charAt(0).toUpperCase()+r.slice(1),p=()=>new Date().toISOString().split("").splice(0,10).join(""),f=r=>{let e=r.split(" ")[0].split("-")[2].split(""),s="";return e[0]=="0"?s=e[1]:s=e.join(""),s},v=r=>{const e=["янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек"];let s=r.split(" ")[0].split("-")[1].split(""),o="";return s[0]=="0"?o=s[1]:o=s.join(""),e.filter((a,i,c)=>{if(i+1==o)return!0})},y=r=>{const e=["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];let s=r.split(" ")[0].split("-"),o=r.split(" ")[0].split("-")[1].split(""),t="";o[0]=="0"?t=o[1]:t=o.join("");let a=new Date(s[0],t-1,s[2]);return e[a.getDay()]},S=(r,e)=>{const s=document.createElement("section");s.classList.add("weather__now","now-weather");const o=`
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
          ${M(e)}   
        </div>
      </div>
    `;return s.innerHTML=o,s},T=r=>{let e="";const s=(t,a)=>`
      <li class="forecast-weather__item">
        <div class="forecast-weather__day">
          <p class="forecast-weather__week-day">${y(t.list[a].dt_txt)}</p>
          <p class="forecast-weather__date">${f(t.list[a].dt_txt)} ${v(t.list[a].dt_txt)}</p>
        </div>
        <img class="forecast-weather__icon" src="${`https://openweathermap.org/img/w/${t.list[a].weather[0].icon}.png`}" />
        <div class="forecast-weather__max-min-temperature max-min-temperature">
          <div class="max-min-temperature__max-temperature max-temperature">
            <div class="max-temperature__temperature-item temperature-item">
              <h2 class="temperature-item__temperature">${Math.floor(t.list[a].main.temp_max)}</h2>
              <div class="temperature-item__units">
                <p class="temperature-item__deg">o</p>
                <p class="temperature-item__unit">C</p>
              </div>
            </div>
          </div>
          <span>/</span>
          <div class="max-min-temperature__max-temperature min-temperature">
            <div class="min-temperature__temperature-item temperature-item">
              <h2 class="temperature-item__temperature">${Math.floor(t.list[a].main.temp_min)}</h2>
              <div class="temperature-item__units">
                <p class="temperature-item__deg">o</p>
                <p class="temperature-item__unit">C</p>
              </div>
            </div>
          </div>
        </div>
        <p class="forecast-weather__description">${w(t.list[a].weather[0].description)}</p>
      </li>
     `;return r.list.forEach((t,a)=>{(a===9||a===17||a===25||a===33)&&(e+=s(r,a))}),`
    <ul class="forecast-weather__list">${e}</ul>
  `},H=r=>{const e=document.createElement("section");e.classList.add("weather__forecast","forecast-weather");const s=`
    <div class="forecast-weather__container">
      ${T(r)}
    </div>
  `;return e.innerHTML=s,e},k=(r,e)=>{const s=document.createElement("main");s.classList.add("weather__main");const o=S(r,e),t=H(e);return s.append(o,t),s},D=r=>{const e=document.createElement("footer");e.classList.add("weather__footer","footer-weather");const s=`
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
  `;return e.innerHTML=s,e},h=(r,e)=>{document.querySelector("#root").innerHTML="";const s=document.createElement("div");s.classList.add("weather");const o=b(r),t=k(r,e),a=D(r);s.append(o,t,a),document.querySelector("#root").append(s)},g=()=>{const r={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},e=async o=>{const t=o.coords,i=await(await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${t.latitude}&lon=${t.longitude}&lang=ru&apiKey=e0502ac96abf4f3190d9ac7c5a80cb44`)).json(),c=await _(i.features[0].properties.city),n=await u(i.features[0].properties.city);localStorage.setItem("city",JSON.stringify(i.features[0].properties.city)),h(c,n)},s=async o=>{const t="Сочи",a=await _(JSON.parse(localStorage.getItem("city"))||t),i=await u(JSON.parse(localStorage.getItem("city"))||t),c=d("Включите службу определения местоположения для получения метеорологических даных для текущего местоположения");h(a,i),document.querySelector(".weather").append(c),setTimeout(()=>{c.classList.add("show")},500),setTimeout(()=>{c.classList.remove("show")},5e3),setTimeout(()=>{c.remove()},6e3)};navigator.geolocation.getCurrentPosition(e,s,r)},W=()=>{g()};W();
