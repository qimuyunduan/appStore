!function(){function e(e){var t,n;return"x"===e?(t=f.clientWidth,n=window.innerWidth):"y"===e&&(t=f.clientHeight,n=window.innerHeight),n>t?n:t}function t(){return window.pageXOffset||f.scrollLeft}function n(){return window.pageYOffset||f.scrollTop}function i(){o()}function o(){[].slice.call(x).forEach(function(e,t){e.addEventListener("click",function(n){return n.preventDefault(),L||b===t?!1:(L=!0,b=t,classie.add(e,"grid__item--loading"),void setTimeout(function(){classie.add(e,"grid__item--animate"),setTimeout(function(){s(e)},500)},1e3))})}),E.addEventListener("click",function(){r()}),document.addEventListener("keydown",function(e){if(!L&&-1!==b){var t=e.keyCode||e.which;27===t&&(e.preventDefault(),"activeElement"in document&&document.activeElement.blur(),r())}}),W.addEventListener("click",function(){classie.has(w,"sidebar--open")||classie.add(w,"sidebar--open")}),k.addEventListener("click",function(){classie.has(w,"sidebar--open")&&classie.remove(w,"sidebar--open")})}function s(t){var i=document.createElement("div");i.className="placeholder",i.style.WebkitTransform="translate3d("+(t.offsetLeft-5)+"px, "+(t.offsetTop-5)+"px, 0px) scale3d("+t.offsetWidth/y.offsetWidth+","+t.offsetHeight/e("y")+",1)",i.style.transform="translate3d("+(t.offsetLeft-5)+"px, "+(t.offsetTop-5)+"px, 0px) scale3d("+t.offsetWidth/y.offsetWidth+","+t.offsetHeight/e("y")+",1)",classie.add(i,"placeholder--trans-in"),y.appendChild(i),classie.add(l,"view-single"),setTimeout(function(){i.style.WebkitTransform="translate3d(-5px, "+(n()-5)+"px, 0px)",i.style.transform="translate3d(-5px, "+(n()-5)+"px, 0px)",window.addEventListener("scroll",a)},25),h(i,function(){classie.remove(i,"placeholder--trans-in"),classie.add(i,"placeholder--trans-out"),g.style.top=n()+"px",classie.add(g,"content--show"),classie.add(T[b],"content__item--show"),classie.add(E,"close-button--show"),classie.addClass(l,"noscroll"),L=!1})}function r(){var t=x[b],n=T[b];classie.remove(n,"content__item--show"),classie.remove(g,"content--show"),classie.remove(E,"close-button--show"),classie.remove(l,"view-single"),setTimeout(function(){var i=y.querySelector(".placeholder");classie.removeClass(l,"noscroll"),i.style.WebkitTransform="translate3d("+t.offsetLeft+"px, "+t.offsetTop+"px, 0px) scale3d("+t.offsetWidth/y.offsetWidth+","+t.offsetHeight/e("y")+",1)",i.style.transform="translate3d("+t.offsetLeft+"px, "+t.offsetTop+"px, 0px) scale3d("+t.offsetWidth/y.offsetWidth+","+t.offsetHeight/e("y")+",1)",h(i,function(){n.parentNode.scrollTop=0,y.removeChild(i),classie.remove(t,"grid__item--loading"),classie.remove(t,"grid__item--animate"),_=!1,window.removeEventListener("scroll",a)}),b=-1},25)}function a(){_||(_=!0,c=t(),d=n()),window.scrollTo(c,d)}var c,d,l=document.body,f=window.document.documentElement,u={transitions:Modernizr.csstransitions},m={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},p=m[Modernizr.prefixed("transition")],h=function(e,t){var n=function(e){if(u.transitions){if(e.target!=this)return;this.removeEventListener(p,n)}t&&"function"==typeof t&&t.call(this)};u.transitions?e.addEventListener(p,n):n()},v=document.getElementById("theGrid"),w=document.getElementById("theSidebar"),y=v.querySelector("section.grid"),g=v.querySelector("section.content"),x=y.querySelectorAll(".grid__item"),T=g.querySelectorAll(".content__item"),E=g.querySelector(".close-button"),b=-1,_=!1,L=!1,W=document.getElementById("menu-toggle"),k=w.querySelector(".close-button");i()}();