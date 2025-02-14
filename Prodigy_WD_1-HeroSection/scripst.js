var anim = gsap.timeline();
anim.from('.hero_contents', {
    opacity: 0,
    duration: 1,
    x: -400,
});
anim.from('.hero_img', {
    opacity: 0,
    duration:1.5,
    scale:0.7,
    x:700,
});
anim.from('.navabar', {
    opacity: 0,
    duration:1,
    y:-100,
});
anim.from('.botton_container', {
    opacity: 0,
    duration:1,
    y:200,
});

