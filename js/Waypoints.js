$(window).scroll(function(){

    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  //250 is fade pixels
  });
   // jQuery methods go here...
$('#s1').addClass("active");


$('#2').waypoint(function() {

  $("#s1").removeClass("active");
 
$("#s2").addClass("active");
  
  
},
{ offset: 101 });



$('#skills-3').waypoint(function() {

  $("#s2").removeClass("active");
 
$("#s3").addClass("active");
},
{ offset: 120 });


var skillsTrigger =
$('#skills-3').waypoint(function() {

$(function() {
    
  $('.skills__progressbar').each(function(){
    var t = $(this);
    var dataperc = t.attr('data-perc'),
        barperc = Math.round(dataperc*5.56);
    t.find('.bar').animate({width:barperc}, dataperc*25);
    t.find('.label').append('<div class="perc"></div>');
    
    function perc() {
      var length = t.find('.bar').css('width'),
        perc = Math.round(parseInt(length)/5.56),
        labelpos = (parseInt(length)-2);
      t.find('.label').css('left', labelpos);
      t.find('.perc').text(perc+'%');
    }
    perc();
    setInterval(perc, 0); 
  });
});

   var bar = new ProgressBar.Circle(circle1, {
  color: '#0af',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#0af',
    width: 1
  },
  to: {
    color: '#0076D5',
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2.5rem';
bar.text.style.marginTop = '-0.3rem';
   bar.animate(0.99);
   
   
   var bar = new ProgressBar.Circle(circle2, {
  color: '#0af',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#0af',
    width: 1
  },
  to: {
    color: '#0076D5',
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2.5rem';
bar.text.style.marginTop = '-0.3rem';
   bar.animate(0.90);
   
   
   
   var bar = new ProgressBar.Circle(circle3, {
  color: '#0af',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#0af',
    width: 1
  },
  to: {
    color: '#0076D5',
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2.5rem';
bar.text.style.marginTop = '-0.3rem';
   bar.animate(0.82);
   
   
   var bar = new ProgressBar.Circle(circle4, {
  color: '#0af',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#0af',
    width: 1
  },
  to: {
    color: '#0076D5',
    width: 6
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }



});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2.5rem';
bar.text.style.marginTop = '-0.3rem';
   bar.animate(0.93);
 
},
{ offset: 120 });





$('#sections').waypoint(function() {
  $("nav ul li").children().removeClass("active");
  $("#s1").addClass("active");
}, { offset: -100 });