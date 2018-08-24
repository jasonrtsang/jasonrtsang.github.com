$(function() {
  var images = ["jasontsang1.png", "jasontsang2.png", "jasontsang3.png", "jasontsang4.png", "jasontsang5.png", "jasontsang6.png"];
  $("#banner").css({'content': 'url(/images/banner/' + images[Math.floor(Math.random() * images.length)] + ')'});
    
  var mail = ["tsang", "jsn", 64, ".com", "mail", "g"];
  document.getElementById("eaddress").textContent = mail[1] + mail[0] + String.fromCharCode(mail[2]) + mail[5] + mail[4] + mail[3];
});

function Toggle() {
  $("#toggle").toggle();
}
