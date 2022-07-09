"use strict";
$(document).ready(function () {


    $('h1').click(function (e) {
        e.preventDefault();
        $('h1').html(1234);
    } );


    $('.btn').click(function (e) {
        e.preventDefault();

        let a = (a) =>  {
            for ( let i = 1; i <=a; i++) {
                $('.col-md-12').append(`<h2>${i}</h2>`);
            }
        }
    })
    a($('input').val())
});

console.log($('input').val());

