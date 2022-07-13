"use strict";
$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();
        if ($.trim($('input').val()) == '') {
            $('input').val();
        } else {
            
        }
        $('input').val('') 
    });
});