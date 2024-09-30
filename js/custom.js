jQuery(document).ready(function($) {

  $('.slick.marquee').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    slidesToShow: 1,
    draggable:false,
    focusOnSelect:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });

  $('.slick.marquee_rtl').slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    draggable:false,
    focusOnSelect:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    rtl:true
  });

  $('.testimonials-slider').slick({
    speed: 500,
    fade: true,
    centerMode: false,
    infinite: true,
    cssEase: 'ease-in-out',
    slidesToShow: 1,
    draggable:false,
    focusOnSelect:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    arrows: false,
    dots: true
  });

  $(window).scrollTop(0);

  gsap.to('.platform', {
    scrollTrigger: {
      trigger: '.platform',
      start: "top center",
      onEnter: () => animateBoxes(),
      // markers: true  
    }
  });
  
  function animateBoxes() {
    gsap.utils.toArray('.platform .card').forEach((card) => {
      gsap.to(card, {
        scale: 0.51,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
          // markers: true
        }
      });
    });
  }



  document.querySelectorAll("[Heading]").forEach((heading) => {
    new SplitType(heading, { types: "lines, words", });
    gsap.from(heading.querySelectorAll(".word"), {
      y: "100%",
      opacity: 0,
      duration: 1.5,
      ease: "power1.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: heading,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });
  document.querySelectorAll("[description]").forEach((description) => {
    new SplitType(description, { types: "lines, words", });
    gsap.from(description.querySelectorAll(".line"), {
      y: "100%",
      opacity: 0,
      duration: 1.5,
      ease: "power1.out",
      stagger: 0.1,
      scrollTrigger: {
        trigger: description,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  });

  document.querySelectorAll(".btn").forEach((button) => {
    gsap.from(button, {
      y: "60%",
      opacity: 0.6,
      duration: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: button,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });
  });

  document.querySelectorAll(".integrate").forEach((box) => {
    gsap.from(box, {
      y: "50%",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: box,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  document.querySelectorAll(".box img").forEach((img) => {
    gsap.from(img, {
      x: "-10%",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: img,
        start: "left 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

});






function animateCard() {
  
        

      // document.querySelectorAll(".bg-animation").forEach((span) => {
      //   gsap.from(span, {
      //     x: "10%",
      //     opacity: 0,
      //     duration: 3,
      //     ease: "power1.out",
      //     scrollTrigger: {
      //       trigger: span,
      //       start: "right 80%",
      //       toggleActions: "play none none reverse",
      //     },
      //   });
      // });

  }
  
  
  animateCard();

  
