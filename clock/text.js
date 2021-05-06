var hourHand = document.getElementById('hourHand');
var minuteHand = document.getElementById('minuteHand');
var secondHand = document.getElementById('secondHand');


function initclock(){
     var date =new Date();
     var hour = date.getHours()  % 12;
     var minute = date.getMinutes();
     var second = date.getSeconds();


     var hourDeg = (hour * 30) +(0.5 * minute);
     var minuteDeg = (minute * 6) + (0.1 * second);
     var secondDeg=second * 6;


     hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
     minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
     secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';


     setTimeout(initclock,1000);

};




initclock();