
//tap

var $tapElm = document.getElementById('gesture-box');
var $tapObj = new Hammer($tapElm);

$tapObj.on('tap', function() {
  console.log('tapped');
});

//swipe
var $swipeElm = document.getElementById('gesture-box');
var $swipeObj = new Hammer($swipeElm);
//    $jqExampleElm = $($tapElm);
$swipeObj.get("swipe").set({ enable: true});
$swipeObj.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
$swipeObj.on('swipe', function() {
  console.log('swipe');
});
    
