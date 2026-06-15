import{a as S,S as P,i as m}from"./assets/vendor-CIF6YjI2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=u(e);fetch(e.href,r)}})();const f=15;async function y(o,t){return(await S.get("https://pixabay.com/api/",{params:{key:"56277976-7813695b076e89130ccc466e1",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:f}})).data}const s={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};let a=null;function g(o){const t=o.map(e=>{const{likes:r,views:n,comments:w,downloads:v,webformatURL:M,largeImageURL:q,tags:B}=e;return`
      <li class="gallery-item">
        <a class="gallery-link" href="${q}">
          <img class="gallery-image" src="${M}" alt="${B}"/>
        </a>
        <div class="gallery-info">
          <p class="gallery-info-item">
            <b>Likes</b>
            ${r}
          </p>
          <p class="gallery-info-item">
            <b>Views</b>
            ${n}
          </p>
          <p class="gallery-info-item">
            <b>Comments</b>
            ${w}
          </p>
          <p class="gallery-info-item">
            <b>Downloads</b>
            ${v}
          </p>
        </div>
      </li>
    `}).join("");s.gallery.insertAdjacentHTML("beforeend",t);const l=s.gallery.querySelector(".gallery-item").getBoundingClientRect().height;return a?a.refresh():a=new P(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),l}function $(){s.gallery.innerHTML="",a&&(a.destroy(),a=null)}function p(){s.loader.classList.remove("is-hidden")}function h(){s.loader.classList.add("is-hidden")}function b(){s.loadMoreBtn.classList.remove("is-hidden")}function d(){s.loadMoreBtn.classList.add("is-hidden")}const L={form:document.querySelector(".form"),loadMoreBtn:document.querySelector(".load-more-btn")};let i=1,c="";L.form.addEventListener("submit",o=>{o.preventDefault(),c=o.target.elements["search-text"].value.trim(),i=1,c!==""&&($(),d(),p(),y(c,i).then(t=>{if(t.hits.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits),i*f<t.totalHits?b():d()}).catch(t=>console.log(t)).finally(()=>{h()}))});const H=async()=>{try{p(),d(),i++;const o=await y(c,i),t=g(o.hits);window.scrollBy({top:t*2,behavior:"smooth"}),i*f<o.totalHits?b():(d(),m.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){console.log(o)}finally{h()}};L.loadMoreBtn.addEventListener("click",H);
//# sourceMappingURL=index.js.map
