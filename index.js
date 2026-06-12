import{a as m,S as f,i as g}from"./assets/vendor-BezXTN6Z.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(s){return m.get("https://pixabay.com/api/",{params:{key:"56277976-7813695b076e89130ccc466e1",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const y=new f(".gallery a"),l={gallery:document.querySelector(".gallery")};function d(s){const t=s.map(o=>{const{likes:a,views:e,comments:r,downloads:i,webformatURL:n,largeImageURL:c,tags:u}=o;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${c}">
          <img class="gallery-image" src="${n}" alt="${u}"/>
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
            ${i}
          </p>
        </div>
      </li>
    `}).join("");l.gallery.innerHTML=t,y.refresh()}function h(){l.gallery.innerHTML=""}const b=document.querySelector(".form");b.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();t!==""&&(h(),p(t).then(o=>{if(o.hits.length===0){g.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}d(o.hits)}).catch(o=>console.log(o)))});
//# sourceMappingURL=index.js.map
