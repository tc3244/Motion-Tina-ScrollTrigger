import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// Init
gsap.set("#hero h1 span",{alpha:0.25});
//gsap.set("#bg-img",{clipPath:"inset(25% 25%)"});

//Timeline Controls
//tl.pause();
//tl.resume();
//tl.seek(1.5);
//tl.reverse();

let trailBtn = document.querySelector("#trails-btn");
//button timeline
let heroBtnTl = gsap.timeline({paused:true});
heroBtnTl.to("#trails-btn",{duration:0.25, scale:2, backgroundColor:"#881d02"}, "myLabel")
.to("#first-line",{duration:0.25, alpha:0, y:50}, "myLabel")
.to("#second-line",{duration:0.25, alpha:0, y:50}, "myLabel")
.to("#trails-btn i",{duration:0.25, rotateY:0}, "-=0.15")
;


trailBtn.addEventListener("mouseover", () => {
    heroBtnTl.play();
});

trailBtn.addEventListener("mouseout", () => {
    heroBtnTl.reverse();
});


function heroAnimation(){
    let tl = gsap.timeline();
    tl.from("#first-line",{duration:1,alpha:0, y:-100})
    .from("#second-line",{duration:1,alpha:0, y:-100},"-=0.75")
    .from("#trails-btn",{duration:1,y:100, alpha:0},"-=.5")
    .from("#trails-btn i",{duration:0.5,rotation:90, alpha:0, transformOrigin: "left bottom"},"-=0.5");
    return tl;
}

//scrollTrigger
//scrollTrigger:{
//trigger: ".myClass"
//scrub:true, links timeline to scrollbar
// markers:true
//start:"center 70%", "(trigger element) (scroller/viewport)"
//end:"center 10%",
//}
//pin:"#box" or true

//toggleActions: "play none none none"

//keywords = play, pause, resume, reverse, restart, rest, complete, none

gsap.from("#box",{duration:2, scrollTrigger:{
    trigger:"#box",
    toggleActions:"play pause resume reverse",
    start:"bottom 70%",
    end:"top 30%",
    markers:true
    },
    scale:2, 
    rotation:180, 
    x:"-=600%"});

// function boxAnimation(){
//     let tl = gsap.timeline({
//         scrollTrigger:{
//             trigger: "#box",
//             // start:"center 70%",
//             // end:"center 10%",
//             toggleActions: "play pause none none",
//             //scrub:true,
//             markers:true
//         }});
//     tl.from("#box",{duration:1, scale:2, rotation:180, x:"-=300%"})
//     ;

//     return tl;
// }

function hikingAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#hiking",
            start:"top 70%",
            end:"bottom 10%",
            scrub:true,
            markers:false
        }});
    tl.from("#hiking aside div",{duration:1, scale:3, alpha:0},"hiking")
    .from("#hiking h1",{duration:1, y:-100, alpha:0},"hiking")
    .from("#hiking p",{duration:1, y:-100, alpha:0},"hiking")

    ;

    return tl;
}

function hero2Animation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#hero-2",
            start:"top 80%",
            end:"top 40%",
            scrub:true,
            markers:false
        }});
    tl.from("#bg-img",{duration:1, clipPath:"inset(0 50%)"}, "herotwo")
    .from("#hero-2 h1",{duration:1, scale:2, alpha:0}, "herotwo")
   

    ;

    return tl;
}





let mainTl = gsap.timeline();
mainTl.add(heroAnimation())
    //.add(boxAnimation())
    .add(hikingAnimation())
    .add(hero2Animation())

;