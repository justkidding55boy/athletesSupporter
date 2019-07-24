var ws = new WebSocket('wss://athletesSupporter-eijikudo883404.codeanyapp.com/ws/draw');

ws.onmessage = function(msg) {
  var info = JSON.parse(msg.data);
}