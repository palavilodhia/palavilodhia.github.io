const numExperiences = 2;
const numLabs = 3;

gsap.registerPlugin(ScrollTrigger);

// Hero Section
let t1 = gsap.timeline({
     scrollTrigger: {
          trigger: '.hero',
          // start: 'top 80%',
          // end: 'bottom 20%',
          toggleActions: 'restart reverse restart reverse',
     }
});
t1.from('.hero .about h1', {
     duration: 1,
     y: '-100%',
     opacity: 0,
}, '0');
t1.from('.hero .about h5', {
     duration: 1,
     x: '100%',
     opacity: 0,
}, '0');
t1.from('.hero .profile', {
     duration: 1,
     // width: 0,
     x: '-100%',
     opacity: 0,
}, '0');
// t1.from('.hero .profile', {
//      duration: 2,
//      y: '-200%',
//      opacity: 0,
//      ease: Bounce.easeOut,
// }, '0');
// t1.from('.hero .profile', {
//      duration: 2,
//      x: '-200%',
//      ease: Power1.easeOut,
// }, '0');


// Clinical Work
gsap.from('.experiences h2', {
     duration: 1,
     x: '-100%',
     opacity: 0,
     scrollTrigger: {
          trigger: '.experiences',
          toggleActions: 'restart none none reverse'
     },
});

for (var i = 1; i<=numExperiences; i+=2) {
     var t2 = gsap.timeline({
          scrollTrigger: {
               trigger: '.experienceLeft.exp'+i.toString(),
               // start: 'top 90%',
               // end: 'bottom 10%',
               toggleActions: 'restart none none reverse'
          }
     });

     t2.from('.experienceLeft.exp'+i.toString(), {
          duration: 1,
          opacity: 0,
     }, '0');

     t2.from('.experienceLeft.exp'+i.toString()+' .imgLeft', {
          duration: 1,
          opacity: 0,
          x: '-100%',
     }, '0');

     t2.from('.experienceLeft.exp'+i.toString()+' .aboutRight', {
          duration: 1,
          opacity: 0,
          x: '100%',
     }, '0');
}

for (var i = 2; i<=numExperiences; i+=2) {
     var t3 = gsap.timeline({
          scrollTrigger: {
               trigger: '.experienceRight.exp'+i.toString(),
               // start: 'top 90%',
               // end: 'bottom 10%',
               toggleActions: 'restart none none reverse'
          }
     });

     t3.from('.experienceRight.exp'+i.toString(), {
          duration: 1,
          opacity: 0,
     }, '0');

     t3.from('.experienceRight.exp'+i.toString()+' .imgRight', {
          duration: 1,
          opacity: 0,
          x: '100%',
     }, '0');

     t3.from('.experienceRight.exp'+i.toString()+' .aboutLeft', {
          duration: 1,
          opacity: 0,
          x: '-100%',
     }, '0');
}

// Lab Work

// for (var i = 1; i<=numLabs; i++) {
//      var t4 = gsap.timeline({
//           scrollTrigger: {
//                trigger: '.lab.lab'+i.toString(),
//                // start: 'top 90%',
//                // end: 'bottom 10%',
//                toggleActions: 'restart reverse restart reverse',
//           }
//      });

//      t4.from('.lab.lab'+i.toString(), {
//           duration: 1,
//           opacity: 0,
//      }, '0');

//      t4.from('.lab.lab'+i.toString()+' .img', {
//           duration: 1,
//           opacity: 0,
//           y: '-100%',
//      }, '0');

//      t4.from('.lab.lab'+i.toString()+' .about', {
//           duration: 1,
//           opacity: 0,
//           y: '100%',
//           stagger: 0.1
//      }, '0');
// }

let t5 = gsap.timeline({
     scrollTrigger: {
          trigger: '.labSection',
          // start: 'top 80%',
          // end: 'bottom 20%',
          toggleActions: 'restart none none reverse'
     }
});
t5.from('.labSection h2', {
     duration: 1,
     x: '-100%',
     opacity: 0
}, '0');
t5.from('.lab .img', {
     duration: 1,
     y: '-100%',
     opacity: 0,
     stagger: 0.3
}, '0');
t5.from('.lab .about', {
     duration: 2,
     y: '100%',
     opacity: 0,
     stagger: 0.3,
}, '0');


// Volunteer Work
let t6 = gsap.timeline({
     scrollTrigger: {
          trigger: '.volunteerSection',
          // start: 'top 80%',
          // end: 'bottom 20%',
          toggleActions: 'restart none none reverse'
     }
});
t6.from('.volunteerSection h2', {
     duration: 1,
     x: '-100%',
     opacity: 0
}, '0');
t6.from('.vol .about', {
     duration: 1,
     x: '-100%',
     opacity: 0,
     stagger: 0.3
}, '0');
t6.from('.vol .img', {
     duration: 2,
     x: '100%',
     opacity: 0,
}, '0');