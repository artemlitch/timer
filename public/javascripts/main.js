var dsim = new Date(2016, 04, 31, 12, 50, 0,0);
var dme = new Date();
var clock = $('.your-clock').FlipClock({
    countdown: true
});
var difference = dsim - dme;
difference = difference/1000;
clock.setTime(difference);
clock.start();
