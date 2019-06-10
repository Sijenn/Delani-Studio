
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



$("#submission").submit(function(event){
  var data_1 = $("input:first").val();
  var data_2 = $("input#mail").val();
  if(data_1 && data_2 != ""  ){
    $(".message").text("Thank you " + data_1 + " Your message has been received");
    $(".message").removeClass("error");
    $(".message").addClass("success");
  }else{
    $(".message").text("Error!!! Please fill in all the details correctly");
    $(".message").addClass("error");
  }
  event.preventDefault();
});
});



