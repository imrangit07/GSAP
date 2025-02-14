var tl = gsap.timeline();

tl.from(".page1 .box",{
    opacity:0,
    scale:0,
    duration:3,
})
tl.from(".page2 .box",{
    opacity:0,
    scale:0,
    duration:3,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        start:"top 40%",
        end:"top 0%",
        scrub:2
    }
})
tl.from("#heading",{
    opacity:0,
    x:-600,
    scrollTrigger:{
        trigger:"#heading",
        scroller:"body",
        markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:2
    }
})
tl.from(".page3 .box",{
    opacity:0,
    scale:0,
    duration:3,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        markers:true,
        start:"top 40%",
        end:"top 0%",
        scrub:2
    }
})