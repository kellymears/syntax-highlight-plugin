"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[8687,6796],{"../node_modules/highlight.js/es/languages/latex.js":(e,n,a)=>{function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}function r(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){var n,a,t=[{begin:/\^{6}[0-9a-f]{6}/},{begin:/\^{5}[0-9a-f]{5}/},{begin:/\^{4}[0-9a-f]{4}/},{begin:/\^{3}[0-9a-f]{3}/},{begin:/\^{2}[0-9a-f]{2}/},{begin:/\^{2}[\u0000-\u007f]/}],i=[{className:"keyword",begin:/\\/,relevance:0,contains:[{endsParent:!0,begin:(n=e.regex).either.apply(n,r(["(?:NeedsTeXFormat|RequirePackage|GetIdInfo)","Provides(?:Expl)?(?:Package|Class|File)","(?:DeclareOption|ProcessOptions)","(?:documentclass|usepackage|input|include)","makeat(?:letter|other)","ExplSyntax(?:On|Off)","(?:new|renew|provide)?command","(?:re)newenvironment","(?:New|Renew|Provide|Declare)(?:Expandable)?DocumentCommand","(?:New|Renew|Provide|Declare)DocumentEnvironment","(?:(?:e|g|x)?def|let)","(?:begin|end)","(?:part|chapter|(?:sub){0,2}section|(?:sub)?paragraph)","caption","(?:label|(?:eq|page|name)?ref|(?:paren|foot|super)?cite)","(?:alpha|beta|[Gg]amma|[Dd]elta|(?:var)?epsilon|zeta|eta|[Tt]heta|vartheta)","(?:iota|(?:var)?kappa|[Ll]ambda|mu|nu|[Xx]i|[Pp]i|varpi|(?:var)rho)","(?:[Ss]igma|varsigma|tau|[Uu]psilon|[Pp]hi|varphi|chi|[Pp]si|[Oo]mega)","(?:frac|sum|prod|lim|infty|times|sqrt|leq|geq|left|right|middle|[bB]igg?)","(?:[lr]angle|q?quad|[lcvdi]?dots|d?dot|hat|tilde|bar)"].map((function(e){return e+"(?![a-zA-Z@:_])"}))))},{endsParent:!0,begin:new RegExp(["(?:__)?[a-zA-Z]{2,}_[a-zA-Z](?:_?[a-zA-Z])+:[a-zA-Z]*","[lgc]__?[a-zA-Z](?:_?[a-zA-Z])*_[a-zA-Z]{2,}","[qs]__?[a-zA-Z](?:_?[a-zA-Z])+","use(?:_i)?:[a-zA-Z]*","(?:else|fi|or):","(?:if|cs|exp):w","(?:hbox|vbox):n","::[a-zA-Z]_unbraced","::[a-zA-Z:]"].map((function(e){return e+"(?![a-zA-Z:_])"})).join("|"))},{endsParent:!0,variants:t},{endsParent:!0,relevance:0,variants:[{begin:/[a-zA-Z@]+/},{begin:/[^a-zA-Z@]?/}]}]},{className:"params",relevance:0,begin:/#+\d?/},{variants:t},{className:"built_in",relevance:0,begin:/[$&^_]/},{className:"meta",begin:/% ?!(T[eE]X|tex|BIB|bib)/,end:"$",relevance:10},e.COMMENT("%","$",{relevance:0})],s={begin:/\{/,end:/\}/,relevance:0,contains:["self"].concat(r(i))},o=e.inherit(s,{relevance:0,endsParent:!0,contains:[s].concat(r(i))}),c={begin:/\[/,end:/\]/,endsParent:!0,relevance:0,contains:[s].concat(r(i))},l={begin:/\s+/,relevance:0},u=[o],d=[c],g=function(e,n){return{contains:[l],starts:{relevance:0,contains:e,starts:n}}},f=function(e,n){return{begin:"\\\\"+e+"(?![a-zA-Z@:_])",keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\"+e},relevance:0,contains:[l],starts:n}},m=function(n,a){return e.inherit({begin:"\\\\begin(?=[ \t]*(\\r?\\n[ \t]*)?\\{"+n+"\\})",keywords:{$pattern:/\\[a-zA-Z]+/,keyword:"\\begin"},relevance:0},g(u,a))},b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"string";return e.END_SAME_AS_BEGIN({className:n,begin:/(.|\r?\n)/,end:/(.|\r?\n)/,excludeBegin:!0,excludeEnd:!0,endsParent:!0})},p=function(e){return{className:"string",end:"(?=\\\\end\\{"+e+"\\})"}},v=function(){return{relevance:0,begin:/\{/,starts:{endsParent:!0,contains:[{className:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"string",end:/(?=\})/,endsParent:!0,contains:[{begin:/\{/,end:/\}/,relevance:0,contains:["self"]}]}]}}},h=r(["verb","lstinline"].map((function(e){return f(e,{contains:[b()]})}))).concat([f("mint",g(u,{contains:[b()]})),f("mintinline",g(u,{contains:[v(),b()]})),f("url",{contains:[v("link"),v("link")]}),f("hyperref",{contains:[v("link")]}),f("href",g(d,{contains:[v("link")]}))],r((a=[]).concat.apply(a,r(["","\\*"].map((function(e){return[m("verbatim"+e,p("verbatim"+e)),m("filecontents"+e,g(u,p("filecontents"+e)))].concat(r(["","B","L"].map((function(n){return m(n+"Verbatim"+e,g(d,p(n+"Verbatim"+e)))}))))}))))),[m("minted",g(d,g(u,p("minted"))))]);return{name:"LaTeX",aliases:["tex"],contains:r(h).concat(r(i))}}a.r(n),a.d(n,{default:()=>i})},"../node_modules/highlight.js/es/languages/latex.js.js":(e,n,a)=>{a.r(n),a.d(n,{default:()=>r});var t=a("../node_modules/highlight.js/es/languages/latex.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/latex" instead of "highlight.js/lib/languages/latex.js"'))}();const r=t.default}}]);