(this["webpackJsonp@dashboard/web"]=this["webpackJsonp@dashboard/web"]||[]).push([[24],{233:function(a,e,t){"use strict";t.r(e);var s=t(0),l=t.n(s),o=t(106),n=t(101),r=t(18),c=t.n(r),m=function(a){return c()(a).format("Do MMM YY HH:mm:ss")};e.default=function(a){var e=a.overview,t=a.lastUpdatedAt,s=[{name:"Total Cases",colorClass:"color-blue",value:e.totalCases},{name:"Daily Cases",colorClass:"color-purple",value:e.dailyCases},{name:"Daily Deaths",colorClass:"color-red",value:e.dailyDeaths},{name:"Total Deaths",colorClass:"color-orange",value:e.totalDeaths}],r=Object(o.b)(s.length,s.map((function(a){return{from:{value:0},value:a.value,colorClass:a.colorClass,name:a.name}}))),c=Object(o.c)(5,{from:{transform:"translate3d(0, 30px, 0)",opacity:0},transform:"translate3d(0, 0px, 0)",opacity:1,config:{mass:1,tension:2e3,friction:200}});return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a.p,{style:c[0]},"Last updated on ",m(t)),l.a.createElement("div",{className:"stats-container"},r.map((function(a,e){var t=a.value,s=a.colorClass,r=a.name;return l.a.createElement("div",{className:"stats-container-item ".concat(s.value),key:e},l.a.createElement(o.a.p,{className:"stats-label",style:c[e+1]},r.value),l.a.createElement(o.a.div,{className:"stats-value",style:c[e+1]},t.interpolate((function(a){return Object(n.a)(Math.floor(a))}))))}))))}}}]);
//# sourceMappingURL=24.8e748d3e.chunk.js.map