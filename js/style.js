$(document).ready(function() {
    if('#menu li:has(ul) > a'){
        $('#menu li:has(ul) > a').append('<span>&#9660;</span>');
    $('#menu li:has(ul)').hover(function(e){
        $('ul', this).stop(true, true).slideToggle();
        e.stopPropagation();
    });
}
   
    $('#menuToggle').click(function(h){
        $('#menu').stop(true, true).slideToggle();
       h.stopPropagation();
    })
});





