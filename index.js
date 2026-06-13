import{a as L,S as b,i as w}from"./assets/vendor-CIF6YjI2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function m(o,r){return(await L.get("https://pixabay.com/api/",{params:{key:"56277976-7813695b076e89130ccc466e1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const a={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let c=null;function f(o){const r=o.map(i=>{const{likes:n,views:e,comments:t,downloads:s,webformatURL:y,largeImageURL:g,tags:h}=i;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${g}">
          <img class="gallery-image" src="${y}" alt="${h}"/>
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
            ${t}
          </p>
          <p class="gallery-info-item">
            <b>Downloads</b>
            ${s}
          </p>
        </div>
      </li>
    `}).join("");a.gallery.insertAdjacentHTML("beforeend",r),c?c.refresh():c=new b(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function M(){a.gallery.innerHTML=""}function v(){a.loader.classList.remove("is-hidden")}function q(){a.loader.classList.add("is-hidden")}function S(){a.loadMoreBtn.classList.remove("is-hidden")}function u(){a.loadMoreBtn.classList.add("is-hidden")}const p={form:document.querySelector(".form"),loadMoreBtn:document.querySelector(".load-more-btn")};let d=1,l="";p.form.addEventListener("submit",o=>{o.preventDefault(),l=o.target.elements["search-text"].value.trim(),d=1,l!==""&&(M(),u(),v(),m(l).then(r=>{if(r.hits.length===0){w.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(r.hits),u(),S()}).catch(r=>console.log(r)).finally(()=>{q()}))});const B=async()=>{try{d++;const o=await m(l,d);f(o.hits)}catch(o){console.log(o)}};p.loadMoreBtn.addEventListener("click",B);
//# sourceMappingURL=index.js.map
