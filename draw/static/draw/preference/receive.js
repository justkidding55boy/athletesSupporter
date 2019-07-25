
      // getting the URL (you may want to use for Exercise 3)
    var url = window.location.href;
    var url_large = false;
    var url_small = false;
    var url_normal = false;

			if (url.indexOf("large") > -1) {
				url_large = true;
        $('.display_size').text('large');
			} else if (url.indexOf("small") > -1){
				url_small = true;
        $('.display_size').text('small');
			} else {
        url_normal = true;
        $('.display_size').text('normal');
      }

   

  socket.onmessage = function(msg) {
    

    }
  
  

