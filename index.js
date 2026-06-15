import{a as q,S,i as m}from"./assets/vendor-CIF6YjI2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();async function g(t,r){return(await q.get("https://pixabay.com/api/",{params:{key:"56277976-7813695b076e89130ccc466e1",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const a={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let u=null;function p(t){const r=t.map(l=>{const{likes:n,views:e,comments:o,downloads:i,webformatURL:M,largeImageURL:v,tags:w}=l;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${v}">
          <img class="gallery-image" src="${M}" alt="${w}"/>
        </a>
        <div class="gallery-info">
          <p class="gallery-info-item">
            <b>Likes</b>
            ${n}
          </p>
          <p class="gallery-info-item">
            <b>Views</b>
            ${e}
          </p>
          <p class="gallery-info-item">
            <b>Comments</b>
            ${o}
          </p>
          <p class="gallery-info-item">
            <b>Downloads</b>
            ${i}
          </p>
        </div>
      </li>
    `}).join("");a.gallery.insertAdjacentHTML("beforeend",r),u?u.refresh():u=new S(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function B(){a.gallery.innerHTML=""}function y(){a.loader.classList.remove("is-hidden")}function h(){a.loader.classList.add("is-hidden")}function b(){a.loadMoreBtn.classList.remove("is-hidden")}function d(){a.loadMoreBtn.classList.add("is-hidden")}const L={form:document.querySelector(".form"),loadMoreBtn:document.querySelector(".load-more-btn")};let s=1,c="",f;L.form.addEventListener("submit",t=>{t.preventDefault(),c=t.target.elements["search-text"].value.trim(),s=1,c!==""&&(B(),d(),y(),g(c,s).then(r=>{if(r.hits.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(r.hits),d(),b()}).catch(r=>console.log(r)).finally(()=>{h()}))});const $=async()=>{try{y(),d(),s++,console.log("запит page:",s);const t=await g(c,s);console.log("отримано hits:",t.hits.length),p(t.hits),f=Math.ceil(t.totalHits/15),s>=f?(d(),m.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"})):b()}catch(t){console.log(t)}finally{h()}};L.loadMoreBtn.addEventListener("click",$);
//# sourceMappingURL=index.js.map
