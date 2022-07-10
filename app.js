// "use strict";
// $(document).ready(function () {


//     $('.btn').click(function (e) {
//         e.preventDefault();

//         let a = (a) =>  {
//             for ( let i = 1; i <=a; i++) {
//                 $('.col-md-12').append(`<h2>${i}</h2>`);
//             }
//         }
//     })
//     a($('input').val())
// });

"use strict";
$(document).ready(function () {

    $('#btn').click(function (e) {
        e.preventDefault();
        let func = a => {
            if (Number(a)) {
                for (let i = 1; i <= a; i++) {
                    $('.btn').append(`<h1>${a}</h1>`);
                }
            } else {
                $('.contentDiv').append(`<h1>${a}</h1>`);
            }
        }
        func($('input').val());
    });

});