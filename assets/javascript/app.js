$(".btn").on("click", function() {
  var searchCountry = $("#country").val().trim();
  // var searchDisease = $("#disease").val().trim();

  var queryURL = "https://api.covid19api.com/summary";

  //Coronavirus confirmed,deaths,recovered by Country
  //https://api.covid19api.com/summary

  //Coronavirus Confirmed Cases By Country
  //https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z

  //Provisional COVID-19 Death Counts by Sex, Age, and State
  //https://data.cdc.gov/resource/9bhg-hcku.json

  //General Disease API


  $.ajax({
    url: queryURL,
    type: "GET",

  }).done(function(data) {
    var response = data;

    for(let i=0; i<186; ++i){
      if(response.Countries[i].Country == searchCountry){
        console.log(response.Countries[i]);
        var tblRow = $("<tr>" + 
        "<td>" + response.Countries[i].Country + "<td>" + 
        "<td>" + response.Countries[i].TotalConfirmed + "<td>" + 
        "<td>" + response.Countries[i].TotalDeaths + "<td>" + 
        "<td>" + response.Countries[i].TotalRecovered + "<td>" + 
        "<td>" + Math.trunc(response.Countries[i].TotalDeaths/response.Countries[i].TotalConfirmed*100) + "%<td>" + 
        "<tr>");
        $("tbody").append(tblRow);

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