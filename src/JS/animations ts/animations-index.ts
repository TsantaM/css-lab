import '/src/CSS/animations-styles/animations-index.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
console.log("Bonsoir animation index.ts");

// Animations Previeux for index of animations lab folder

const dots = document.querySelectorAll('.dot');
const dotsShadows = document.querySelectorAll(".dot-shadow");

console.log(dots, dotsShadows);

gsap.to(dots, {
    y: -60,
    stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true,
    }
})

gsap.to(dotsShadows, {
    y: 60,
    opacity: 0.2,
    stagger: {
        each: 0.2,
        repeat: -1,
        yoyo: true,
    }
})