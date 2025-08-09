// export const FaqList = () => { 


//     document.addEventListener('DOMContentLoaded', () => {
//     const faqItems = document.querySelectorAll('.faq-item');

//     faqItems.forEach(item => {
//         const question = item.querySelector('.faq-question');
//         const answer = item.querySelector('.faq-answer');
//         const toggleIcon = item.querySelector('.toggle-icon');

//         question.addEventListener('click', () => {

//         faqItems.forEach(otherItem => {
//             if (otherItem !== item && otherItem.classList.contains('active')) {
//             otherItem.classList.remove('active');
//             otherItem.querySelector('.faq-answer').style.maxHeight = null;
//             otherItem.querySelector('.toggle-icon').textContent = '+';
//             }
//         });


//         item.classList.toggle('active');
//         if (item.classList.contains('active')) {
//             answer.style.maxHeight = answer.scrollHeight + 'px'; // Set max-height to content height
//             toggleIcon.textContent = '-';
//         } else {
//             answer.style.maxHeight = null;
//             toggleIcon.textContent = '+';
//         }
//         });
//     });
//     });
// }