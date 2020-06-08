const dayOfWeek = dateStr => {
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var day = days[ dateStr.getDay() ];
return day;
};
console.log(dayOfWeek('Auguest 25,1987'));
console.log(dayOfWeek('January 19,2012'));