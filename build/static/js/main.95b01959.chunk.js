(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},24:function(e,t,a){},4:function(e,t){e.exports="https://vendors-payout.herokuapp.com"},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),l=a.n(o),c=(a(23),a(24),a(3)),s=a.n(c),i=a(5),u=a(6),d=a(2),m=a(7),p=a.n(m),h=function(e){var t=e.v,a=e.getCsvFile,n=e.download,o=!1;return"Same Day Delivery"!==t.name&&"Tip"!==t.name&&"Shipping"!==t.name||(o=!0),r.a.createElement("div",{key:t.name,className:"vendor-card ".concat(o&&"own")},r.a.createElement("div",null,r.a.createElement("label",null,t.name," :"),r.a.createElement("p",null," ",t.amountToBePaid)),t.soldItems&&r.a.createElement("div",null,n.name===t.name?r.a.createElement("button",null,r.a.createElement("a",{href:n.url},"Download Csv")):r.a.createElement("button",{onClick:function(){return a(t.soldItems,t.name)}}," ",r.a.createElement("p",null,t.name,".csv"))))},f=a(4),v=a.n(f),g=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(),c=Object(d.a)(l,2),m=c[0],f=c[1],g=Object(n.useState)(!1),y=Object(d.a)(g,2),E=y[0],b=y[1],P=Object(n.useState)(localStorage.getItem("shopify-api-password")||""),S=Object(d.a)(P,2),w=S[0],j=S[1],O=Object(n.useState)(localStorage.getItem("shopify-api-key")||""),T=Object(d.a)(O,2),k=T[0],I=T[1],A=Object(n.useState)(localStorage.getItem("shopify-shop-name")||""),N=Object(d.a)(A,2),C=N[0],D=N[1],F=Object(n.useState)([]),x=Object(d.a)(F,2),B=x[0],q=x[1],R=Object(n.useState)({vendors:[]}),_=Object(d.a)(R,2),J=_[0],G=_[1],V=Object(n.useState)(!1),K=Object(d.a)(V,2),M=K[0],U=K[1],W=Object(n.useState)(null),$=Object(d.a)(W,2),L=$[0],Q=$[1],Y={shopName:C,apiKey:w,password:k,startDate:a,endDate:m};function z(){return(z=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(v.a,"/orders"),Y);case 2:t=e.sent,console.log("`${baseUrl}/orders`","".concat(v.a,"/orders")),q(t.data),b(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){switch(e.target.id){case"api-password":I(e.target.value),localStorage.setItem("shopify-api-password",e.target.value);break;case"api-key":j(e.target.value),localStorage.setItem("shopify-api-key",e.target.value);break;case"shop-name":D(e.target.value),localStorage.setItem("shopify-shop-name",e.target.value)}}function X(e){var t=new Date(e),a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear();return a<10&&(a="0"+a),n<10&&(n="0"+n),t=n+"-"+a+"-"+r}function Z(e){return Number(e.toFixed(2))}function ee(e){var t=0,a=0,n=0,r=function(r){var o=0;e[r].soldItems.forEach((function(t){var a=t.price*t.quantity;if(e[r].itemCount+=t.quantity,o+=a,e[r].grossSale+=a,t.orderPlacedAt&&(t.orderPlacedAt=t.orderPlacedAt.slice(0,10)),"Tip Jar"!==r&&"Tip"!==r&&X(t.orderPlacedAt)<X("2020-06-08 00:00:01 +0200")){var n=function(e,t){return Number((e/100*t).toFixed(2))}(a,15);t.rood15=n,e[r].amountToBePaid+=a-n,e[r].rood15+=n}else e[r].amountToBePaid+=a})),e[r].grossSale=Z(e[r].grossSale),e[r].amountToBePaid=Z(e[r].amountToBePaid),e[r].rood15=Z(e[r].rood15),e[r].soldItems.push({name:"TOTAL",price:Z(o),rood15:e[r].rood15}),"Tip Jar"!==r&&(a+=e[r].amountToBePaid),t+=e[r].grossSale,n+=e[r].rood15};for(var o in e)r(o);return e.totalGross=Z(t),e.totalToPay=Z(a),e.totalRood15=Z(n),e}function te(e,t){return ae.apply(this,arguments)}function ae(){return(ae=Object(u.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(v.a,"/upload"),{dataArray:t,name:a});case 2:"it is ok"===e.sent.data&&U({name:a,url:"".concat(v.a,"/").concat(a,".csv")});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return(ne=Object(u.a)(s.a.mark((function e(t){var a,n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=X(t[0].soldItems[0].orderPlacedAt),r=X(t[0].soldItems[0].orderPlacedAt),o=t.map((function(e){return e.soldItems&&"Tip Jar"!==e.name?(e.soldItems.forEach((function(e){e.quantity&&(X(e.orderPlacedAt)>r?r=X(e.orderPlacedAt):X(e.orderPlacedAt)<n&&(n=X(e.orderPlacedAt)))})),a="".concat(n.replace(/\//g,""),"-").concat(r.replace(/\//g,""),"generalCSV"),{name:e.name,period:"".concat(n,"-").concat(r),"Total Quantity":e.itemCount,"Gross Sale":e.grossSale,Payout:e.amountToBePaid,Roodkappje:e.rood15}):(console.log("this is a problem with general csv preparing function"),null)})),Q(a),te(o,a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("div",{className:"dropField"},r.a.createElement("div",{className:"upload-section"},r.a.createElement("div",{className:"date-input"},r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"shop-name"},"Shopify Store Name "),r.a.createElement("input",{type:"text",placeholder:"your shop name",id:"shop-name",onChange:H,value:C})),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"api-key"},"Private App API Key "),r.a.createElement("input",{type:"text",placeholder:"API Key",id:"api-key",onChange:H,value:w})),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"api-password"},"Private App API Password "),r.a.createElement("input",{type:"text",placeholder:"API Password",id:"api-password",onChange:H,value:k}))),r.a.createElement("button",{onClick:function(){I(""),j(""),D(""),localStorage.clear()}},"Delete credentials from local storage")),r.a.createElement("div",{className:"upload-section"},r.a.createElement("h4",null,"Pick Date Range"),r.a.createElement("div",{className:"date-input"},r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"start-date"},"Start Date "),r.a.createElement("input",{type:"datetime-local",placeholder:"--/--/2020, 00:00",id:"start-date",name:"ali",onChange:function(e){o(e.target.value),b(!0)}})),r.a.createElement("section",null,r.a.createElement("label",{htmlFor:"end-date"},"End Date "),r.a.createElement("input",{type:"datetime-local",placeholder:"--/--/2020, 23:59",id:"end-date",onChange:function(e){f(e.target.value),b(!0)}})),J.vendors[0]&&(M.name!==L?r.a.createElement("button",{onClick:function(){return function(e){return ne.apply(this,arguments)}(J.vendors)}},"Prepare Vendors CSV"):r.a.createElement("a",{href:M.url},"Download Csv"))),r.a.createElement("div",{className:"upload-input"},!B[0]||E?r.a.createElement("button",{className:"submit",onClick:function(){return z.apply(this,arguments)}},"SUBMIT"):r.a.createElement("button",{className:"submit",onClick:function(){if(B[0]){var e=function(e){var t={},a={name:"Shipping",grossSale:0,rood15:0,amountToBePaid:0,soldItems:[]};return e.forEach((function(e){var n=e.orderNr,r={name:e.vendor,soldItems:[],itemCount:0,grossSale:0,amountToBePaid:0,rood15:0};"fulfilled"===e.orderFullfillment&&e.shipping&&a.soldItems.push({orderNr:n,price:Number(e.shipping),quantity:1,orderPlacedAt:e.orderDate}),"fulfilled"===e.fulfillment_status?e.vendor&&(t[e.vendor]||("Tip Jar"===e.vendor?t[e.vendor]=Object(i.a)(Object(i.a)({},r),{},{name:"Same Day Delivery"}):t[e.vendor]=r),t[e.vendor].soldItems.push({name:e.name,price:e.price,quantity:e.quantity,orderNr:e.orderNr,orderPlacedAt:e.orderPlacedAt})):"Tip"===e.name&&(t.Tip||(t.Tip=Object(i.a)(Object(i.a)({},r),{},{name:"Tip"})),t.Tip.soldItems.push({name:e.name,price:e.price,quantity:e.quantity,orderNr:e.orderNr}))})),t.Shipping=a,t}(function(e){var t=[];return e.forEach((function(e){e.line_items[0].shipping=e.shipping_lines[0].discounted_price,e.line_items.forEach((function(a){a.orderNr=e.name,a.orderPlacedAt=e.created_at,a.orderFullfillment=e.fulfillment_status,t.push(a)}))})),t}(B));e=ee(e);var t=[];for(var a in e)"totalGross"!==a&&"totalToPay"!==a&&"totalRood15"!==a&&t.push(e[a]);e={vendors:t,totalGross:e.totalGross,totalToPay:e.totalToPay,totalRood15:e.totalRood15},G(e)}}},"Show Results"))),r.a.createElement("div",{className:"vendor-card-container"},J.vendors[0]&&J.vendors.map((function(e){return r.a.createElement(h,{key:e.name,v:e,getCsvFile:te,download:M})})))))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Shopify Vendors Payout"),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.95b01959.chunk.js.map