"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[9384],{"../node_modules/highlight.js/es/languages/wren.js":(e,t,a)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){var t,a,n=e.regex,s=/[a-zA-Z]\w*/,c=["as","break","class","construct","continue","else","for","foreign","if","import","in","is","return","static","var","while"],o=["true","false","null"],i=["this","super"],l=["-","~",/\*/,"%",/\.\.\./,/\.\./,/\+/,"<<",">>",">=","<=","<",">",/\^/,/!=/,/!/,/\bis\b/,"==","&&","&",/\|\|/,/\|/,/\?:/,"="],u={relevance:0,match:n.concat(/\b(?!(if|while|for|else|super)\b)/,s,/(?=\s*[({])/),className:"title.function"},b={match:n.concat(n.either(n.concat(/\b(?!(if|while|for|else|super)\b)/,s),(t=n).either.apply(t,r(l))),/(?=\s*\([^)]+\)\s*\{)/),className:"title.function",starts:{contains:[{begin:/\(/,end:/\)/,contains:[{relevance:0,scope:"params",match:s}]}]}},m={variants:[{match:[/class\s+/,s,/\s+is\s+/,s]},{match:[/class\s+/,s]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:c},p={relevance:0,match:(a=n).either.apply(a,r(l)),className:"operator"},h={className:"property",begin:n.concat(/\./,n.lookahead(s)),end:s,excludeBegin:!0,relevance:0},f={relevance:0,match:n.concat(/\b_/,s),scope:"variable"},d={relevance:0,match:/\b[A-Z]+[a-z]+([A-Z]+[a-z]+)*/,scope:"title.class",keywords:{_:["Bool","Class","Fiber","Fn","List","Map","Null","Num","Object","Range","Sequence","String","System"]}},g=e.C_NUMBER_MODE,y={match:[s,/\s*/,/=/,/\s*/,/\(/,s,/\)\s*\{/],scope:{1:"title.function",3:"operator",6:"params"}},v=e.COMMENT(/\/\*\*/,/\*\//,{contains:[{match:/@[a-z]+/,scope:"doctag"},"self"]}),_={scope:"subst",begin:/%\(/,end:/\)/,contains:[g,d,u,f,p]},w={scope:"string",begin:/"/,end:/"/,contains:[_,{scope:"char.escape",variants:[{match:/\\\\|\\["0%abefnrtv]/},{match:/\\x[0-9A-F]{2}/},{match:/\\u[0-9A-F]{4}/},{match:/\\U[0-9A-F]{8}/}]}]};_.contains.push(w);var A=r(c).concat(r(i),r(o)),N={relevance:0,match:n.concat("\\b(?!",A.join("|"),"\\b)",/[a-zA-Z_]\w*(?:[?!]|\b)/),className:"variable"};return{name:"Wren",keywords:{keyword:c,"variable.language":i,literal:o},contains:[{scope:"comment",variants:[{begin:[/#!?/,/[A-Za-z_]+(?=\()/],beginScope:{},keywords:{literal:o},contains:[],end:/\)/},{begin:[/#!?/,/[A-Za-z_]+/],beginScope:{},end:/$/}]},g,w,{className:"string",begin:/"""/,end:/"""/},v,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,d,m,y,b,u,p,f,h,N]}}a.r(t),a.d(t,{default:()=>s})}}]);