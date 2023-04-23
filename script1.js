var div = document.createElement("div");
div.style.textAlign = "center";
div.style.marginTop = "150px";

var input_date = document.createElement("input");
input_date.setAttribute("type", "date");
input_date.id = "dob";
input_date.style.width = "20%"
input_date.style.textAlign = "center";

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Display data";
button.style.marginLeft = "10px"

button.addEventListener("click", displaydata);


function displaydata() {
  var input = document.getElementById("dob").value;

  var birthdate = new Date(input);
  console.log(birthdate);

  var currentdate = new Date();
  console.log(currentdate);

  var MilliSec = parseInt(currentdate.getTime()) - parseInt(birthdate.getTime());
  console.log(`MilliSec: ${MilliSec}`);

  var Sec = Math.floor(MilliSec / 1000);
  console.log(`Sec: ${Sec}`);

  var Min = Math.floor(Sec / 60);
  console.log(`Min: ${Min}`);

  var Hr = Math.floor(Min / 60);
  console.log(`Hr: ${Hr}`);

  var Day = Math.floor(Hr/24);
  console.log(`Day: ${Day}`);

  var Year=currentdate.getFullYear()-birthdate.getFullYear();
  console.log(`Year: ${Year}`);

  var Month= Year*2 + (currentdate.getMonth())-(birthdate.getMonth());
  console.log(`Months: ${Month}`);

  var pYear = document.createElement("p");
  pYear.innerHTML = `Age in years: ${Year}`;

  var Dis_year=document.createElement("p");
  Dis_year.innerHTML= `Number of Years: ${Year}`;

  var Dis_month=document.createElement("p");
  Dis_month.innerHTML= `Number of Months: ${Month}`;

  var Dis_days=document.createElement("p");
  Dis_days.innerHTML= `Number of Days: ${Day}`;

  var Dis_hr=document.createElement("p");
  Dis_hr.innerHTML= `Number of Hours: ${Hr}`;

  var Dis_sec=document.createElement("p");
  Dis_sec.innerHTML= `Number of Seconds: ${Sec}`;
  
  var Dis_ms=document.createElement("p");
  Dis_ms.innerHTML= `Number of Milliseconds: ${MilliSec}`;

 div.append(Dis_year, Dis_month, Dis_days, Dis_hr, Dis_sec, Dis_ms);
}

div.append(input_date, button);
document.body.append(div);

  