"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[6298,7307],{"../node_modules/highlight.js/es/languages/erlang.js":(e,n,a)=>{function i(e){var n="[a-z'][a-zA-Z0-9_']*",a="("+n+":"+n+"|"+n+")",i={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",literal:"false true"},r=e.COMMENT("%","$"),s={className:"number",begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",relevance:0},l={begin:"fun\\s+"+n+"/\\d+"},d={begin:a+"\\(",end:"\\)",returnBegin:!0,relevance:0,contains:[{begin:a,relevance:0},{begin:"\\(",end:"\\)",endsWithParent:!0,returnEnd:!0,relevance:0}]},t={begin:/\{/,end:/\}/,relevance:0},o={begin:"\\b_([A-Z][A-Za-z0-9_]*)?",relevance:0},c={begin:"[A-Z][a-zA-Z0-9_]*",relevance:0},g={begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0,returnBegin:!0,contains:[{begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0},{begin:/\{/,end:/\}/,relevance:0}]},u={beginKeywords:"fun receive if try case",end:"end",keywords:i};u.contains=[r,l,e.inherit(e.APOS_STRING_MODE,{className:""}),u,d,e.QUOTE_STRING_MODE,s,t,o,c,g];var b=[r,l,u,d,e.QUOTE_STRING_MODE,s,t,o,c,g];d.contains[1].contains=b,t.contains=b,g.contains[1].contains=b;var f={className:"params",begin:"\\(",end:"\\)",contains:b};return{name:"Erlang",aliases:["erl"],keywords:i,illegal:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",contains:[{className:"function",begin:"^"+n+"\\s*\\(",end:"->",returnBegin:!0,illegal:"\\(|#|//|/\\*|\\\\|:|;",contains:[f,e.inherit(e.TITLE_MODE,{begin:n})],starts:{end:";|\\.",keywords:i,contains:b}},r,{begin:"^-",end:"\\.",relevance:0,excludeEnd:!0,returnBegin:!0,keywords:{$pattern:"-"+e.IDENT_RE,keyword:["-module","-record","-undef","-export","-ifdef","-ifndef","-author","-copyright","-doc","-vsn","-import","-include","-include_lib","-compile","-define","-else","-endif","-file","-behaviour","-behavior","-spec"].map((function(e){return"".concat(e,"|1.5")})).join(" ")},contains:[f]},s,e.QUOTE_STRING_MODE,g,o,c,t,{begin:/\.$/}]}}a.r(n),a.d(n,{default:()=>i})},"../node_modules/highlight.js/es/languages/erlang.js.js":(e,n,a)=>{a.r(n),a.d(n,{default:()=>r});var i=a("../node_modules/highlight.js/es/languages/erlang.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/erlang" instead of "highlight.js/lib/languages/erlang.js"'))}();const r=i.default}}]);