(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{12:function(a,e){a.exports={countries:["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia (Plurinational State of)","Bosnia and Herzegovina","Botswana","Brazil","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Cook Islands","Costa Rica","Croatia","Cuba","Cyprus","Czechia","C\xf4te d'Ivoire","Democratic People's Republic of Korea","Democratic Republic of the Congo","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia (Federated States of)","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Republic of Korea","Republic of Moldova","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Tajikistan","Thailand","The former Yugoslav Republic of Macedonia","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United Republic of Tanzania","United States of America","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Yemen","Zambia","Zimbabwe"]}},16:function(a,e,t){a.exports=t(41)},21:function(a,e,t){},23:function(a,e,t){},24:function(a,e,t){},41:function(a,e,t){"use strict";t.r(e);var n=t(1),o=t.n(n),r=t(14),i=t.n(r),l=(t(21),t(8)),c=t.n(l),s=t(11),d=t(15),u=(t(23),t(24),t(7)),m=t.n(u),p=t(12),b=t(3),h=t.n(b);var f=function(){var a=o.a.useState("Marc"),e=Object(d.a)(a,2),t=e[0];return e[1],console.log({name:t}),console.log({countries:p.countries}),o.a.useEffect((function(){function a(){return(a=Object(s.a)(c.a.mark((function a(){var e,t;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e={apiKey:"AIzaSyAmPHWsYDuAeFKVaMnAlIHO96CVG0kXRZs",authDomain:"groupproject1-73c74.firebaseapp.com",databaseURL:"https://groupproject1-73c74.firebaseio.com",projectId:"groupproject1-73c74",storageBucket:"groupproject1-73c74.appspot.com",messagingSenderId:"398999884281",appId:"1:398999884281:web:7eac86826ce3abc07fad28",measurementId:"G-VQXFZW71R4"},m.a.initializeApp(e),m.a.analytics(),console.log(m.a),t=m.a.database(),h()(".btn").on("click",Object(s.a)(c.a.mark((function a(){var e,n,o,r,i,l,s,d;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=h()("#country").val().trim()||h()("#selectedCountry").val().trim(),console.log("Search Country: ",e),t.ref().push({countries:e,dataAdded:m.a.database.ServerValue.TIMESTAMP}),t.ref().on("child_added",(function(a){h()("#table3").append("<tr><td>"+a.val().countries+"</td><td>"+a.val().dataAdded+"</td></tr>")}),(function(a){console.log("Errors handled: "+a.code)})),n="https://api.covid19api.com/summary",o=["Cholera","Diptheria","Japanese Encephalitis","Pertussis","Leprosy","Total Tetanus","Meningitis","Malaria","Poliomyelitis","Yellow Fever","H5N1 Influenze","Plague","Mupms","Tuberculosis","Congenital Rubella Syndrome","Neonatal Tetatnus","Total Rubella"],r="",i={async:!0,crossDomain:!0,url:"https://restcountries-v1.p.rapidapi.com/name/"+e,method:"GET",headers:{"x-rapidapi-host":"restcountries-v1.p.rapidapi.com","x-rapidapi-key":"38fb9f0126msh7282824fb92721fp160b73jsn317dc876bd2c"}},a.next=10,h.a.ajax(i).done((function(a){r=a[0].alpha3Code,console.log(r)}));case 10:for(h()("#table2").html("<tr>"),l=function(a){d="https://apps.who.int/gho/athena/api/GHO/WHS3_"+(40+a)+".json?filter=COUNTRY:"+r,h.a.ajax({url:d,type:"GET",dataType:"jsonp"}).done((function(t){var n=t,r=n&&n.fact&&n.fact[0]&&n.fact[0].Dim&&n.fact[0].Dim.find((function(a){if("YEAR"===a.category)return!0})),i=h()("<tr><td>"+e+"</td><td>"+o[a]+"</td><td>"+(n&&n.fact&&n.fact[0]&&n.fact[0].value&&n.fact[0].value.display||"No Data")+"</td><td>"+(r&&r.code||"No Data")+"</td></tr>");h()("#table2").append(i)}))},s=0;s<o.length;++s)l(s);h.a.ajax({url:n,type:"GET"}).done((function(a){var t=a,n=(new Date).getFullYear();console.log("Table 1",t);for(var o=0;o<t.Countries.length;++o)if(t.Countries[o].Country==e){var r=h()("<tr><td>"+t.Countries[o].Country+"</td><td>COVID-19</td><td>"+t.Countries[o].TotalConfirmed+"</td><td>"+t.Countries[o].TotalDeaths+"</td><td>"+t.Countries[o].TotalRecovered+"</td><td>"+Math.trunc(t.Countries[o].TotalDeaths/t.Countries[o].TotalConfirmed*100)+"%</td><td>"+n+"</td></tr>");console.log("TableRow",r),h()("#table1").append(r)}})).catch((function(a){console.log("table1Error",a)})),h()("#country").val("");case 15:case"end":return a.stop()}}),a)}))));case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("div",{className:"text-box"},o.a.createElement("h1",null,"COVID-19 Tracker"),o.a.createElement("p",null,"Compare COVID-19 to Infectious Diseases Worldwide"))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",id:"country",className:"form-control",placeholder:"Country"})),o.a.createElement("select",{id:"selectedCountry"},p.countries.map((function(a){return o.a.createElement("option",{value:a},a)}))),o.a.createElement("button",{className:"btn btn-primary",type:"search"},"Search"))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"table table-responsive pre-scrollable"},o.a.createElement("table",{className:"table table-bordered table-hover"},o.a.createElement("thead",{className:"thead-dark scroll"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Country"),o.a.createElement("th",{scope:"col"},"Disease"),o.a.createElement("th",{scope:"col"},"Confirmed Cases"),o.a.createElement("th",{scope:"col"},"Deaths"),o.a.createElement("th",{scope:"col"},"Recovered"),o.a.createElement("th",{scope:"col"},"Mortalilty Rate"),o.a.createElement("th",{scope:"col"},"Year"))),o.a.createElement("tbody",{id:"table1"})))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"table table-responsive pre-scrollable"},o.a.createElement("table",{className:"table table-bordered table-hover"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Country"),o.a.createElement("th",{scope:"col"},"Disease"),o.a.createElement("th",{scope:"col"},"Cases"),o.a.createElement("th",{scope:"col"},"Year"))),o.a.createElement("tbody",{id:"table2"})))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"table table-responsive pre-scrollable"},o.a.createElement("table",{className:"table table-bordered table-hover"},o.a.createElement("thead",{className:"thead-dark scroll"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Searched Countries"),o.a.createElement("th",{scope:"col"},"TimeStamp"))),o.a.createElement("tbody",{id:"table3"})))),o.a.createElement("div",{className:"footer"}," Copyright 2020 \xa9 Jessica VC | Marc M | Rafael "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.cc53b2c3.chunk.js.map