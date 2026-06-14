/* empty css                      */import{a as q,S as $,i as n}from"./assets/vendor-CIF6YjI2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const R="https://pixabay.com/api/",B="56210453-84943403f93b7b8a96293ef50",E=15;async function d(t,s){return(await q.get(R,{params:{key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:E,page:s}})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),M=new $(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){const s=t.map(({webformatURL:r,largeImageURL:l,tags:e,likes:o,views:i,comments:S,downloads:P})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li class="info-item"><span class="info-label">Likes</span><span class="info-value">${o}</span></li>
            <li class="info-item"><span class="info-label">Views</span><span class="info-value">${i}</span></li>
            <li class="info-item"><span class="info-label">Comments</span><span class="info-value">${S}</span></li>
            <li class="info-item"><span class="info-label">Downloads</span><span class="info-value">${P}</span></li>
          </ul>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",s),M.refresh()}function A(){f.innerHTML=""}function g(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}function L(){m.classList.remove("is-hidden")}function b(){m.classList.add("is-hidden")}const w=15,v=document.querySelector(".form"),O=document.querySelector(".load-more");let c="",a=1,u=0;v.addEventListener("submit",_);O.addEventListener("click",x);async function _(t){t.preventDefault();const s=t.currentTarget.elements["search-text"].value.trim();if(s===""){n.warning({message:"Please enter a search query!",position:"topRight"});return}c=s,a=1,A(),b(),g();try{const r=await d(c,a);if(u=r.totalHits,!r.hits||r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(r.hits),a*w<u?L():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(r){n.error({message:`Something went wrong: ${r.message}`,position:"topRight"})}finally{y(),v.reset()}}async function x(){a+=1,g(),b();try{const t=await d(c,a);h(t.hits),T(),a*w>=u?n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):L()}catch(t){n.error({message:`Something went wrong: ${t.message}`,position:"topRight"})}finally{y()}}function T(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:s}=t.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
