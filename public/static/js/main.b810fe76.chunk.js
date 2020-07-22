(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,n,a){e.exports=a(128)},111:function(e,n,a){},124:function(e,n,a){},128:function(e,n,a){"use strict";a.r(n);var t=a(1),r=a.n(t),c=a(83),l=a.n(c),o=(a(111),a(84)),i=a(85),s=a(98),m=a(97),u=a(70),d=a(69),g=a(92),p=a(86),E=a.n(p),h=(a(112),function(e){var n=e.region,a=(n.regionid,n.dnoregion,n.shortname),t=n.intensity;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h4",null,"Region: ",a),r.a.createElement("h4",null,"Intensity index:"," ",r.a.createElement("span",{className:E()({"text-success":"low"===t.index||"very low"===t.index,"text-primary":"moderate"===t.index,"text-danger":"high"===t.index||"very high"===t.index})},t.index))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("button",{className:"btn btn-secondary"},"Details"))))}),b=a(68),v=function(){return r.a.createElement("div",{className:"my-3"},r.a.createElement("p",null,r.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Low"),r.a.createElement("p",null,r.a.createElement("span",{className:"px-3 mr-2 bg-primary"})," = Moderate"),r.a.createElement("p",null,r.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = High"))},f=a(88),y=a.n(f);function x(){var e=Object(u.a)(["\nquery {\n    RegionalCarbonData {\n      data {\n        to\n        from\n        regions {\n          regionid\n          dnoregion\n          shortname\n          intensity {\n            index\n          }\n          generationmix {\n            fuel\n            perc\n          }\n        }\n      }\n    }\n  }\n  \n"]);return x=function(){return e},e}function w(){var e=Object(u.a)(["\n  display: block;\n  margin: 0 auto;\n"]);return w=function(){return e},e}var N=Object(b.css)(w()),j=Object(d.a)(x()),O=function(e){Object(s.a)(a,e);var n=Object(m.a)(a);function a(e){var t;Object(o.a)(this,a),(t=n.call(this,e)).state={loading:!0};var r=new Date,c=r.getDate(),l=r.getMonth()+1,i=r.getFullYear();return t.date=c+"-"+l+"-"+i,t}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 my-3"},"UK Carbon Data"),r.a.createElement("p",null,"Date: ",this.date),r.a.createElement(v,null),r.a.createElement(g.Query,{query:j},(function(n){var a=n.loading,t=n.error,c=n.data;return a?r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(y.a,{css:N,size:150,loading:e.state.loading})):(t&&console.log(t),r.a.createElement(r.a.Fragment,null,c.RegionalCarbonData.data.map((function(e){return e.regions.map((function(e){return r.a.createElement(h,{region:e})}))}))))})))}}]),a}(t.Component),k=a(53),D=a(54),C=a(78),R=a(95),q=a(11),F=(a(124),a(94)),M=a.n(F),B=new k.a({uri:"/graphql",cache:new D.a});var I=function(){return r.a.createElement(C.a,{client:B},r.a.createElement(R.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:M.a,alt:"carbon",style:{width:300,display:"block",margin:"auto",borderRadius:200,padding:20}}),r.a.createElement(q.a,{exact:!0,path:"/",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,n,a){e.exports=a.p+"static/media/logo.0906859a.jpg"}},[[106,1,2]]]);
//# sourceMappingURL=main.b810fe76.chunk.js.map