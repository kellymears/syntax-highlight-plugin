"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[9292,5487],{"../node_modules/highlight.js/es/languages/coffeescript.js":(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});const a=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function i(e){const n={keyword:a.concat(["then","unless","until","loop","by","when","and","or","is","isnt","not"]).filter((t=["var","const","let","function","static"],e=>!t.includes(e))),literal:r.concat(["yes","no","on","off"]),built_in:s.concat(["npm","print"])};var t;const i="[A-Za-z$_][0-9A-Za-z$_]*",o={className:"subst",begin:/#\{/,end:/\}/,keywords:n},c=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,o]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,o]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[o,e.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+i},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];o.contains=c;const l=e.inherit(e.TITLE_MODE,{begin:i}),d="(\\(.*\\)\\s*)?\\B[-=]>",g={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(c)}]},u={variants:[{match:[/class\s+/,i,/\s+extends\s+/,i]},{match:[/class\s+/,i]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:n};return{name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:n,illegal:/\/\*/,contains:[...c,e.COMMENT("###","###"),e.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+i+"\\s*=\\s*"+d,end:"[-=]>",returnBegin:!0,contains:[l,g]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:d,end:"[-=]>",returnBegin:!0,contains:[g]}]},u,{begin:i+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}]}}},"../node_modules/highlight.js/es/languages/coffeescript.js.js":(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var a=t("../node_modules/highlight.js/es/languages/coffeescript.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/coffeescript" instead of "highlight.js/lib/languages/coffeescript.js"'))}();const r=a.default}}]);