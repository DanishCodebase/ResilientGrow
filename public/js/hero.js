// let s=0;function show(){let e=document.getElementsByClassName("hide");for(let t=0;t<e.length;t++)e[t].style.display="none";++s>e.length&&(s=1),e[s-1].style.display="block",setTimeout(show,1200)}
// function autoShowPopup(){setTimeout(showPopup,7e3)}function showPopup(){document.querySelector(".pop-up").style.opacity="1",document.querySelector(".pop-up").style.visibility="visible",document.body.style.overflow="hidden"}function hidePopup(){document.querySelector(".pop-up").style.opacity="0",document.querySelector(".pop-up").style.visibility="hidden",document.body.style.overflow=""}
// // show()
// $(document).ready(function(){$(".owl-carousel").owlCarousel({autoplay:!0,autoplayTimeout:84e3,autoplayHoverPause:!1,items:1,stagePadding:20,center:!0,nav:!1,margin:50,dots:!0,loop:!0,responsive:{0:{items:1},480:{items:2},575:{items:2},768:{items:2},991:{items:3},1200:{items:4}}})}),document.querySelector(".unmute").addEventListener("click",function(){document.querySelector(".unmute").classList.toggle("d-none"),document.querySelector(".mute").classList.toggle("d-none"),document.querySelector(".lap").muted=!1}),document.querySelector(".mute").addEventListener("click",function(){document.querySelector(".mute").classList.toggle("d-none"),document.querySelector(".unmute").classList.toggle("d-none"),document.querySelector(".lap").muted=!0}),document.getElementById("close").addEventListener("click",hidePopup),window.addEventListener("load",autoShowPopup);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: !0,
    autoplayTimeout: 84e3,
    autoplayHoverPause: !1,
    items: 1,
    stagePadding: 20,
    center: !0,
    nav: !1,
    margin: 50,
    dots: !0,
    loop: !0,
    responsive: {
      0: { items: 1 },
      480: { items: 2 },
      575: { items: 2 },
      768: { items: 2 },
      991: { items: 3 },
      1200: { items: 4 },
    },
  });
}),
  document.querySelector(".unmute").addEventListener("click", function () {
    document.querySelector(".unmute").classList.toggle("d-none"),
      document.querySelector(".mute").classList.toggle("d-none"),
      (document.querySelector(".lap").muted = !1);
  }),
  document.querySelector(".mute").addEventListener("click", function () {
    document.querySelector(".mute").classList.toggle("d-none"),
      document.querySelector(".unmute").classList.toggle("d-none"),
      (document.querySelector(".lap").muted = !0);
  });
function autoShowPopup() {
  setTimeout(showPopup, 7000);
}
function showPopup() {
  (document.querySelector(".pop-up").style.opacity = "1"),
    (document.querySelector(".pop-up").style.visibility = "visible"),
    (document.body.style.overflow = "hidden");
}
function hidePopup() {
  (document.querySelector(".pop-up").style.opacity = "0"),
    (document.querySelector(".pop-up").style.visibility = "hidden"),
    (document.body.style.overflow = "");
}
let s = 0;
function show() {
  let e = document.getElementsByClassName("hide");
  for (let t = 0; t < e.length; t++) e[t].style.display = "none";
  ++s > e.length && (s = 1),
    (e[s - 1].style.display = "block"),
    setTimeout(show, 1200);
}
// function autoShowPopup() {
//   setTimeout(showPopup, 7e3);
// }


window.addEventListener("load", autoShowPopup);
document.getElementById("close").addEventListener("click", hidePopup);
show();

document.querySelector("#cours").addEventListener("click", function () {
  document.querySelector(".cpu").classList.toggle("d-none");
});

document.querySelector("#redirect").addEventListener("click", function () {
  document.querySelector(".cpu").classList.toggle("d-none");
  window.location.href = '/#course';
});
