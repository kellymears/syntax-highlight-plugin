"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[3014,8651],{"../node_modules/highlight.js/es/languages/dts.js":(e,s,a)=>{function n(e){const s={className:"string",variants:[e.inherit(e.QUOTE_STRING_MODE,{begin:'((u8?|U)|L)?"'}),{begin:'(u8?|U)?R"',end:'"',contains:[e.BACKSLASH_ESCAPE]},{begin:"'\\\\?.",end:"'",illegal:"."}]},a={className:"number",variants:[{begin:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},{begin:e.C_NUMBER_RE}],relevance:0},n={className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef ifdef ifndef"},contains:[{begin:/\\\n/,relevance:0},{beginKeywords:"include",end:"$",keywords:{keyword:"include"},contains:[e.inherit(s,{className:"string"}),{className:"string",begin:"<",end:">",illegal:"\\n"}]},s,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},i={className:"variable",begin:/&[a-z\d_]*\b/};return{name:"Device Tree",contains:[{className:"title.class",begin:/^\/(?=\s*\{)/,relevance:10},i,{className:"keyword",begin:"/[a-z][a-z\\d-]*/"},{className:"symbol",begin:"^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"},{className:"title.class",begin:/[a-zA-Z_][a-zA-Z\d_@-]*(?=\s\{)/,relevance:.2},{relevance:0,match:[/[a-z][a-z-,]+/,/\s*/,/=/],scope:{1:"attr",3:"operator"}},{match:/[a-z][a-z-,]+(?=;)/,relevance:0,scope:"attr"},{className:"params",relevance:0,begin:"<",end:">",contains:[a,i]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,s,n,{scope:"punctuation",relevance:0,match:/\};|[;{}]/},{begin:e.IDENT_RE+"::",keywords:""}]}}a.r(s),a.d(s,{default:()=>n})},"../node_modules/highlight.js/es/languages/dts.js.js":(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});var n=a("../node_modules/highlight.js/es/languages/dts.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/dts" instead of "highlight.js/lib/languages/dts.js"'))}();const i=n.default}}]);