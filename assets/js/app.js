var profile_pic = $("#profile_pic");
var myname = $("#name");
var description = $("#description");
var links = $(".links");

var tl = new TimelineMax();
tl.fromTo(
    profile_pic,
    .3,
    {opacity:'0'},
    {opacity:'1',
     ease:Power1.easeOut})
.fromTo(
    myname,
    .3,
    {opacity:'0'},
    {opacity:'1',
     ease:Power1.easeOut})
.fromTo(
    description,
    .3,
    {opacity:'0'},
    {opacity:'1',
     ease:Power1.easeOut})
    .fromTo(
    links,
    1,
    {left:'-350px'},
    {left: '150px'}
);
