"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[676,2622],{"../node_modules/highlight.js/es/languages/http.js":(e,s,n)=>{function a(e){const s="HTTP/(2|1\\.[01])",n={className:"attribute",begin:e.regex.concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},a=[n,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+s+" \\d{3})",end:/$/,contains:[{className:"meta",begin:s},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:a}},{begin:"(?=^[A-Z]+ (.*?) "+s+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:s},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:a}},e.inherit(n,{relevance:0})]}}n.r(s),n.d(s,{default:()=>a})},"../node_modules/highlight.js/es/languages/http.js.js":(e,s,n)=>{n.r(s),n.d(s,{default:()=>t});var a=n("../node_modules/highlight.js/es/languages/http.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/http" instead of "highlight.js/lib/languages/http.js"'))}();const t=a.default}}]);