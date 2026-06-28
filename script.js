var timeout;

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


function circleChaptakaro(){
  //define default scale value of circle
  var xscale = 1;  
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function(dets){
    clearTimeout(timeout);

    // var xdiff = dets.clientX - xprev;
    // var ydiff = dets.clientY - yprev;

    // Keep the scale value between 0.8 and 1.2
    xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);
    timeout = setTimeout(function(){
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });

}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleChaptakaro();
circleMouseFollower();
firstPageAnimation();


//teeno element ko select kro, uske baad tino par ek mouse move lagao, jab mousemove ho to ye pata kro ki mouse kaha pr hai, jiska mtlb hai mouse ki x and y position pata kro, ab mouse ki x y position ke badale us image ko show kro and us image ko move kro, move krte waqt rotate kro and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem")
.forEach(function(elem){
  var rotate=0;
  var diffrot=0;

  elem.addEventListener("mouseleave", function(dets){
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5
    });
  });

  elem.addEventListener("mousemove", function(dets){
    var diff=dets.clientY-elem.getBoundingClientRect().top;
    diffrot=dets.clientX-rotate;
    rotate=dets.clientX;
    
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot*0.5)
    });
  });
});