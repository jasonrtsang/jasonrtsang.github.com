$(function() {  
  var mail = ["tsang", "jsn", 64, ".com", "mail", "g"];
  document.getElementById("eaddress").textContent = mail[1] + mail[0] + String.fromCharCode(mail[2]) + mail[5] + mail[4] + mail[3];
});

function Toggle() {
  $("#toggle").toggle();
}
