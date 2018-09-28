$(function() {  
  var mail = ["on", "jas", 64, ".com", "tsang", "jasonr"];
  document.getElementById("eaddress").textContent = mail[1] + mail[0] + String.fromCharCode(mail[2]) + mail[5] + mail[4] + mail[3];
});

function Toggle() {
  $("#toggle").toggle();
}
