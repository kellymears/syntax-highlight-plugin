"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[7453,9679],{"../node_modules/highlight.js/es/languages/vbnet.js":(e,n,s)=>{function t(e){const n=e.regex,s=/\d{1,2}\/\d{1,2}\/\d{4}/,t=/\d{4}-\d{1,2}-\d{1,2}/,a=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,i=/\d{1,2}(:\d{1,2}){1,2}/,l={className:"literal",variants:[{begin:n.concat(/# */,n.either(t,s),/ *#/)},{begin:n.concat(/# */,i,/ *#/)},{begin:n.concat(/# */,a,/ *#/)},{begin:n.concat(/# */,n.either(t,s),/ +/,n.either(a,i),/ *#/)}]},r=e.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]}),o=e.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]});return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,classNameAliases:{label:"symbol"},keywords:{keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",literal:"true false nothing"},illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[{className:"string",begin:/"(""|[^/n])"C\b/},{className:"string",begin:/"/,end:/"/,illegal:/\n/,contains:[{begin:/""/}]},l,{className:"number",relevance:0,variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/},{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},{className:"label",begin:/^\w+:/},r,o,{className:"meta",begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,end:/$/,keywords:{keyword:"const disable else elseif enable end externalsource if region then"},contains:[o]}]}}s.r(n),s.d(n,{default:()=>t})},"../node_modules/highlight.js/es/languages/vbnet.js.js":(e,n,s)=>{s.r(n),s.d(n,{default:()=>a});var t=s("../node_modules/highlight.js/es/languages/vbnet.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/vbnet" instead of "highlight.js/lib/languages/vbnet.js"'))}();const a=t.default}}]);