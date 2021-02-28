'use strict';

$('.topnav').on('click', ()=>{
    $('.toggle').toggle()
})

$('#searchNav').on('click', ()=>{
    $('.form').toggle()
    $('#topForm').toggle()
    $('.toggle').toggle()
})