/*
   A Timeline is a powerful sequencing tool that acts as a container for tweens and other timelines, making it simple to control them as a whole and precisely manage their timing. Without Timelines, building complex sequences would be far more cumbersome because you'd need to use a delay for every animation.
   */


var tl = gsap.timeline(
    {
        repeat:1,
        repeatDelay:2,
    }
);

tl.from("#heading",
    {
        opacity:0
    },
    1,
)

tl.to("#box1", {
    opacity:0,
    duration:2,
    x:1000,
    borderRadius:"50%",
     backgroundColor:"red"
})
tl.to("#box2", {
    opacity:0,
    duration:2,
    x:1000,
    borderRadius:"50%",
     backgroundColor:"red"
})
tl.to("#box3", {
    opacity:0,
    duration:2,
    x:1000,
    borderRadius:"50%",
     backgroundColor:"red"
})