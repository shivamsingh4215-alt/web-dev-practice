const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnimation() {
  var tl = gsap.timeline();            // Ek ke baad ek animations chalane ke liye timeline     //End: y = 0 opacity = 1
  tl.from("#nav", {                     // Navbar ko upar se laao
    y: -10,                              // 10px upar se start hoga
    opacity: 0,                           // Shuru me invisible hoga
    duration: 1.5,                          // 1.5 second tak animation chalegi
    ease: Expo.easeInOut,                     // Smooth animation
  })

     .to(".boundingelem", {
      y:0,
      ease: Expo.easeInOut,
      duration: 2,
      stagger: .2,
      delay: -1,              // Previous animation se 1 second pehle start karo 
     })

     .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1,              
      })
}  

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

circleMouseFollower();
firstPageAnimation();