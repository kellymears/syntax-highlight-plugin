"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[2328,6390],{"../node_modules/highlight.js/es/languages/roboconf.js":(e,n,s)=>{function a(e){var n="[a-zA-Z-_][^\\n{]+\\{",s={className:"attribute",begin:/[a-zA-Z-_]+/,end:/\s*:/,excludeEnd:!0,starts:{end:";",relevance:0,contains:[{className:"variable",begin:/\.[a-zA-Z-_]+/},{className:"keyword",begin:/\(optional\)/}]}};return{name:"Roboconf",aliases:["graph","instances"],case_insensitive:!0,keywords:"import",contains:[{begin:"^facet "+n,end:/\}/,keywords:"facet",contains:[s,e.HASH_COMMENT_MODE]},{begin:"^\\s*instance of "+n,end:/\}/,keywords:"name count channels instance-data instance-state instance of",illegal:/\S/,contains:["self",s,e.HASH_COMMENT_MODE]},{begin:"^"+n,end:/\}/,contains:[s,e.HASH_COMMENT_MODE]},e.HASH_COMMENT_MODE]}}s.r(n),s.d(n,{default:()=>a})},"../node_modules/highlight.js/es/languages/roboconf.js.js":(e,n,s)=>{s.r(n),s.d(n,{default:()=>o});var a=s("../node_modules/highlight.js/es/languages/roboconf.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/roboconf" instead of "highlight.js/lib/languages/roboconf.js"'))}();const o=a.default}}]);