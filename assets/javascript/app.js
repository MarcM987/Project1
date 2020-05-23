$(".btn").on("click", function() {
  // var searchterm = $("#search-term").val().trim();
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
    console.log(data);



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