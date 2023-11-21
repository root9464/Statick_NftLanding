// const observer = new IntersectionObserver((entries) => {
//     console.log(entries);
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             document.querySelectorAll('.nav__link').forEach((link) => {
//                 let id = link.getAttribute('href').replace('#', '');
//                 if (id === entry.target.id) {
//                     link.classList.add('nav__link--active');
//                 } else {
//                     link.classList.remove('nav__link--active');
//                 }
//             });
//         }
//     });
// }, {
//     threshold: 0.5
// });

// document.querySelectorAll('.section').forEach(section => { observer.observe(section) });