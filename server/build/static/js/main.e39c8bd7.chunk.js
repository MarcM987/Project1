(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{14:function(e,t,a){e.exports=a(39)},19:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var r=a(1),o=a.n(r),n=a(13),c=a.n(n),l=(a(19),a(7)),s=a.n(l),i=a(11),m=(a(21),a(22),a(9)),p=a.n(m),d=a(4),u=a.n(d);var h=function(){return o.a.useEffect((function(){function e(){return(e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u()(".btn").on("click",Object(i.a)(s.a.mark((function e(){var t,a,r,o,n,c,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u()("#country").val().trim(),a="https://api.covid19api.com/summary",r=["Cholera","Diptheria","Japanese Encephalitis","Pertussis","Leprosy","Total Tetanus","Meningitis","Malaria","Poliomyelitis","Yellow Fever","H5N1 Influenze","Plague","Mupms","Tuberculosis","Congenital Rubella Syndrome","Neonatal Tetatnus","Total Rubella"],o="",n={async:!0,crossDomain:!0,url:"https://restcountries-v1.p.rapidapi.com/name/"+t,method:"GET",headers:{"x-rapidapi-host":"restcountries-v1.p.rapidapi.com","x-rapidapi-key":"38fb9f0126msh7282824fb92721fp160b73jsn317dc876bd2c"}},e.next=7,u.a.ajax(n).done((function(e){o=e[0].alpha3Code,console.log(o)}));case 7:for(c=function(e){i="https://apps.who.int/gho/athena/api/GHO/WHS3_"+(40+e)+".json?filter=COUNTRY:"+o,u.a.ajax({url:i,type:"GET",dataType:"jsonp"}).done((function(a){var o=a,n=o&&o.fact&&o.fact[0]&&o.fact[0].Dim&&o.fact[0].Dim.find((function(e){if("YEAR"===e.category)return!0}));console.log(n);var c=u()("<tr><td>"+t+"</td><td>"+r[e]+"</td><td>"+(o&&o.fact&&o.fact[0]&&o.fact[0].value&&o.fact[0].value.display||"No Data")+"</td><td>"+(n&&n.code||"No Data")+"</td></tr>");u()("#table2").append(c)}))},l=0;l<r.length;++l)c(l);u.a.ajax({url:a,type:"GET"}).done((function(e){for(var a=e,r=(new Date).getFullYear(),o=0;o<186;++o)if(a.Countries[o].Country==t){var n=u()("<tr><td>"+a.Countries[o].Country+"</td><td>COVID-19</td><td>"+a.Countries[o].TotalConfirmed+"</td><td>"+a.Countries[o].TotalDeaths+"</td><td>"+a.Countries[o].TotalRecovered+"</td><td>"+Math.trunc(a.Countries[o].TotalDeaths/a.Countries[o].TotalConfirmed*100)+"%</td><td>"+r+"</td></tr>");u()("#table1").html(n)}}));case 10:case"end":return e.stop()}}),e)})))),t={apiKey:"AIzaSyAmPHWsYDuAeFKVaMnAlIHO96CVG0kXRZs",authDomain:"groupproject1-73c74.firebaseapp.com",databaseURL:"https://groupproject1-73c74.firebaseio.com",projectId:"groupproject1-73c74",storageBucket:"groupproject1-73c74.appspot.com",messagingSenderId:"398999884281",appId:"1:398999884281:web:7eac86826ce3abc07fad28",measurementId:"G-VQXFZW71R4"},p.a.initializeApp(t),p.a.analytics(),console.log(p.a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("div",{className:"text-box"},o.a.createElement("h1",null,"COVID-19 Tracker"),o.a.createElement("p",null,"Compare COVID-19 to Infectious Diseases Worldwide"))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"form-row"},o.a.createElement("div",{className:"col"},o.a.createElement("input",{type:"text",id:"country",className:"form-control",placeholder:"Country"})),o.a.createElement("button",{className:"btn btn-primary",type:"search"},"Search"))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"table table-responsive table-wrapper-scroll-y my-custom-scrollbar"},o.a.createElement("table",{className:"table table-bordered table-hover"},o.a.createElement("thead",{className:"thead-dark scroll"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Country"),o.a.createElement("th",{scope:"col"},"Disease"),o.a.createElement("th",{scope:"col"},"Confirmed Cases"),o.a.createElement("th",{scope:"col"},"Deaths"),o.a.createElement("th",{scope:"col"},"Recovered"),o.a.createElement("th",{scope:"col"},"Mortalilty Rate"),o.a.createElement("th",{scope:"col"},"Year"))),o.a.createElement("tbody",{id:"table1"})))),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"table table-responsive table-wrapper-scroll-y my-custom-scrollbar"},o.a.createElement("table",{className:"table table-bordered table-hover"},o.a.createElement("thead",{className:"thead-dark"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Country"),o.a.createElement("th",{scope:"col"},"Disease"),o.a.createElement("th",{scope:"col"},"Cases"),o.a.createElement("th",{scope:"col"},"Year"))),o.a.createElement("tbody",{id:"table2"})))),o.a.createElement("div",{className:"footer"}," Copyright 2020 \xa9 Jessica VC | Marc M | Rafael "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e39c8bd7.chunk.js.map