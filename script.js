var tl = gsap.timeline();
// tl.from("h1",{
//     y:-20,
//     opacity:0,
//     duration:2,
//     delay:0,
//     // stagger:0.4

// })
tl.from('#ng', {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
tl.from('h2', {
  y: -20,
  opacity: 0,
  duration: 4,
  delay: 0.8,
  stagger: 0.4,
});

tl.from('.ice', {
  x: 500,
  opacity: 0,
  duration: 2,
  delay: 1,
  stagger: 1,
});
// tl.from("#pic"{
//     x:500,
//     opacity:0,
//     rotation:360,
//     delay:0
// })
