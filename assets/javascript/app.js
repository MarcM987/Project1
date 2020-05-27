$(".btn").on("click", function() {
  var searchCountry = $("#country").val().trim();
  // var searchDisease = $("#disease").val().trim();

  var queryURLc = "https://api.covid19api.com/summary";

  //Coronavirus confirmed,deaths,recovered by Country
  //https://api.covid19api.com/summary

  //Coronavirus Confirmed Cases By Country
  //https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z

  //Provisional COVID-19 Death Counts by Sex, Age, and State
  //https://data.cdc.gov/resource/9bhg-hcku.json

  //General Disease API
  //https://apps.who.int/gho/athena/api/GHO/WHS3_40.json?filter=COUNTRY:USA

 

  var diseases = ["Cholera", "Diptheria", "Japanese Encephalitis", "Pertussis", "Leprosy", "Total Tetanus", "Meningitis", "Malaria",
    "Poliomyelitis", "Yellow Fever", "H5N1 Influenze", "Plague", "Mupms", "Tuberculosis", "Congenital Rubella Syndrome",
    "Neonatal Tetatnus", "Total Rubella"];

  var countryCode = "";
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://restcountries-v1.p.rapidapi.com/name/Norway",
    "method": "GET",
    "headers": {
    "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
    "x-rapidapi-key": "38fb9f0126msh7282824fb92721fp160b73jsn317dc876bd2c"
    }
  }
  
  $.ajax(settings).done(function (response) {
    countryCode = response[0].alpha3Code;
  });
  
  for(let i=0; i<diseases.length; ++i){
    var queryURLg = "https://apps.who.int/gho/athena/api/GHO/WHS3_" + (40 + i) + ".json?filter=COUNTRY:" + countryCode;

    $.ajax({
      url: queryURLg,
      type: "GET",
      dataType: "jsonp"
  
    }).done(function(data) {
      var response = data;
      
           
      var tblRow = $("<tr>" + 
      "<td>" + searchCountry + "</td>" + 
      "<td>" + diseases[i] + "</td>" + 
      "<td>" + response.fact[0].value.display + "</td>" + 
      "<td>" + response.fact[0].Dim[2].code + "</td>" + 
      "</tr>");

      $("#table2").append(tblRow);
    });

  }
  

  $.ajax({
    url: queryURLc,
    type: "GET",

  }).done(function(data) {
    var response = data;
    var today = new Date();
    var year = today.getFullYear();

    for(let i=0; i<186; ++i){
      if(response.Countries[i].Country == searchCountry){
        // console.log(response.Countries[i]);
        var tblRow = $("<tr>" + 
        "<td>" + response.Countries[i].Country + "</td>" + 
        "<td>" + "COVID-19" + "</td>" + 
        "<td>" + response.Countries[i].TotalConfirmed + "</td>" + 
        "<td>" + response.Countries[i].TotalDeaths + "</td>" + 
        "<td>" + response.Countries[i].TotalRecovered + "</td>" + 
        "<td>" + Math.trunc(response.Countries[i].TotalDeaths/response.Countries[i].TotalConfirmed*100) + "%</td>" + 
        "<td>" + year + "</td>" + 
        "</tr>");
        $("#table1").html(tblRow);

      }else{
        //append to buttom of form, country or disease not found
      }
      
    }
  });
});


    
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAmPHWsYDuAeFKVaMnAlIHO96CVG0kXRZs",
    authDomain: "groupproject1-73c74.firebaseapp.com",
    databaseURL: "https://groupproject1-73c74.firebaseio.com",
    projectId: "groupproject1-73c74",
    storageBucket: "groupproject1-73c74.appspot.com",
    messagingSenderId: "398999884281",
    appId: "1:398999884281:web:7eac86826ce3abc07fad28",
    measurementId: "G-VQXFZW71R4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();