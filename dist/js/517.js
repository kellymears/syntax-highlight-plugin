"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[517],{"../node_modules/highlight.js/es/languages/properties.js":(e,s,n)=>{function t(e){const s="[ \\t\\f]*",n=s+"[:=]"+s,t="[ \\t\\f]+",a="([^\\\\:= \\t\\f\\n]|\\\\.)+",i={end:"("+n+"|"+t+")",relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",disableAutodetect:!0,case_insensitive:!0,illegal:/\S/,contains:[e.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:a+n},{begin:a+t}],contains:[{className:"attr",begin:a,endsParent:!0}],starts:i},{className:"attr",begin:a+s+"$"}]}}n.r(s),n.d(s,{default:()=>t})}}]);