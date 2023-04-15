// // document.addEventListener('DOMContentLoaded', function() {
// //     let screen = document.querySelector('.screen');
// //     let buttons = document.querySelectorAll('.btn');
// //     let clear = document.querySelector('.btn-c');
// //     let equal = document.querySelector('.btn-equal');

// //     buttons.forEach(function(button){
// //         button.addEventListener('click',function(e){
// //             e.preventDefault(); // Prevent form submission
// //             let value = e.target.dataset.num;
// //             screen.value += value;
// //         })
// //     })

// //     equal.addEventListener('click',function(e){
// //         e.preventDefault(); // Prevent form submission
// //         if (screen.value === ''){
// //             screen.value = "";
// //         } else {
// //             try {
// //                 let answer = math.evaluate(screen.value); // Use math.js to evaluate the expression
// //                 screen.value = answer;
// //             } catch (error) {
// //                 screen.value = "Error"; // Handle error gracefully
// //             }
// //         }
// //     });

// //     clear.addEventListener('click',function(e){
// //         e.preventDefault(); // Prevent form submission
// //         screen.value = "";
// //     });
// // });
// document.addEventListener('DOMContentLoaded', function() {
//     let equal = document.querySelector('.btn-equal');
//     let buttons = document.querySelectorAll('.btn');
//     let screen = document.querySelector('.screen');

//     buttons.forEach(function(button) {
//       button.addEventListener('click', function(e) {
//         e.preventDefault(); // Prevent form submission
//         let value = e.target.dataset.num;
//         screen.value += value;
//       });
//     });

//     let clear = document.querySelector('.btn-c');
//     clear.addEventListener('click', function(e) {
//       e.preventDefault(); // Prevent form submission
//       screen.value = "";
//     });

//     let add = document.querySelector('.btn.btn-yellow[data-num="+"]');
//     let multiply = document.querySelector('.btn.btn-yellow[data-num="*"]');
//     let minus = document.querySelector('.btn.btn-yellow[data-num="-"]');
//     let divide = document.querySelector('.btn.btn-yellow[data-num="/"]');

//     add.addEventListener('click', function() {
//       screen.value += "+";
//     });

//     multiply.addEventListener('click', function() {
//       screen.value += "*";
//     });

//     minus.addEventListener('click', function() {
//       let result = screen.value - screen.value;
//       screen.value = result;
//     });

//     divide.addEventListener('click', function() {
//       let result = screen.value + screen.value;
//       screen.value = result;
//     });

//     equal.addEventListener('click', function() {
//       try {
//         let result = eval(screen.value);
//         screen.value = result;
//       } catch (error) {
//         screen.value = "Error";
//       }
//     });
//   });
// //buttons.forEach(function(button){
//     //         button.addEventListener('click',function(e){
//     //             e.preventDefault(); // Prevent form submission
//     //             let value = e.target.dataset.num;
//     //             screen.value += value;
//     //         })
//     //     })

    
document.addEventListener('DOMContentLoaded', function() {
  // Your JavaScript code here
function calculate(){}
});



