var bar1 = new ProgressBar.Circle(circle1, {
  color: '#fff',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1500,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#0157ae',
    width: 1
  },
  to: {
    color: '#0157ae',
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
      circle.setText(value +"%");
    }

  }
});




bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar1.text.style.fontSize = '2.5rem';
bar1.text.style.marginTop = '-0.3rem';
bar1.animate(0.99);
   
   
   var bar2 = new ProgressBar.Circle(circle2, {
  color: '#FFC400',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1500,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#0af',
    width: 1
  },
  to: {
    color: '#C60B1E',
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
      circle.setText(value +"%");
    }

  }
});
bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar2.text.style.fontSize = '2.5rem';
bar2.text.style.marginTop = '-0.3rem';
   bar2.animate(0.90);
   
   
   
   var bar3 = new ProgressBar.Circle(circle3, {
  color: '#de0035',
  strokeWidth: 6,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1500,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#FFFFFF',
    width: 1
  },
  to: {
    color: '#FFFFFF',
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
      circle.setText(value +"%");
    }

  }
});
bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar3.text.style.fontSize = '2.5rem';
bar3.text.style.marginTop = '-0.3rem';
   bar3.animate(0.82);
   
   
  




