module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="QfWi")}({"/cQz":function(e,t,n){"use strict";(function(e){function r(t){var n=t.number;return e("div",{className:"py-2 bg-info rounded text-white number-banner text-center"},n)}n.d(t,"a",(function(){return r}))}).call(this,n("HteQ").h)},AGjF:function(e,t,n){"use strict";(function(e){function r(t){var n=t.prizes,r=t.onChange,a=[n.slice(0,n.length/2),n.slice(n.length/2,n.length)];return e("div",{className:"row"},a.map((function(t){return e("div",{className:"col col-sm-6"},e("table",{className:"table text-left prize-table"},e("thead",{className:"thead-light"},e("tr",null,e("th",{style:{width:"50%"}},"Inaam"),e("th",{style:{width:"20%"},className:"text-right"},"Inaam rashi"),e("th",{className:"text-center",style:{width:"30%"}},"Vijeta"))),e("tbody",null,t.map((function(t){var n=t.name,a=t.amount,i=t.winner,o=t.id,u=i?"bg-primary text-white":"";return e("tr",null,e("td",{className:u},n),e("td",{className:"text-right "+u},"₹ ",a),e("td",{className:u},e("input",{type:"text",value:i,onChange:function(e){return r(o,e.target.value)}})))})))))})))}n.d(t,"a",(function(){return r}))}).call(this,n("HteQ").h)},HteQ:function(e,t){e.exports=require("preact")},JCdp:function(e,t,n){"use strict";function r(e){return e[e.length-1]}n.d(t,"a",(function(){return r}))},"JuI/":function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("JuI/");var r=n("ugae");t.default=r.a},UOin:function(e,t,n){"use strict";(function(e){function r(t){var n=t.children,r=t.title;return e("div",{className:"modal fade show intro-modal",tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},e("div",{className:"modal-dialog modal-dialog-centered modal-lg",role:"document"},e("div",{className:"modal-content"},e("div",{className:"modal-body text-center py-4"},e("h1",{className:"mb-4"},r),n))))}n.d(t,"a",(function(){return r}))}).call(this,n("HteQ").h)},aW7M:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var r=n("JCdp");function a(t){for(var n=t.numbers,a=[],i=1;i<=90;i++){var o=["numbers-table__box"];n.includes(i)&&o.push("numbers-table__box--active"),n[n.length-2]===i&&o.push("numbers-table__box--last"),Object(r.a)(n)===i&&o.push("numbers-table__box--current"),a.push(e("div",{className:o.join(" ")},e("span",null,i)))}return e("div",{className:"numbers-table"},a)}}).call(this,n("HteQ").h)},lojg:function(e,t,n){"use strict";function r(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}n.d(t,"a",(function(){return r}))},ugae:function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return g}));var a=n("HteQ"),i=n("lojg"),o=n("JCdp"),u=n("aW7M"),l=n("/cQz"),s=n("UOin"),c=n("wqxZ"),d=n("AGjF"),m=n("vj8A");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return{numbers:function(){for(var e=[],t=1;t<=90;t++)e.push(t);return Object(i.a)(e)}(),usedNumbers:[],started:!1,prizes:[{id:1,name:"Saare corners",amount:50,winner:""},{id:2,name:"Quick 5",amount:50,winner:""},{id:3,name:"Upar alli line",amount:50,winner:""},{id:4,name:"Beech aali line",amount:50,winner:""},{id:5,name:"Nichli line",amount:50,winner:""},{id:6,name:"Full house",amount:100,winner:""},{id:7,name:"Fir se full house",amount:80,winner:""},{id:8,name:"Ek aur full house",amount:70,winner:""}]}}var g=function(t){var n,a;function i(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).state=p(),e.generateNumber=function(){var t=e.state,n=t.numbers,r=t.usedNumbers;e.setState({numbers:n.slice(0,n.length-1),usedNumbers:r.concat(Object(o.a)(n))})},e.start=function(){e.setState({started:!0}),e.generateNumber()},e.onWinnerChange=function(t,n){var r=e.state.prizes.map((function(e){return e.id===t?h({},e,{winner:n}):e}));e.setState({prizes:r})},e}a=t,(n=i).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var f=i.prototype;return f.renderContent=function(){var t=this.state,n=t.numbers,a=t.usedNumbers,i=t.started,f=t.prizes,h=Object(o.a)(a);return i?n.length?e("div",{className:"row"},e("div",{className:"col col-sm-6 border-right"},e(u.a,{numbers:a})),e("div",{className:"col col-sm-6 d-flex align-items-center flex-column"},e("p",{className:"w-100 h2 text-center text-primary mb-2"},"'",m.a[h-1],"'"),e(l.a,{number:h}),e("div",{className:"mb-4"}),e("button",{className:"btn btn-lg btn-primary",onClick:this.generateNumber},"Tambola bhyi Tambola"),e("hr",{className:"w-100"}),e("div",{className:"w-100"},e(d.a,{prizes:f,onChange:this.onWinnerChange})))):e(s.a,{title:e("span",null,"Katha samaapt! ",e("br",null),e("br",null)," Aaj k vijeta")},e(d.a,{prizes:f,onChange:this.onWinnerChange})):e(r,null,e(s.a,{title:"Tambola"},e("div",{className:"row"},e("div",{className:"col"},e(c.a,{prizes:f})),e("div",{className:"col d-flex flex-column justify-content-center"},e("p",{className:"h2"},"Kre shuru?"),e("div",{className:"mb-5"}),e("br",null),e("button",{type:"button",onClick:this.start,className:"btn btn-primary btn-lg mx-auto w-50"},"Start")))))},f.render=function(){return e("div",{id:"app",className:"container-fluid p-4"},this.renderContent())},i}(a.Component)}).call(this,n("HteQ").h,n("HteQ").Fragment)},vj8A:function(e,t,n){"use strict";t.a=["Top of the house number 1","Kaala dhan","Goodness Me","Knock at the door","Symbol of congress","Super sixer","Colours of rainbow","Big fat lady number 8","Number of planets in solar system number 9","A big fat hen","1 and 1 eleven","One dozen","Unlucky for some lucky for me no. thirteen","Valentine Day","Yet to be kissed","Sweet sixteen","Dancing Queen","Voting age","End of the teens","Blind 20","President salute","Two little ducks","You and me","Two dozen","Silver Jublee Number","Republic Day","Gateway to heaven","Duck and its mate","In your prime","Its middle Age","Time for fun","Mouth Full","All the 3s","Dil mange more","Flirty Husband","Popular Number","Mixed luck","Oversize","Watch your waistline","Naughty 40","Life's begun at 41","Quit India Movement","Pain in the knee","All the fours","Halfway there","Up to tricks","Year of Independence","Four dozen","Rise and shine","Half a century, Golden Jublee","Charity begins at 51","Pack of cards","Pack with a joker","Pack with two jokers","All the fives","Pick up sticks","Mutiny Year","Time to retire","Just retired","Five dozen","Bakers bun","Click the two","Click the three","Catch the chor","Old age pension","Chakke pe chakka","Made in heaven","Saving grace","Ulta Pulta","Lucky blind","Lucky bachelor","Lucky couple","A crutch and a flea","Lucky chor","Diamond Jublee","Lucky six","Two hockey sticks","Heaven's gate","lucky nine","Gandhi's breakfast","Corner shot","Last of the two","India wins Cricket World Cup","Last of the chors","Grandma","Last six","Grandpa","Two fat ladies","All but one","Top of the house"]},wqxZ:function(e,t,n){"use strict";(function(e,r){function a(t){var n=t.showWinners,a=void 0!==n&&n,i=t.prizes,o=i.reduce((function(e,t){return t.amount+e}),0);return e(r,null,e("table",{className:"table text-left"},e("thead",{className:"thead-light"},e("tr",null,e("th",null,"Inaam"),e("th",{className:"text-right"},"Inaam rashi"),a&&e("th",null,"Vijeta"))),e("tbody",null,i.map((function(t){var n=t.name,r=t.amount,i=t.winner;return e("tr",null,e("td",null,n),e("td",{className:"text-right"},r),a&&e("td",null,i))})),e("tr",null,e("td",null,"Total"),e("td",{className:"text-right"},o),a&&e("td",null)))))}n.d(t,"a",(function(){return a}))}).call(this,n("HteQ").h,n("HteQ").Fragment)}});
//# sourceMappingURL=ssr-bundle.js.map