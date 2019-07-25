$(document).ready(function() {
  var ws = new WebSocket('wss://athletesSupporter-eijikudo883404.codeanyapp.com/ws/draw');

  var users = {}
  
  ws.onmessage = function(msg) {
    var info = JSON.parse(msg.data);
    var user_id = info.user_id;
    var status = info.status;
    if (status == "good") {
      var new_user = {
        number: 1,
        id: user_id,
        status: "good"
      }
    }
  }
  
});