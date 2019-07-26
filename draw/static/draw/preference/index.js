$(document).ready(function() {
  
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
//     console.log(msg.data);
    var received_user = JSON.parse(msg.data);
//     console.log(received_user);
  }
  
  
  var send = function(sending_user) {
    var json = JSON.stringify(sending_user);
    ws.send(json);
  }
  
  
//   //tap

//   var $tapElm = document.getElementById('gesture-box');
//   var $tapObj = new Hammer.Manager($tapElm);

//   var doubleTap = new Hammer.Tap({event: 'doubletap', taps:2});
//   var singleTap = new Hammer.Tap({event: 'singletap'});

//   $tapObj.add([doubleTap, singleTap]);
//   doubleTap.recognizeWith([singleTap]);
//   singleTap.requireFailure(doubleTap);

//   $tapObj.on('doubletap', function(e) {
//     $('#message').text('doubletap');
//     $('.sent').fadeIn('fast');
//     $('.sent-tired').css('display', 'block');
//     user.status = "tired";
//     send(user);
    
//     setTimeout(function() {
//       $('.sent').fadeOut();
//     }, 1500);
//     setTimeout(function(){
//       $('.sent-tired').css('display', 'none');
//     }, 1750);
//   });
  
//   $('#message').text('hello');
  
  $("#alert").html(`<p>Your ID = ${user.user_id}</p>`);
  
  $('#alert').click(function(){
    $("#alert").fadeOut();
  });
  
  

  //swipe
  var $swipeElm = document.getElementById('gesture-box');
  var $swipeObj = new Hammer($swipeElm);
  //    $jqExampleElm = $($tapElm);
  $swipeObj.get("swipe").set({ enable: true});
  $swipeObj.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
  
  $swipeObj.on('swiperight', function(){
    $('#message').text('swiperight');
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
 
  $swipeObj.on('swipeup', function() {

    $('#message').text('swipeup');
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
  
  $swipeObj.on('swipedown', function() {

    $('#message').text('swipedown');
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
