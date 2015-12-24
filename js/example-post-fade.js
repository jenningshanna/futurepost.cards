$(document).ready(function(){
    setImageOne();
});

function setImageOne() {
  $('#imageSwap').fadeIn(500).html('<img src="images/postcard-text-example-index.png" />').delay(5000).fadeOut(500, function () { setImageTwo(); });
}

function setImageTwo() {
  $('#imageSwap').fadeIn(500).html('<img src="images/postcard-text-example2-index.png" />').delay(5500).fadeOut(500, function () { setImageThree(); });
}

function setImageThree() {
  $('#imageSwap').fadeIn(500).html('<img src="images/postcard-text-example3-index.png" />').delay(6500).fadeOut(500, function () { setImageOne(); });
}