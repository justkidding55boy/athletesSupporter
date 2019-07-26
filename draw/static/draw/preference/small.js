
$(document).ready(function(){
  var ws = new WebSocket('wss://athletesSupporter-eijikudo883404.codeanyapp.com/ws/draw');

  //   var socket = new WebSocket(
  //         'wss://p3-websockets-justkidding55boy-eijikudo883404.codeanyapp.com/ws/draw');
  //   socket.send('Hello');

  ws.onclose = function(e) {
   console.error('Chat socket closed unexpectedly');
  }

//   ws.send("Hello");
  
  var random = Math.floor(Math.random() * 100);
  
  var user = {
    user_id:random,
    status: "good"
  };
  
  
  var json = JSON.stringify(user);
  
  ws.onopen = function() {
    ws.send(json);
  }
  

  

  ws.onmessage = function(msg) {
    console.log(msg.data);
    var received_user = JSON.parse(msg.data);
    console.log(received_user);
  }

  var send = function(sending_user) {
    var json = JSON.stringify(sending_user);
    ws.send(json);
  }
  
  
  $("#alert").html(`<p>Your ID = ${user.user_id}</p>`);
  
  $('#alert').click(function(){
    $("#alert").fadeOut();
  });
  
  
  
    //tap for tired
  var $tiredElm = document.getElementById('tired');
  var $tiredObj = new Hammer($tiredElm);

  // $jqExampleElm = $($tiredElm);

  $tiredObj.on('tap', function() {
    $('.sent').fadeIn('fast');
    $('.sent-tired').css('display', 'block');
    
    user.status = "tired";
    send(user);
    
    setTimeout(function() {
      $('.sent').fadeOut();
    }, 1500);
    setTimeout(function(){
      $('.sent-tired').css('display', 'none');
    }, 1750);
  }); 

  //tap for water
  var $waterElm = document.getElementById('water');
  var $waterObj = new Hammer($waterElm);
  // $jqExampleElm = $($tiredElm);

  $waterObj.on('tap', function() {
    $('.sent').fadeIn('fast');
    $('.sent-water').css('display', 'block');
    
    user.status = "water";
    send(user);    
    
    setTimeout(function() {
      $('.sent').fadeOut();
    }, 1500);

    setTimeout(function(){
      $('.sent-water').css('display', 'none');
    }, 1750);
  }); 

  //tap for lost
  var $lostElm = document.getElementById('lost');
  var $lostObj = new Hammer($lostElm);
  // $jqExampleElm = $($tiredElm);

  $lostObj.on('tap', function() {
    $('.sent').fadeIn('fast');
    $('.sent-lost').css('display', 'block');
    
    user.status = "lost";
    send(user);    
    
    setTimeout(function() {
      $('.sent').fadeOut();
    }, 1500);
      setTimeout(function(){
      $('.sent-lost').css('display', 'none');
    }, 1750);
  }); 


});
