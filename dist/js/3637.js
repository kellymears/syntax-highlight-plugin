"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[3637,517],{"../node_modules/highlight.js/es/languages/properties.js":(e,s,n)=>{function t(e){const s="[ \\t\\f]*",n=s+"[:=]"+s,t="[ \\t\\f]+",i="([^\\\\:= \\t\\f\\n]|\\\\.)+",a={end:"("+n+"|"+t+")",relevance:0,starts:{className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{begin:"\\\\\\n"}]}};return{name:".properties",disableAutodetect:!0,case_insensitive:!0,illegal:/\S/,contains:[e.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{begin:i+n},{begin:i+t}],contains:[{className:"attr",begin:i,endsParent:!0}],starts:a},{className:"attr",begin:i+s+"$"}]}}n.r(s),n.d(s,{default:()=>t})},"../node_modules/highlight.js/es/languages/properties.js.js":(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});var t=n("../node_modules/highlight.js/es/languages/properties.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/properties" instead of "highlight.js/lib/languages/properties.js"'))}();const i=t.default}}]);