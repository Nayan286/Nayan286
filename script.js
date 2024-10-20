function scroller() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

scroller()

function animation() {
  gsap.from(".nav", {
    y: -80,
    duration: 0.4,
    delay: 0.2
  })

  gsap.from(".nav .nav-content li", {
    x: -20,
    duration: 0.25,
    delay: 0.6,
    stagger: 0.15,
    opacity: 0
  })

  gsap.from(".page1-center .stagger1", {
    y: 40,
    duration: 0.3,
    delay: 0.62,
    stagger: 0.15,
    opacity: 0
  })

  gsap.from(".courses-section .stagger2", {
    y: 50,
    duration: 0.3,
    stagger: 0.15,
    opacity: 0,
    scrollTrigger: {
      trigger: ".courses-section .stagger2",
      scroller: ".main",
      start: "top 60%",
      end: "top 30%",
      scrub: 2
    }
  })

  // gsap.from(" #stagger3", {
  //   x: -40,
  //   duration: 0.35,
  //   opacity: 0,
  //   stagger: 0.2,
  //   scrollTrigger: {
  //     trigger: " #stagger3",
  //     scroller: ".main",
  //     markers: true,
  //     start: "top 50%",
  //     end: "top 20%"
  //   }
  // })

  gsap.from(".campus-section .stagger3", {
    y: 50,
    duration: 0.3,
    stagger: 0.15,
    opacity: 0,
    scrollTrigger: {
      trigger: ".campus-section .stagger3",
      scroller: ".main",
      scrub: 2
    }
  })

  gsap.from(".facility-section .stagger4", {
    y: 50,
    duration: 0.3,
    stagger: 0.15,
    opacity: 0,
    scrollTrigger: {
      trigger: ".facility-section .stagger4",
      scroller: ".main",
      scrub: 2
    }
  })

  gsap.from(".feedback-section .stagger5", {
    y: 50,
    duration: 0.3,
    stagger: 0.15,
    opacity: 0,
    scrollTrigger: {
      trigger: ".feedback-section .stagger5",
      scroller: ".main",
      scrub: 2
    }
  })

  gsap.from(".page3 .stagger6-1", {
    x: 100,
    duration: 0.3,
    stagger: 0.15,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page3 .stagger6-1",
      scroller: ".main",
      start: "top 85%",
      end: "top 40%",
      scrub: 2
    }
  })

  gsap.from(".page3 .stagger6-2", {
    x: -100,
    duration: 0.3,
    stagger: 0.15,
    opacity: 0,
    scrollTrigger: {
      trigger: ".page3 .stagger6-2",
      scroller: ".main",
      start: "top 80%",
      end: "top 40%",
      scrub: 2
    }
  })
}

animation()