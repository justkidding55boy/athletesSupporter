var users = {};
var table = [];

var active_color = "#f4f4f4";
var inactive_color = "b8b8b8";
var alert_color = "#ffa294";

var next_user = 1;

$(document).ready(function() {
  var ws = new WebSocket('wss://athletesSupporter-eijikudo883404.codeanyapp.com/ws/draw');

  ws.onmessage = function(msg) {
    var info = JSON.parse(msg.data);
    console.log(msg);
    var user_id = info.user_id;
    var status = info.status;
    if (status == "good") {
      // new user
      var new_user = {
        number: next_user,
        id: user_id,
        status: "good"
      }

      users[user_id] = new_user;
      table[next_user] = new_user;

      document.getElementById("tired-status-" + next_user).style.backgroundColor = "white";
      document.getElementById("water-status-" + next_user).style.backgroundColor = "white";
      document.getElementById("lost-status-" + next_user).style.backgroundColor = "white";
      document.getElementById("button-" + next_user).style.display = "inline";

      changeBackgroundColor(next_user);

      displayId(next_user, user_id);

      next_user = next_user + 1;
    } else {
      var user_number = users[user_id].number;

      if (status != "end") {
        switch (status) {
          case "tired":
            document.getElementById("tired-" + user_number).style.display = "inline";
            document.getElementById("happy-" + user_number).style.display = "none";
            document.getElementById("tired-status-" + user_number).style.backgroundColor = alert_color;
            break;
          case "water":
            document.getElementById("empty-" + user_number).style.display = "inline";
            document.getElementById("water-" + user_number).style.display = "none";
            document.getElementById("water-status-" + user_number).style.backgroundColor = alert_color;
            break;
          case "lost":
            document.getElementById("lost-" + user_number).style.display = "inline";
            document.getElementById("found-" + user_number).style.display = "none";
            document.getElementById("lost-status-" + user_number).style.backgroundColor = alert_color;
        }
      } else {

      }
    }



  }

  function changeBackgroundColor(number) {
    var element = document.getElementById("teammate-" + number);
    if (element.style.backgroundColor == active_color) {
      element.style.backgroundColor = inactive_color;
    } else {
      element.style.backgroundColor = active_color;
    }
  }

  function displayId(number, id) {
    var element = document.getElementById("user-id-" + number);
    element.innerHTML = "User ID: " + id;
  }
});

function resetStatus(id) {
//   console.log(id);
}
