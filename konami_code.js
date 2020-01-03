//const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// function init() {
//   // Write your JavaScript code inside the init() function
//   let index = 0;
//   document.body.addEventListener('keydown', function(e) {
//     const key = parseInt(e.detail || e.which);
//     if (key === code[index]) {
//       index++;
//       if (index === code.length) { 
//         alert("Hurray!");
//         index = 0;
//       }
//     } else {
//       index = 0;
//     }
//   });
// }

// init();
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    //document.body.addEventListener('keydown', function(event) {
    //const key = parseInt(event.detail || event.which);
    const key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("Congratulations!")
        index = 0;
      }
    } else {
      index = 0;
    }
  }) 
}


init();