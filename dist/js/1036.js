"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[1036,7031],{"../node_modules/highlight.js/es/languages/smali.js":(e,s,n)=>{function a(e){const s=["add","and","cmp","cmpg","cmpl","const","div","double","float","goto","if","int","long","move","mul","neg","new","nop","not","or","rem","return","shl","shr","sput","sub","throw","ushr","xor"];return{name:"Smali",contains:[{className:"string",begin:'"',end:'"',relevance:0},e.COMMENT("#","$",{relevance:0}),{className:"keyword",variants:[{begin:"\\s*\\.end\\s[a-zA-Z0-9]*"},{begin:"^[ ]*\\.[a-zA-Z]*",relevance:0},{begin:"\\s:[a-zA-Z_0-9]*",relevance:0},{begin:"\\s("+["transient","constructor","abstract","final","synthetic","public","private","protected","static","bridge","system"].join("|")+")"}]},{className:"built_in",variants:[{begin:"\\s("+s.join("|")+")\\s"},{begin:"\\s("+s.join("|")+")((-|/)[a-zA-Z0-9]+)+\\s",relevance:10},{begin:"\\s("+["aget","aput","array","check","execute","fill","filled","goto/16","goto/32","iget","instance","invoke","iput","monitor","packed","sget","sparse"].join("|")+")((-|/)[a-zA-Z0-9]+)*\\s",relevance:10}]},{className:"class",begin:"L[^(;:\n]*;",relevance:0},{begin:"[vp][0-9]+"}]}}n.r(s),n.d(s,{default:()=>a})},"../node_modules/highlight.js/es/languages/smali.js.js":(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});var a=n("../node_modules/highlight.js/es/languages/smali.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/smali" instead of "highlight.js/lib/languages/smali.js"'))}();const i=a.default}}]);