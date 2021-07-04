import{d as e}from"./appState.78af13dd.js";import{o as t,c as n,a as o,u as a,j as s,h as l,r,t as d}from"./vendor.1c3aff63.js";import{d as u}from"./deviceState.a78d056a.js";const c={class:"slide-to-unlock",ref:"container"},i=o("svg",{class:"arrow",fill:"none",viewBox:"0 0 160 160"},[o("path",{d:"M6 54h81V26l67 54-67 54v-28H6V54z"})],-1),v=o("div",{class:"text"},"slide to unlock",-1);const m={setup(){const{deviceUnlocked:e}=u();document.addEventListener("touchmove",(e=>e.preventDefault()),{passive:!1});const t=a(),n=s(null),o=s(null);let r=null,d=null,c=s(null),i=s(),v="ontouchstart"in document.documentElement;function m(e){return!0===v?e.touches[0].pageX:e.clientX}function g(e){r=n.value.getBoundingClientRect(),d=o.value.getBoundingClientRect();var t=m(e);c={start:d.left-r.left,mouseStart:t,newX:0},o.value.classList.add("dragging"),document.addEventListener("mousemove",f,!1),document.addEventListener("touchmove",f,!1),document.addEventListener("mouseup",p),document.addEventListener("touchend",p)}function p(e){o.value.classList.remove("dragging"),!1!==e&&(o.value.style.left="0px",i.value=0),document.removeEventListener("mousemove",f,!1),document.removeEventListener("touchmove",f,!1),document.removeEventListener("mouseup",p),document.removeEventListener("touchend",p),document.removeEventListener("touchmove",(e=>e.preventDefault()))}function f(n){var a,s,l,u=m(n)-c.mouseStart,v=r.width-d.width-7,f=c.start+u;a=f,s=0,l=v,f=Math.min(Math.max(a,s),l);o.value.style.left=f+"px",i.value=f,f>=v&&(o.value.classList.remove("unlocked"),p(!1),o.value.removeEventListener("mousedown",g),o.value.removeEventListener("touchstart",g),e(!0),t.push({name:"homeScreen"}))}return l((()=>e(!1))),{container:n,toggle:o,dragStart:g,sliderStyle:i}},render:function(e,a,s,l,r,d){return t(),n("div",c,[o("div",{class:"toggle",ref:"toggle",onMousedown:a[1]||(a[1]=(...e)=>l.dragStart&&l.dragStart(...e)),onTouchstartPassive:a[2]||(a[2]=(...e)=>l.dragStart&&l.dragStart(...e))},[i],544),o("div",{class:"overlay",style:{opacity:(l.sliderStyle/300).toFixed(2)}},null,4),v],512)}},g={class:"view view-lockscreen"},p={class:"top-panel panel-glow"},f={class:"time"},h={class:"date"},L={class:"bottom-panel panel-glow"};const E={name:"LockScreen",components:{slideToUnlock:m},setup:()=>({dateTime:e}),render:function(e,a,s,l,u,c){const i=r("slideToUnlock");return t(),n("div",g,[o("div",p,[o("div",f,d(l.dateTime.time),1),o("div",h,d(l.dateTime.date),1)]),o("div",L,[o(i)])])}};export default E;