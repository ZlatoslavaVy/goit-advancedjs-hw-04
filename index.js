import{a as u,S as m}from"./assets/vendor-7WFMPUiZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(o){return u.get("https://pixabay.com/api/",{params:{key:"56277976-7813695b076e89130ccc466e1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const g=new m(".gallery a"),i={gallery:document.querySelector(".gallery")};function y(o){const t=o.map(s=>{const{likes:a,views:e,comments:r,downloads:l,webformatURL:n,largeImageURL:c,tags:f}=s;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${c}">
          <img class="gallery-image" src="${n}" alt="${f}"/>
        </a>
        <div class="gallery-info">
          <p class="gallery-info-item">
            <b>Likes</b>
            ${a}
          </p>
          <p class="gallery-info-item">
            <b>Views</b>
            ${e}
          </p>
          <p class="gallery-info-item">
            <b>Comments</b>
            ${r}
          </p>
          <p class="gallery-info-item">
            <b>Downloads</b>
            ${l}
          </p>
        </div>
      </li>
    `}).join("");i.gallery.innerHTML=t,g.refresh()}function d(){i.gallery.innerHTML=""}const h=document.querySelector(".form");h.addEventListener("submit",o=>{o.preventDefault();const t=o.target.elements["search-text"].value.trim();t!==""&&(d(),p(t).then(s=>{y(s.hits)}).catch(s=>console.log(s)))});
//# sourceMappingURL=index.js.map
