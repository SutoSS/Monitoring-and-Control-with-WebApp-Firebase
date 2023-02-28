const loginElement = document.querySelector('#login-form');
const contentElement = document.querySelector("#content-sign-in");
const userDetailsElement = document.querySelector('#user-details');
const authBarElement = document.querySelector("#authentication-bar");

// Elements for sensor readings
const tempElement = document.getElementById("temp");
const humElement = document.getElementById("humudara");
const luxElement = document.getElementById("lux");
const hum1Element = document.getElementById("humtanah1");
const hum2Element = document.getElementById("humtanah2");
const ledElement = document.getElementById("ml");
const manElement = document.getElementById("manual");

var dbPathLed;
var dbPathMan;

// MANAGE LOGIN/LOGOUT UI
const setupUI = (user) => 
{
  if (user) 
  {
    //toggle UI elements
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    authBarElement.style.display ='block';
    userDetailsElement.style.display ='block';
    userDetailsElement.innerHTML = user.email;

    // get user UID to get data from database
    var uid = user.uid;
    console.log(uid);

    // Database paths (with user UID)
    var dbPathTemp = 'Sensor/temperature';
    var dbPathHum = 'Sensor/humidity';
    var dbPathLux = 'Sensor/lux';
    var dbPathHum1 = 'Sensor/soil_moisture_1';
    var dbPathHum2 = 'Sensor/soil_moisture_2';
    dbPathMan = 'Control';
    dbPathLed = 'Control';


    // Database references
    var dbRefTemp = firebase.database().ref().child(dbPathTemp);
    var dbRefHum = firebase.database().ref().child(dbPathHum);
    var dbRefLux = firebase.database().ref().child(dbPathLux);
    var dbRefHum1 = firebase.database().ref().child(dbPathHum1);
    var dbRefHum2 = firebase.database().ref().child(dbPathHum2);

    // Update page with new readings
    dbRefTemp.on('value', snap => 
    {

      tempElement.innerText = snap.val().toFixed(2);
      var x = (new Date()).getTime(),
      y= parseFloat(snap.val().toFixed(2));
      if(chartT.series[0].data.length > 40) 
      {
        chartT.series[0].addPoint([x, y], true, true, true);
      } 
      else 
      {
        chartT.series[0].addPoint([x, y], true, false, true);
      }
    
    });

    dbRefHum.on('value', snap => 
    {
      humElement.innerText = snap.val().toFixed(2);
      var x = (new Date()).getTime(),
      y= parseFloat(snap.val().toFixed(2));
      if(chartH.series[0].data.length > 40) 
      {
        chartH.series[0].addPoint([x, y], true, true, true);
      } 
      else 
      {
        chartH.series[0].addPoint([x, y], true, false, true);
      }
    });

    dbRefLux.on('value', snap => 
    {
      luxElement.innerText = snap.val().toFixed(2);
      var x = (new Date()).getTime(),
      y= parseFloat(snap.val().toFixed(2));
      if(chartL.series[0].data.length > 40) 
      {
        chartL.series[0].addPoint([x, y], true, true, true);
      } 
      else 
      {
        chartL.series[0].addPoint([x, y], true, false, true);
      }
    });

    dbRefHum1.on('value', snap => 
    {
      hum1Element.innerText = snap.val().toFixed(2);
      var x = (new Date()).getTime(),
      y= parseFloat(snap.val().toFixed(2));
      if(chartSM1.series[0].data.length > 40) 
      {
        chartSM1.series[0].addPoint([x, y], true, true, true);
      } 
      else 
      {
        chartSM1.series[0].addPoint([x, y], true, false, true);
      }
    });

    dbRefHum2.on('value', snap => 
    {
      hum2Element.innerText = snap.val().toFixed(2);
      var x = (new Date()).getTime(),
      y= parseFloat(snap.val().toFixed(2));
      if(chartSM2.series[0].data.length > 40) 
      {
        chartSM2.series[0].addPoint([x, y], true, true, true);
      } 
      else 
      {
        chartSM2.series[0].addPoint([x, y], true, false, true);
      }
    });

  // if user is logged out
  } 
  else
  {
    // toggle UI elements
    loginElement.style.display = 'block';
    authBarElement.style.display ='none';
    userDetailsElement.style.display ='none';
    contentElement.style.display = 'none';
  }
}
function toggleLed() {
  console.log("Toggle");
  if (ledElement.checked) 
  {
    console.log("led ON");
    firebase.database().ref(dbPathLed).set(1);
  }
  else{
    console.log("led OFF");
    firebase.database().ref(dbPathLed).set(3);
  }
}
function toggleMan() {
  console.log("Toggle");
  if (manElement.checked) 
  {
    console.log("led ON");
    firebase.database().ref(dbPathMan).set(2);
  }
  else{
    console.log("led OFF");
    firebase.database().ref(dbPathMan).set(3);
  }
}