!function(e){function t(t){for(var o,c,i=t[0],a=t[1],u=t[2],s=0,f=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(d&&d(t);f.length;)f.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],o=!0,i=1;i<n.length;i++){var a=n[i];0!==r[a]&&(o=!1)}o&&(l.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={0:0},l=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=a;l.push([3,1]),n()}([function(e,t,n){var o=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var l={insert:"head",singleton:!1};o(r,l);e.exports=r.locals||{}},,function(e,t,n){},function(e,t,n){"use strict";function o(e){e.scrollIntoView({behavior:"smooth",block:"start"})}n.r(t);n(0);let r;function l(){let e=document.querySelector("html"),t=document.querySelector(".lang");"RU"===r?(document.title="Даниил Парфенов",e.lang="ru"):(document.title="Daniil Parfenov",e.lang="eu"),t.childNodes[1].innerText=r}window&&(window.onload=function(){!function(){let e=document.querySelector(".nav__list"),t=document.querySelector(".first-screen"),n=document.querySelector(".skills__title"),r=document.querySelector(".education"),l=document.querySelector(".portfolio");e.childNodes[0].addEventListener("click",()=>o(t)),e.childNodes[1].addEventListener("click",()=>o(n)),e.childNodes[2].addEventListener("click",()=>o(r)),e.childNodes[3].addEventListener("click",()=>o(l))}(),function(){let e=document.querySelector(".header"),t=document.querySelector(".first-screen__dropdown"),n=document.querySelector(".to-top-arrow");t.addEventListener("click",()=>o(e)),n.addEventListener("click",()=>o(e)),window.onscroll=()=>{window.scrollY>=window.innerHeight+50?n.style.display="block":n.style.display="none"}}(),r=localStorage.getItem("lang")||"RU",l();let e=document.querySelector(".lang"),t=document.querySelector(".lang__list");e.addEventListener("click",()=>function(e){let t=e.className;if(-1!==e.className.indexOf("select")){let n=t.replace(/\w[select]/g,"");e.className=n}else e.className=t+" select"}(e)),t.childNodes.forEach(e=>{e.addEventListener("click",()=>function(e){let t=document.querySelector(".lang");if(document.querySelector(".lang__list").childNodes.forEach(e=>{-1!==e.className.indexOf("active")&&(e.className=e.className.replace(/\w[active]/g,""))}),e.innerText!==r){let n=e.innerText;r=n,localStorage.setItem("lang",n),t.childNodes[1].innerText=r,l()}}(e))})})}]);