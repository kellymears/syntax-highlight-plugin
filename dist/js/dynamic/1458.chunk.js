"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[1458,201],{"../node_modules/highlight.js/es/languages/dart.js":(e,n,a)=>{function t(e){var n={className:"subst",variants:[{begin:"\\$[A-Za-z0-9_]+"}]},a={className:"subst",variants:[{begin:/\$\{/,end:/\}/}],keywords:"true false null this is new super"},t={className:"string",variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"""',end:'"""',contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE,n,a]}]};a.contains=[e.C_NUMBER_MODE,t];var i=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],s=i.map((function(e){return"".concat(e,"?")}));return{name:"Dart",keywords:{keyword:["abstract","as","assert","async","await","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","inferface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","while","with","yield"],built_in:i.concat(s).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},contains:[t,e.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0}),e.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",end:"$",relevance:0}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}a.r(n),a.d(n,{default:()=>t})},"../node_modules/highlight.js/es/languages/dart.js.js":(e,n,a)=>{a.r(n),a.d(n,{default:()=>i});var t=a("../node_modules/highlight.js/es/languages/dart.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/dart" instead of "highlight.js/lib/languages/dart.js"'))}();const i=t.default}}]);