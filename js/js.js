$(function(){
    $('input[type=submit]').click(sendData);
})
function sendData(e){
     e.preventDefault();
        if( !$('form')[0].checkValidity() ){
             $('#incorrect').show();
         return;
        }
    $.ajax({
        url:"https://formspree.io/andriyhischynskyy@gmail.com",
        method: "POST",
        data: $('form').serializeArray(),
        dataType: "json"
    }) 
    .done(function(){
        $('form')[0].reset();
        $('#thanks').show();
        });
}