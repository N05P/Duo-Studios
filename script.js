function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}

init();

var cur = document.querySelector("#cursor");

var main= document.querySelector("#main");

document.addEventListener("mousemove",function(dets){
  gsap.to(cur,{
    x:dets.x,
    y:dets.y
  })
})

let tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"top 27%",
    end:"top 0",
    scrub:2
}
});

tl1.to("#page1 h1",{
    x:-100,
},"anim");
tl1.to("#page1 h2",{
  x:100
},"anim")
tl1.to("#page1 video",{
  width:"95%"
},"anim")  


let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"top -110%",
    end:"top -130%",
    scrub:2
}
});

tl2.to("#main",{
  backgroundColor:"#fff"
})


let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page1 h1",
    scroller:"#main",
    start:"top -480%",
    end:"top -500%",
    scrub:2
}
});

tl3.to("#main",{
  backgroundColor:"#0F0D0D"
})


let box = document.querySelectorAll(".box");

box.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    let img = elem.getAttribute("data-img");
    console.log(img);
    let h3 = elem.querySelector(`h3`);
    let h41 = elem.querySelector(".t1");
    let h42 = elem.querySelector(".t2");
    cur.style.width="300px"
    cur.style.height="250px";
    cur.style.borderRadius="0";
    cur.style.backgroundImage=`url(${img})`
    h3.style.color="white"
    h41.style.color="white"
    h42.style.color="white"
  })
  elem.addEventListener("mouseleave",function(){
    let h3 = elem.querySelector(`h3`);
    let h41 = elem.querySelector(".t1");
    let h42 = elem.querySelector(".t2");
    cur.style.width="20px"
    cur.style.height="20px";
    cur.style.borderRadius="50%";
    cur.style.backgroundImage=`none`
    h3.style.color="#ffffff69"
    h41.style.color="#ffffff69"
    h42.style.color="#ffffff69"
})
})