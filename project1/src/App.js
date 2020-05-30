import React from 'react';
// import logo from './logo.svg';
import './assets/css/reset.css';
import './assets/css/style.css';
import firebase from 'firebase';

import $ from 'jquery';

function App() {

  React.useEffect(function(){
    async function wait(){
      $(".btn").on("click", async function() {
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
          "url": "https://restcountries-v1.p.rapidapi.com/name/" + searchCountry,
          "method": "GET",
          "headers": {
          "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_RAPIDCOUNTRYCODE_API_KEY
          }
        }
        
        await $.ajax(settings).done(function (response) {
          countryCode = response[0].alpha3Code;
          console.log(countryCode);
        });
  
        
        for(let i=0; i<diseases.length; ++i){
          var queryURLg = "https://apps.who.int/gho/athena/api/GHO/WHS3_" + (40 + i) + ".json?filter=COUNTRY:" + countryCode;
      
          $.ajax({
            url: queryURLg,
            type: "GET",
            dataType: "jsonp"
        
          }).done(function(data) {
            var response = data;
  
            var year = response && response.fact && response.fact[0] && response.fact[0].Dim && response.fact[0].Dim.find(function(dimObject){
              if(dimObject.category === "YEAR"){
                return true;
              }
            });
  
            console.log(year);
            
                 
            var tblRow = $("<tr>" + 
            "<td>" + searchCountry + "</td>" + 
            "<td>" + diseases[i] + "</td>" + 
            "<td>" + (response && response.fact && response.fact[0] && response.fact[0].value && response.fact[0].value.display || "No Data") + "</td>" + 
            "<td>" + (year && year.code || "No Data") + "</td>" +
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
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
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
  
      console.log(firebase);

    }
    wait();

  },[]);

  return (
  <>
    <header>
        <div className="text-box">
            <h1>COVID-19 Tracker</h1>
            <p>Compare COVID-19 to Infectious Diseases Worldwide</p>
        </div>
    </header>


    <div className="container">
        <div className="form-row">
            <div className="col">
                <input type="text" id="country" className="form-control" placeholder="Country"/>
            </div>
            {/* <!-- <div className="col">
                <input type="text" id="disease" className="form-control" placeholder="Disease"/>
            </div> --> */}
            <button className="btn btn-primary" type="search">Search</button>
        </div>
    </div>


    <div className="card">
        <div className="table table-responsive pre-scrollable">
            <table className="table table-bordered table-hover">
                <thead className="thead-dark scroll">
                    <tr>
                        <th scope="col">Country</th>
                        <th scope="col">Disease</th>
                        <th scope="col">Confirmed Cases</th>
                        <th scope="col">Deaths</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Mortalilty Rate</th>
                        <th scope="col">Year</th>
                    </tr>
                </thead>
                <tbody id="table1">

                </tbody>

            </table>
        </div>
    </div>

    <div className="card">
            <div className="table table-responsive pre-scrollable">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Country</th>
                            <th scope="col">Disease</th>
                            <th scope="col">Cases</th>
                            <th scope="col">Year</th>
                        </tr>

                    </thead>
                    <tbody id="table2">
                        
                    </tbody>

                </table>
            </div>
      </div>

    <div className="footer"> Copyright 2020 &copy; Jessica VC | Marc M | Rafael </div>
  </>  
  );
}

export default App;
