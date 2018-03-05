$(window).scroll(function(){

    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  //250 is fade pixels
  });
   // jQuery methods go here...
$('#s1').addClass("active");
$('#home-icon').addClass("active");


$('#2').waypoint(function() {

  $("#s1").removeClass("active");
  $('#home-icon').removeClass("active");



$("#s2").addClass("active");
$("#about-icon").addClass("active");
  
  
},
{ offset: 101 });



$('#skills-3').waypoint(function() {

  $("#s2").removeClass("active");
  $('#about-icon').removeClass("active");
 
$("#s3").addClass("active");
$("#skills-icon").addClass("active");



},
{ offset: 120 });






var skillsTrigger =
$('#skills-3').waypoint(function() {

$(function() {
    
  $('.skills__progressbar').each(function(){
    var t = $(this);
    var dataperc = t.attr('data-perc'),
        barperc = Math.floor((dataperc*5.56 / 554) * 100);
    t.find('.bar').animate({width:barperc+"%"}, dataperc*25,);
    t.find('.label').append('<div class="perc"></div>');
    
    function perc() {
      var length = t.find('.bar').css('width'),
      labelpos = (parseInt(length)-2);
      t.find('.label').css('left', labelpos);
      t.find('.perc').text(barperc +'%');
    }
    perc();
    setInterval(perc, 0); 
  });

  
});

   this.destroy()
 
},
{ offset: 120 });


var skillsTrigger2 =
$('#language-skills-3').waypoint(function() {

$(function() {
    
  
    
  

bar1.animate(1);
bar2.animate(0.90);
bar3.animate(0.60);  
});

   this.destroy()
 
},
{ offset: 120 });


$('#4').waypoint(function() {

  $("#s3").removeClass("active");
  $('#skills-icon').removeClass("active");
 
$("#s4").addClass("active");
$("#experience-icon").addClass("active");



},
{ offset: 120 });

$('#5').waypoint(function() {

  $("#s4").removeClass("active");
  $('#experience-icon').removeClass("active");
 
$("#s5").addClass("active");
$("#education-icon").addClass("active");



},
{ offset: 120 });

$('#6').waypoint(function() {

  $("#s5").removeClass("active");
  $('#education-icon').removeClass("active");
 
$("#s6").addClass("active");
$("#portfolio-icon").addClass("active");



},
{ offset: 120 });

$('#7').waypoint(function() {

  $("#s6").removeClass("active");
  $('#portfolio-icon').removeClass("active");
 
$("#s7").addClass("active");
$("#contact-icon").addClass("active");



},
{ offset: 120 });




$('#sections').waypoint(function() {
  $("nav ul li").children().removeClass("active");
  $("#s1").addClass("active");
}, { offset: -100 });