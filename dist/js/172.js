"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[172],{"../node_modules/highlight.js/es/languages/erlang.js":(e,n,a)=>{function i(e){const n="[a-z'][a-zA-Z0-9_']*",a="("+n+":"+n+"|"+n+")",i={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",literal:"false true"},r=e.COMMENT("%","$"),s={className:"number",begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",relevance:0},c={begin:"fun\\s+"+n+"/\\d+"},d={begin:a+"\\(",end:"\\)",returnBegin:!0,relevance:0,contains:[{begin:a,relevance:0},{begin:"\\(",end:"\\)",endsWithParent:!0,returnEnd:!0,relevance:0}]},o={begin:/\{/,end:/\}/,relevance:0},t={begin:"\\b_([A-Z][A-Za-z0-9_]*)?",relevance:0},l={begin:"[A-Z][a-zA-Z0-9_]*",relevance:0},b={begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0,returnBegin:!0,contains:[{begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0},{begin:/\{/,end:/\}/,relevance:0}]},g={beginKeywords:"fun receive if try case",end:"end",keywords:i};g.contains=[r,c,e.inherit(e.APOS_STRING_MODE,{className:""}),g,d,e.QUOTE_STRING_MODE,s,o,t,l,b];const u=[r,c,g,d,e.QUOTE_STRING_MODE,s,o,t,l,b];d.contains[1].contains=u,o.contains=u,b.contains[1].contains=u;const _={className:"params",begin:"\\(",end:"\\)",contains:u};return{name:"Erlang",aliases:["erl"],keywords:i,illegal:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",contains:[{className:"function",begin:"^"+n+"\\s*\\(",end:"->",returnBegin:!0,illegal:"\\(|#|//|/\\*|\\\\|:|;",contains:[_,e.inherit(e.TITLE_MODE,{begin:n})],starts:{end:";|\\.",keywords:i,contains:u}},r,{begin:"^-",end:"\\.",relevance:0,excludeEnd:!0,returnBegin:!0,keywords:{$pattern:"-"+e.IDENT_RE,keyword:["-module","-record","-undef","-export","-ifdef","-ifndef","-author","-copyright","-doc","-vsn","-import","-include","-include_lib","-compile","-define","-else","-endif","-file","-behaviour","-behavior","-spec"].map((e=>`${e}|1.5`)).join(" ")},contains:[_]},s,e.QUOTE_STRING_MODE,b,t,l,o,{begin:/\.$/}]}}a.r(n),a.d(n,{default:()=>i})}}]);