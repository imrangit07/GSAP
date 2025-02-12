gsap.to(".box", {
    duration: 1,
    rotation: 360,
    delay: 0.5,
    repeat: -1,

    /* Staggers are totally configurable and SUPER powerful. If a tween has multiple targets, you can easily add some delay between the start of each animation: 
    
    🔹 from options:

          "start" → Animates from the first element (default)
          "end" → Animates from the last element
          "center" → Starts from the middle
          "edges" → Starts from both edges moving toward the center
          "random" → Animates elements in a random order
          */
    stagger: {
        each: 0.2, // Delay between each element 
        from: "start" // Starts from the last element
    },

    /* 
    When to Use Stagger?
        ✅ When animating multiple elements in a row
        ✅ Creating smooth list reveals
        ✅ Building gallery animations
        ✅ Adding natural feel to UI effects
    */



    /* the ease property controls the acceleration and deceleration of an animation, making movements feel more natural and smooth.*/
    ease: "power1.out",

    /* Basic Eases

          ease: "power1" to "power4" (Controls acceleration & deceleration)
          "power1" (gentle) → "power4" (more dramatic)

          Each has variations:
          .in (Starts slow, then speeds up)
          .out (Starts fast, then slows down)
          .inOut (Slow start & end, fast in the middle) */
});

