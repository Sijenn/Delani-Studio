
/************************* WHAT WE DO ***************************************************/
$(document).ready(function(){
  $(".tgl p").hide();
$("#design").click(function(){
    $("#design img").toggle();
   $("#design p").toggle();
});
$("#develop").click(function(){
  $("#develop img").toggle();
 $("#develop p").toggle();
});
$("#management").click(function(){
  $("#management img").toggle();
 $("#management p").toggle();
});
})

/*************** FORM SECTION*********************************/
$(document).ready(function() {
  $("form#contacts").submit(function(event) {

    event.preventDefault();
    var name = $.trim($('#name').val());
    var email = $.trim($('#email').val());
    if ((name === '') || (email === '')) {
      alert('Please enter a name and your email address to continue.');
      return false;
    } else {
      alert("Hello " + name + "Your message has been received, thankyou.");
      $(".submit")[0].reset();
    }
  });
});

/************** PORTFOLIO ********************************/
  $(document).ready(function() {
  $(".folio").hover(function(){
    $(".folio p").show().css({
      "position":"absolute",
      "color": "white",
      "top": "50%",
      "left": "30%"
    });
  });
  $(".folio").mouseleave(function (){
    $(".folio p").hide();
  });
})
