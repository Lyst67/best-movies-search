"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{197:function(t,n,e){e.d(n,{Nj:function(){return o},TP:function(){return p},tx:function(){return d},xL:function(){return i},zi:function(){return f},zv:function(){return h}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s={method:"GET",options:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTI3MGJmODZhYjExZTBjY2FmN2YzOGVmMWQ5OWIyZCIsInN1YiI6IjY0YzI0OTY5MmYxYmUwMDE0ZWY2NGE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p5RUI4QQa76RdjJg1YwJtQVcsEnpw3DEDCBEkEwrDLQ"}},i={baseUrl:"https://image.tmdb.org/t/p/w500/",defaultImg:"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>"},o=function(){var t=(0,r.Z)(u().mark((function t(){var n,e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s,t.next=3,c.Z.get("trending/movie/day",n);case 3:return e=t.sent,r=e.data,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s,t.next=3,(0,c.Z)("movie/".concat(n),e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s,t.next=3,(0,c.Z)("search/movie?query=".concat(n),e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s,t.next=3,(0,c.Z)("movie/".concat(n,"/credits?"),e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s,t.next=3,(0,c.Z)("movie/".concat(n,"/reviews?"),e);case 3:return r=t.sent,a=r.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},168:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(861),a=e(439),u=e(757),c=e.n(u),s=e(197),i=e(791),o=e(689),p="Reviews_container__2j80+",f=e(184),h=function(){var t=(0,i.useState)(!1),n=(0,a.Z)(t,2),e=n[0],u=n[1],h=(0,i.useState)([]),d=(0,a.Z)(h,2),v=d[0],l=d[1],m=(0,o.UO)().movieId;return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l([]),u(!1),t.prev=2,t.next=5,(0,s.tx)(m);case 5:n=t.sent,l(n.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),u(t.t0.response.data);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}m&&function(){t.apply(this,arguments)}()}),[m]),(0,f.jsxs)("div",{className:p,children:[e&&(0,f.jsx)("h3",{children:e}),v.length?(0,f.jsx)("ul",{children:v.map((function(t,n){var e=t.author,r=t.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Autor: ",e]}),(0,f.jsx)("p",{children:r}),(0,f.jsx)("hr",{})]},n)}))}):(0,f.jsx)("h3",{children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=168.e4505904.chunk.js.map