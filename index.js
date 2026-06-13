import{a as m,S as p,i as d}from"./assets/vendor-CIF6YjI2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function g(s,t){return(await m.get("https://pixabay.com/api/",{params:{key:"56277976-7813695b076e89130ccc466e1",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const l={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let n=null;function y(s){const t=s.map(o=>{const{likes:i,views:e,comments:r,downloads:a,webformatURL:c,largeImageURL:u,tags:f}=o;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${u}">
          <img class="gallery-image" src="${c}" alt="${f}"/>
        </a>
        <div class="gallery-info">
          <p class="gallery-info-item">
            <b>Likes</b>
            ${i}
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
            ${a}
          </p>
        </div>
      </li>
    `}).join("");l.gallery.innerHTML=t,n?n.refresh():n=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function h(){l.gallery.innerHTML=""}function b(){l.loader.classList.remove("is-hidden")}function L(){l.loader.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();t!==""&&(h(),b(),g(t).then(o=>{if(o.hits.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(o.hits)}).catch(o=>console.log(o)).finally(()=>{L()}))});
//# sourceMappingURL=index.js.map
