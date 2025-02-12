gsap.to(".box1",{
    x:"1200px",
    duration:3,
    delay:1,
    rotate:360,

    /*we set the repeat property to -1, so it will be repeated indefinitely.*/
    
    repeat:-1, 

    //Let's add a new property : yoyo

    /* Now the animation will go back and forth. Which means that the y position will go from 0 to -20, then to 0 again. And it will be repeated indefinitely.*/

    yoyo:true
})
gsap.from(".box2",{
    x:"1200px",
    duration:3,
    delay:1,
    rotate:360,
    repeat:-1, 
    yoyo:true
})