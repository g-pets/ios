import{u as t}from"./store.9c6d1abd.js";import{_ as s,a}from"./navigationBarButton.a1acfb0e.js";import{_ as o,a as n}from"./listView.79ed91ec.js";import{p as e,e as c,f as i,b as r,c as l,d,t as m,w as u,o as p}from"./vendor.23464d0d.js";const f=u();e("data-v-7287f759");const v={class:"contacts"},g={class:"full-name"},b={class:"last-name"},B={class:"first-name"};c();const _=f(((t,s,a,o,n,e)=>{const c=i("navigation-bar-button"),u=i("navigation-bar"),p=i("list-view");return r(),l("div",v,[d(u,{title:"All Contacts"},{right:f((()=>[d(c,{glyph:"plus"})])),_:1}),d(p,{list:e.sortedContacts},{default:f((t=>[d("div",g,[d("span",b,m(t.item.lastName)+" ",1),d("span",B,m(t.item.firstName),1)])])),_:1},8,["list"])])}));const j={name:"Recents",components:{navigationBar:s,navigationBarButton:a,toggleButton:o,listView:n},computed:{sortedContacts(){return this.$sortObjects(this.contacts,"lastName")}},setup(){document.title="Contacts | iOS";const{records:s,getRecords:a}=t("contacts");return p((()=>a())),{contacts:s}}};j.render=_,j.__scopeId="data-v-7287f759";export default j;