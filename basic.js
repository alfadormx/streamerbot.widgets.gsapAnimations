window.streamerbot.widgets.gsapAnimations = window.streamerbot.widgets.gsapAnimations || {};
window.streamerbot.widgets.gsapAnimations.basic = {
    // Attention Seekers
    bounce: (el, duration = 1, y = 30) => gsap.fromTo(el, { y: 0 }, { y: `-=${y}`, yoyo: true, repeat: 5, duration: duration / 6, ease: "power1.inOut" }),
    flash: (el, duration = 1) => gsap.fromTo(el, { opacity: 1 }, { opacity: 0, repeat: 3, yoyo: true, duration: duration / 4 }),
    pulse: (el, duration = 1, scale = 1.05) => gsap.fromTo(el, { scale: 1 }, { scale, repeat: 1, yoyo: true, duration: duration / 2 }),
    rubberBand: (el, duration = 1) => gsap.fromTo(el, { scaleX: 1, scaleY: 1 }, { scaleX: 1.25, scaleY: 0.75, yoyo: true, repeat: 1, duration: duration / 2, onComplete: () => gsap.to(el, { scaleX: 0.75, scaleY: 1.25, yoyo: true, repeat: 1, duration: duration / 2 }) }),
    shakeX: (el, duration = 1, x = 16) => gsap.fromTo(el, { x: 0 }, { x: `-=${x}`, repeat: 5, yoyo: true, duration: duration / 6 }),
    shakeY: (el, duration = 1, y = 16) => gsap.fromTo(el, { y: 0 }, { y: `-=${y}`, repeat: 5, yoyo: true, duration: duration / 6 }),
    headShake: (el, duration = 1, x = 16) => gsap.fromTo(el, { x: 0 }, { x: `-=${x}`, repeat: 2, yoyo: true, duration: duration / 4, ease: "ease.inOut" }),
    swing: (el, duration = 1, rotation = 15) => gsap.fromTo(el, { rotation: 0 }, { rotation, repeat: 1, yoyo: true, duration: duration / 2, transformOrigin: "top center" }),
    tada: (el, duration = 1, scale = 0.9, rotation = 3) => gsap.fromTo(el, { scale: 1, rotation: 0 }, { scale, rotation, repeat: 5, yoyo: true, duration: duration / 6 }),
    wobble: (el, duration = 1, x = 30, rotation = 5) => gsap.fromTo(el, { x: 0, rotation: 0 }, { x, rotation, repeat: 5, yoyo: true, duration: duration / 6 }),
    jello: (el, duration = 1) => gsap.fromTo(el, { skewX: 0 }, { skewX: 12.5, repeat: 1, yoyo: true, duration: duration / 2, onComplete: () => gsap.to(el, { skewX: -6.25, repeat: 1, yoyo: true, duration: duration / 2 }) }),
    heartBeat: (el, duration = 1, scale = 1.3) => gsap.fromTo(el, { scale: 1 }, { scale, repeat: 1, yoyo: true, duration: duration / 2, ease: "power1.inOut" }),

    // Back Entrances
    backInDown: (el, duration = 1, y = -600) => gsap.fromTo(el, { y, opacity: 0 }, { y: 0, opacity: 1, duration, ease: "back.in" }),
    backInLeft: (el, duration = 1, x = -600) => gsap.fromTo(el, { x, opacity: 0 }, { x: 0, opacity: 1, duration, ease: "back.in" }),
    backInRight: (el, duration = 1, x = 600) => gsap.fromTo(el, { x, opacity: 0 }, { x: 0, opacity: 1, duration, ease: "back.in" }),
    backInUp: (el, duration = 1, y = 600) => gsap.fromTo(el, { y, opacity: 0 }, { y: 0, opacity: 1, duration, ease: "back.in" }),

    // Back Exits
    backOutDown: (el, duration = 1, y = 600) => gsap.to(el, { y, opacity: 0, duration, ease: "back.out" }),
    backOutLeft: (el, duration = 1, x = -600) => gsap.to(el, { x, opacity: 0, duration, ease: "back.out" }),
    backOutRight: (el, duration = 1, x = 600) => gsap.to(el, { x, opacity: 0, duration, ease: "back.out" }),
    backOutUp: (el, duration = 1, y = -600) => gsap.to(el, { y, opacity: 0, duration, ease: "back.out" }),

    // Bounce Entrances
    bounceIn: (el, duration = 1, scale = 0.3) => gsap.fromTo(el, { scale, opacity: 0 }, { scale: 1, opacity: 1, duration, ease: "bounce.out" }),
    bounceInDown: (el, duration = 1, y = -300) => gsap.fromTo(el, { y, opacity: 0 }, { y: 0, opacity: 1, duration, ease: "bounce.out" }),
    bounceInLeft: (el, duration = 1, x = -300) => gsap.fromTo(el, { x, opacity: 0 }, { x: 0, opacity: 1, duration, ease: "bounce.out" }),
    bounceInRight: (el, duration = 1, x = 300) => gsap.fromTo(el, { x, opacity: 0 }, { x: 0, opacity: 1, duration, ease: "bounce.out" }),
    bounceInUp: (el, duration = 1, y = 300) => gsap.fromTo(el, { y, opacity: 0 }, { y: 0, opacity: 1, duration, ease: "bounce.out" }),

    // Bounce Exits
    bounceOut: (el, duration = 1, scale = 0.3) => gsap.to(el, { scale, opacity: 0, duration, ease: "bounce.in" }),
    bounceOutDown: (el, duration = 1, y = 300) => gsap.to(el, { y, opacity: 0, duration, ease: "bounce.in" }),
    bounceOutLeft: (el, duration = 1, x = -300) => gsap.to(el, { x, opacity: 0, duration, ease: "bounce.in" }),
    bounceOutRight: (el, duration = 1, x = 300) => gsap.to(el, { x, opacity: 0, duration, ease: "bounce.in" }),
    bounceOutUp: (el, duration = 1, y = -300) => gsap.to(el, { y, opacity: 0, duration, ease: "bounce.in" }),

    // Fading Entrances
    fadeIn: (el, duration = 1) => gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration }),
    fadeInDown: (el, duration = 1, y = -50) => gsap.fromTo(el, { opacity: 0, y }, { opacity: 1, y: 0, duration }),
    fadeInDownBig: (el, duration = 1, y = -200) => gsap.fromTo(el, { opacity: 0, y }, { opacity: 1, y: 0, duration }),
    fadeInLeft: (el, duration = 1, x = -50) => gsap.fromTo(el, { opacity: 0, x }, { opacity: 1, x: 0, duration }),
    fadeInLeftBig: (el, duration = 1, x = -200) => gsap.fromTo(el, { opacity: 0, x }, { opacity: 1, x: 0, duration }),
    fadeInRight: (el, duration = 1, x = 50) => gsap.fromTo(el, { opacity: 0, x }, { opacity: 1, x: 0, duration }),
    fadeInRightBig: (el, duration = 1, x = 200) => gsap.fromTo(el, { opacity: 0, x }, { opacity: 1, x: 0, duration }),
    fadeInUp: (el, duration = 1, y = 50) => gsap.fromTo(el, { opacity: 0, y }, { opacity: 1, y: 0, duration }),
    fadeInUpBig: (el, duration = 1, y = 200) => gsap.fromTo(el, { opacity: 0, y }, { opacity: 1, y: 0, duration }),
    fadeInTopLeft: (el, duration = 1, x = -100, y = -100) => gsap.fromTo(el, { opacity: 0, x, y }, { opacity: 1, x: 0, y: 0, duration }),
    fadeInTopRight: (el, duration = 1, x = 100, y = -100) => gsap.fromTo(el, { opacity: 0, x, y }, { opacity: 1, x: 0, y: 0, duration }),
    fadeInBottomLeft: (el, duration = 1, x = -100, y = 100) => gsap.fromTo(el, { opacity: 0, x, y }, { opacity: 1, x: 0, y: 0, duration }),
    fadeInBottomRight: (el, duration = 1, x = 100, y = 100) => gsap.fromTo(el, { opacity: 0, x, y }, { opacity: 1, x: 0, y: 0, duration }),

    // Fading Exits
    fadeOut: (el, duration = 1) => gsap.to(el, { opacity: 0, duration }),
    fadeOutDown: (el, duration = 1, y = 50) => gsap.to(el, { opacity: 0, y, duration }),
    fadeOutDownBig: (el, duration = 1, y = 200) => gsap.to(el, { opacity: 0, y, duration }),
    fadeOutLeft: (el, duration = 1, x = -50) => gsap.to(el, { opacity: 0, x, duration }),
    fadeOutLeftBig: (el, duration = 1, x = -200) => gsap.to(el, { opacity: 0, x, duration }),
    fadeOutRight: (el, duration = 1, x = 50) => gsap.to(el, { opacity: 0, x, duration }),
    fadeOutRightBig: (el, duration = 1, x = 200) => gsap.to(el, { opacity: 0, x, duration }),
    fadeOutUp: (el, duration = 1, y = -50) => gsap.to(el, { opacity: 0, y, duration }),
    fadeOutUpBig: (el, duration = 1, y = -200) => gsap.to(el, { opacity: 0, y, duration }),
    fadeOutTopLeft: (el, duration = 1, x = -100, y = -100) => gsap.to(el, { opacity: 0, x, y, duration }),
    fadeOutTopRight: (el, duration = 1, x = 100, y = -100) => gsap.to(el, { opacity: 0, x, y, duration }),
    fadeOutBottomRight: (el, duration = 1, x = 100, y = 100) => gsap.to(el, { opacity: 0, x, y, duration }),
    fadeOutBottomLeft: (el, duration = 1, x = -100, y = 100) => gsap.to(el, { opacity: 0, x, y, duration }),

    // Flippers
    flip: (el, duration = 1) => gsap.fromTo(el, { rotationY: 0 }, { rotationY: 180, duration, transformOrigin: "center center" }),
    flipInX: (el, duration = 1) => gsap.fromTo(el, { rotationX: 90, opacity: 0 }, { rotationX: 0, opacity: 1, duration, transformOrigin: "center center" }),
    flipInY: (el, duration = 1) => gsap.fromTo(el, { rotationY: 90, opacity: 0 }, { rotationY: 0, opacity: 1, duration, transformOrigin: "center center" }),
    flipOutX: (el, duration = 1) => gsap.to(el, { rotationX: 90, opacity: 0, duration, transformOrigin: "center center" }),
    flipOutY: (el, duration = 1) => gsap.to(el, { rotationY: 90, opacity: 0, duration, transformOrigin: "center center" }),

    // Lightspeed
    lightSpeedInRight: (el, duration = 1, x = 200, skewX = 30) => gsap.fromTo(el, { x, skewX, opacity: 0 }, { x: 0, skewX: 0, opacity: 1, duration, ease: "power4.out" }),
    lightSpeedInLeft: (el, duration = 1, x = -200, skewX = -30) => gsap.fromTo(el, { x, skewX, opacity: 0 }, { x: 0, skewX: 0, opacity: 1, duration, ease: "power4.out" }),
    lightSpeedOutRight: (el, duration = 1, x = 200, skewX = -30) => gsap.to(el, { x, skewX, opacity: 0, duration, ease: "power4.in" }),
    lightSpeedOutLeft: (el, duration = 1, x = -200, skewX = 30) => gsap.to(el, { x, skewX, opacity: 0, duration, ease: "power4.in" }),

    // Rotating Entrances
    rotateIn: (el, duration = 1, rotation = -200) => gsap.fromTo(el, { rotation, opacity: 0 }, { rotation: 0, opacity: 1, duration, transformOrigin: "center center" }),
    rotateInDownLeft: (el, duration = 1, rotation = -45) => gsap.fromTo(el, { rotation, opacity: 0, transformOrigin: "left bottom" }, { rotation: 0, opacity: 1, duration, transformOrigin: "left bottom" }),
    rotateInDownRight: (el, duration = 1, rotation = 45) => gsap.fromTo(el, { rotation, opacity: 0, transformOrigin: "right bottom" }, { rotation: 0, opacity: 1, duration, transformOrigin: "right bottom" }),
    rotateInUpLeft: (el, duration = 1, rotation = -45) => gsap.fromTo(el, { rotation, opacity: 0, transformOrigin: "left bottom" }, { rotation: 0, opacity: 1, duration, transformOrigin: "left bottom" }),
    rotateInUpRight: (el, duration = 1, rotation = 45) => gsap.fromTo(el, { rotation, opacity: 0, transformOrigin: "right bottom" }, { rotation: 0, opacity: 1, duration, transformOrigin: "right bottom" }),

    // Rotating Exits
    rotateOut: (el, duration = 1, rotation = 200) => gsap.to(el, { rotation, opacity: 0, duration, transformOrigin: "center center" }),
    rotateOutDownLeft: (el, duration = 1, rotation = 45) => gsap.to(el, { rotation, opacity: 0, duration, transformOrigin: "left bottom" }),
    rotateOutDownRight: (el, duration = 1, rotation = -45) => gsap.to(el, { rotation, opacity: 0, duration, transformOrigin: "right bottom" }),
    rotateOutUpLeft: (el, duration = 1, rotation = 45) => gsap.to(el, { rotation, opacity: 0, duration, transformOrigin: "left bottom" }),
    rotateOutUpRight: (el, duration = 1, rotation = -45) => gsap.to(el, { rotation, opacity: 0, duration, transformOrigin: "right bottom" }),

    // Specials
    hinge: (el, duration = 2) => gsap.fromTo(el, { rotation: 0, transformOrigin: "top left" }, { rotation: 80, y: 700, opacity: 0, duration, ease: "bounce.in" }),
    jackInTheBox: (el, duration = 1) => gsap.fromTo(el, { rotation: 30, scale: 0.1, opacity: 0 }, { rotation: 0, scale: 1, opacity: 1, duration, ease: "back.out(1.7)" }),
    rollIn: (el, duration = 1, x = -200, rotation = -120) => gsap.fromTo(el, { x, rotation, opacity: 0 }, { x: 0, rotation: 0, opacity: 1, duration }),
    rollOut: (el, duration = 1, x = 200, rotation = 120) => gsap.to(el, { x, rotation, opacity: 0, duration }),

    // Zooming Entrances
    zoomIn: (el, duration = 1, scale = 0.3) => gsap.fromTo(el, { scale, opacity: 0 }, { scale: 1, opacity: 1, duration }),
    zoomInDown: (el, duration = 1, scale = 0.3, y = -100) => gsap.fromTo(el, { scale, opacity: 0, y }, { scale: 1, opacity: 1, y: 0, duration }),
    zoomInLeft: (el, duration = 1, scale = 0.3, x = -100) => gsap.fromTo(el, { scale, opacity: 0, x }, { scale: 1, opacity: 1, x: 0, duration }),
    zoomInRight: (el, duration = 1, scale = 0.3, x = 100) => gsap.fromTo(el, { scale, opacity: 0, x }, { scale: 1, opacity: 1, x: 0, duration }),
    zoomInUp: (el, duration = 1, scale = 0.3, y = 100) => gsap.fromTo(el, { scale, opacity: 0, y }, { scale: 1, opacity: 1, y: 0, duration }),

    // Zooming Exits
    zoomOut: (el, duration = 1, scale = 0.3) => gsap.to(el, { scale, opacity: 0, duration }),
    zoomOutDown: (el, duration = 1, scale = 0.3, y = 100) => gsap.to(el, { scale, opacity: 0, y, duration }),
    zoomOutLeft: (el, duration = 1, scale = 0.3, x = -100) => gsap.to(el, { scale, opacity: 0, x, duration }),
    zoomOutRight: (el, duration = 1, scale = 0.3, x = 100) => gsap.to(el, { scale, opacity: 0, x, duration }),
    zoomOutUp: (el, duration = 1, scale = 0.3, y = -100) => gsap.to(el, { scale, opacity: 0, y, duration }),

    // Sliding Entrances
    slideInDown: (el, duration = 1, y = -200) => gsap.fromTo(el, { y, opacity: 0 }, { y: 0, opacity: 1, duration }),
    slideInLeft: (el, duration = 1, x = -200) => gsap.fromTo(el, { x, opacity: 0 }, { x: 0, opacity: 1, duration }),
    slideInRight: (el, duration = 1, x = 200) => gsap.fromTo(el, { x, opacity: 0 }, { x: 0, opacity: 1, duration }),
    slideInUp: (el, duration = 1, y = 200) => gsap.fromTo(el, { y, opacity: 0 }, { y: 0, opacity: 1, duration }),

    // Sliding Exits
    slideOutDown: (el, duration = 1, y = 200) => gsap.to(el, { y, opacity: 0, duration }),
    slideOutLeft: (el, duration = 1, x = -200) => gsap.to(el, { x, opacity: 0, duration }),
    slideOutRight: (el, duration = 1, x = 200) => gsap.to(el, { x, opacity: 0, duration }),
    slideOutUp: (el, duration = 1, y = -200) => gsap.to(el, { y, opacity: 0, duration }),
};