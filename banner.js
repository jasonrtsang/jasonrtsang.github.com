  $(function() {
    var images = ['jasontsang1.png', 'jasontsang2.png', 'jasontsang3.png', 'jasontsang4.png', 'jasontsang5.png', 'jasontsang6.png'];
    $('#banner').css({'content': 'url(/images/banner/' + images[Math.floor(Math.random() * images.length)] + ')'});
   });