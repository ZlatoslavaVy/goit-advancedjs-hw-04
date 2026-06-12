import{a as m,S as d,i as p}from"./assets/vendor-BezXTN6Z.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function y(i){return m.get("https://pixabay.com/api/",{params:{key:"56277976-7813695b076e89130ccc466e1",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const l={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let n=null;function g(i){const t=i.map(o=>{const{likes:a,views:e,comments:r,downloads:s,webformatURL:c,largeImageURL:u,tags:f}=o;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${u}">
          <img class="gallery-image" src="${c}" alt="${f}"/>
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
            ${s}
          </p>
        </div>
      </li>
    `}).join("");l.gallery.innerHTML=t,n?n.refresh():n=new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function h(){l.gallery.innerHTML=""}function b(){l.loader.classList.remove("is-hidden")}function L(){l.loader.classList.add("is-hidden")}const v=document.querySelector(".form");v.addEventListener("submit",i=>{i.preventDefault();const t=i.target.elements["search-text"].value.trim();t!==""&&(h(),b(),y(t).then(o=>{if(o.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits)}).catch(o=>console.log(o)).finally(()=>{L()}))});
//# sourceMappingURL=index.js.map
