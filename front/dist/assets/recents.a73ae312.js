import{u as t}from"./store.a37cfa08.js";import{_ as a}from"./navigationBar.cdbefede.js";import{_ as e}from"./navigationBarButton.f8dfd253.js";import{_ as s}from"./toggleButton.fbb36496.js";import{_ as l}from"./listView.2fa16caa.js";import{p as o,f as i,r as n,o as r,c,a as d,t as m,k as u,F as f,w as v,i as p}from"./vendor.0c58ddcb.js";import"./index.cc4b6a56.js";const g=v();o("data-v-53a284bd");const b={class:"full-name"},B={class:"last-name"},C={class:"first-name"};i();const _=g(((t,a,e,s,l,o)=>{const i=n("toggle-button"),v=n("navigation-bar-button"),p=n("navigation-bar"),_=n("list-view");return r(),c(f,null,[d(p,null,{center:g((()=>[d(i,{id:"recents-calls",data:l.sections,modelValue:l.section,"onUpdate:modelValue":a[1]||(a[1]=t=>l.section=t)},null,8,["data","modelValue"])])),right:g((()=>[d(v,{label:"Clear",onClick:s.deleteAllRecords},null,8,["onClick"])])),_:1}),"all"==l.section.value?(r(),c(_,{key:0,list:s.records},{default:g((a=>[d("div",{class:"list-item",onClick:e=>t.openContact(a.item.id)},[d("div",b,[d("span",B,m(a.item.lastName)+" ",1),d("span",C,m(a.item.firstName),1)])],8,["onClick"])])),_:1},8,["list"])):u("",!0)],64)}));const j={name:"Recents",components:{navigationBar:a,navigationBarButton:e,toggleButton:s,listView:l},data:()=>({section:{value:"all",title:"All"},sections:[{value:"all",title:"All"},{value:"missed",title:"Missed"}]}),setup(){document.title="Recent Calls | iOS";const{records:a,deleteAllRecords:e}=t("calls"),s=p((()=>a.value.filter((t=>t.missed))));return{records:a,missedCalls:s,deleteAllRecords:e}}};j.render=_,j.__scopeId="data-v-53a284bd";export default j;