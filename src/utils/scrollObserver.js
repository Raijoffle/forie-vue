// export function useScrollObserver(callback) {
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 observer.unobserve(entry.target);
//                 callback(entry.target);
//             }
//         });
//     });

//     return {
//         observe(element) {
//             observer.observe(element);
//         },
//         unobserve(element) {
//             observer.unobserve(element);
//         },
//     };
// }
