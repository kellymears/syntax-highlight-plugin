"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[923,9269],{"../node_modules/highlight.js/es/languages/coffeescript.js":(e,n,r)=>{function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function a(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(n),r.d(n,{default:()=>c});var i=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],s=["true","false","null","undefined","NaN","Infinity"],o=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function c(e){var n,r={keyword:i.concat(["then","unless","until","loop","by","when","and","or","is","isnt","not"]).filter((n=["var","const","let","function","static"],function(e){return!n.includes(e)})),literal:s.concat(["yes","no","on","off"]),built_in:o.concat(["npm","print"])},t="[A-Za-z$_][0-9A-Za-z$_]*",c={className:"subst",begin:/#\{/,end:/\}/,keywords:r},l=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,c]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,c]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[c,e.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+t},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];c.contains=l;var u=e.inherit(e.TITLE_MODE,{begin:t}),d="(\\(.*\\)\\s*)?\\B[-=]>",f={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(l)}]},g={variants:[{match:[/class\s+/,t,/\s+extends\s+/,t]},{match:[/class\s+/,t]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:r};return{name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:r,illegal:/\/\*/,contains:a(l).concat([e.COMMENT("###","###"),e.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+t+"\\s*=\\s*"+d,end:"[-=]>",returnBegin:!0,contains:[u,f]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:d,end:"[-=]>",returnBegin:!0,contains:[f]}]},g,{begin:t+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}},"../node_modules/highlight.js/es/languages/coffeescript.js.js":(e,n,r)=>{r.r(n),r.d(n,{default:()=>a});var t=r("../node_modules/highlight.js/es/languages/coffeescript.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/coffeescript" instead of "highlight.js/lib/languages/coffeescript.js"'))}();const a=t.default}}]);