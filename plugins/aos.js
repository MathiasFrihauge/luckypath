// plugins/aos.js
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// export default ({ app }) => {
//   if (process.client) {
//     app.router.afterEach(() => {
//       AOS.init({
//         once: true,
//         duration: 1200,
//       });
//     });
//   }
// };

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Fade-up animation
gsap.from(".fade-up", {
  scrollTrigger: ".fade-up", // The element to trigger on scroll
  opacity: 0,
  y: 50, // Moves the element 50px from the bottom
  duration: 1.5
});

// Fade-down animation
gsap.from(".fade-down", {
  scrollTrigger: ".fade-down",
  opacity: 0,
  y: -50, // Moves the element 50px from the top
  duration: 1.5
});

// Fade-right animation
gsap.from(".fade-right", {
  scrollTrigger: ".fade-right",
  opacity: 0,
  x: 50, // Moves the element 50px from the right
  duration: 1.5
});

// Fade-left animation
gsap.from(".fade-left", {
  scrollTrigger: ".fade-left",
  opacity: 0,
  x: -50, // Moves the element 50px from the left
  duration: 1.5
});