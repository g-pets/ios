import{g as e}from"./vendor.0c58ddcb.js";const l=e({appInstalled:!1,deviceUnlocked:!1});function t(){localStorage.getItem("appInstalled")&&(l.appInstalled=JSON.parse(localStorage.getItem("appInstalled"))),localStorage.getItem("deviceUnlocked")&&(l.deviceUnlocked=JSON.parse(localStorage.getItem("deviceUnlocked")));return{deviceState:l,appInstalled:e=>{l.appInstalled=e,localStorage.setItem("appInstalled",e)},deviceUnlocked:e=>{l.deviceUnlocked=e,localStorage.setItem("deviceUnlocked",e)}}}export{t as d};
