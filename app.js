"use strict";
$(document).ready(function () {

    $('#btn').click(function (e) {
        e.preventDefault();
        let func = a => {
            if (Number(a)) {
                for (let i = 1; i <= a; i++) {
                    $('.minibox').append(`<h3>${a}</h3>`);
                }
            } else{
                $('.minibox').append(`<h1>${a}</h1>`);
            }
        }
        func($('input').val());
    });

});