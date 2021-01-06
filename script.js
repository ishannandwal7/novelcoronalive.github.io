$(document).ready(function(){
    
    $('#new').hide();
   $('.intro').fadeOut(4000);
   $('#new').fadeIn(6000);
const sett = {
   "async": true,
   "crossDomain": true,
   "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=india",
   "method": "GET",
   "headers": {
       "x-rapidapi-key": "cbc09da551mshabef0758e18b536p12f19cjsned97db08a990",
       "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
   }
};
$.ajax(sett).done(function(resp){
 console.log(resp);
 var con=resp.data.confirmed;
 var rec=resp.data.recovered;
 var dea=resp.data.deaths;
 var time=resp.data.lastChecked;
 $('#time_date').empty();
 $('#time_date').append("Last Checked:"+time);

 $('#li1,#li2,#li3,#li4,#li5').empty();
$('#li1').append(con);
$('#li2').append(dea);
$('#li3').append("Unavailable");
$('#li4').append("Unavailable");
$('#li5').append(rec);
});
  $('input').focus(function(){
      $(this).css(
          "height","30px"
      );
  });
  $('input').blur(function(){
      $('#sub').css(
          "height","30px","width","80px"
      );
      $(this).css(
          "height","20px"
      );
  });
  $('button').click(function()
  {
    var n=$('#name').val();
    //alert(n);
    
    var l="https://covid-193.p.rapidapi.com/statistics?country="+n;
    //alert(l);
    const settings = {
      
"async": true,
"crossDomain": true,
"url":l,
"method": "GET",
"headers": {
"x-rapidapi-key": "cbc09da551mshabef0758e18b536p12f19cjsned97db08a990",
"x-rapidapi-host": "covid-193.p.rapidapi.com"
}
    };

$.ajax(settings).done(function (res) {
console.log(res);

var conf=res.response[0].cases.total;
//alert("total cri"+conf);
var deat=res.response[0].deaths.total;
var reco=res.response[0].cases.recovered;
var crit=res.response[0].cases.critical;
var acti=res.response[0].cases.active;
var tim=res.response[0].time;
$('#time_date').empty();
 $('#time_date').append("Last Checked:"+tim);
$('#li1,#li2,#li3,#li4,#li5').empty();
$("#temp_country").empty();
    $("#temp_country").append(n);
$('#li1').append(conf);
$('#li2').append(deat);
$('#li3').append(crit);
$('#li4').append(acti);
$('#li5').append(reco);
});
});
});