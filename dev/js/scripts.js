import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Timeline Controls
//tl.pause();
//tl.resume();
//tl.seek(1.5);
//tl.reverse();

let learnBtn = document.querySelector("#learn-btn");
let heroBtnTl = gsap.timeline({paused:true});

heroBtnTl.to("#learn-btn",{duration:.5, scale:1.2, ease:"bounce.inout", backgroundColor:"#ffffff"}, "myLabel")
.to("#first-line",{duration:0.25, alpha:.25}, "myLabel")
.to("#second-line",{duration:0.25, alpha:.25}, "myLabel")
.to("#learn-btn i",{duration:0.25, rotation:360, ease:"bounce.inout"}, "-=0.15")
;

learnBtn.addEventListener("mouseover", () => {
    heroBtnTl.play();
});

learnBtn.addEventListener("mouseout", () => {
    heroBtnTl.reverse();
});

function heroAnimation(){
    let tl = gsap.timeline();
    tl.from("#first-line",{duration:1,alpha:0, y:-100})
    .from("#second-line",{duration:1,alpha:0, y:-100},"-=0.75")
    .from("#learn-btn",{duration:1,y:100, alpha:0},"-=.5")
    .from("#learn-btn i",{duration:0.5,rotation:90, alpha:0, transformOrigin: "left bottom"},"-=0.5");
    return tl;
}
gsap.from("#box",{duration:2, scrollTrigger:{
    trigger:"#box",
    toggleActions:"play none reverse restart",
    markers:false,
    start:"buttom 10%",
    stop:"top 30%"
    },
    scale:2, 
    alpha:0,
    ease:"bounce.out",
    y:"-=400%"});

function gardenAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#garden",
            start:"top 70%",
            end:"bottom 10%",
            scrub:true,
            markers:false
        }});
    tl.from("#garden aside div",{duration:.5, x:"+=100", alpha:0, clipPath:"inset(0 80%)"},"garden")
    .from("#garden h1",{duration:.5, x:"-100", alpha:0},"garden")
    .from("#garden p",{duration:.5, x:"-100", alpha:0},"garden")

    ;

    return tl;
}

function hero2Animation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#hero-2",
            start:"top 90%",
            end:"top 40%",
            scrub:true,
            markers:false
        }});
    tl.from("#bg-img",{duration:10, x:"-90%", alpha:0}, "herotwo")
    .from("#hero-2 h1",{duration:15, y:"-=300", alpha:0, ease:"bounce.out"}, "herotwo")
    .from("#hero-2 p",{duration:15, y:"-=300", alpha:0,ease:"bounce.out"},"herotwo")

    ;

    return tl;
}


let mainTl = gsap.timeline();
mainTl.add(heroAnimation())
    .add(gardenAnimation())
    .add(hero2Animation())

;