"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[6644,7313],{"../node_modules/highlight.js/es/languages/applescript.js":(e,t,r)=>{function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){var t,r,n=e.regex,a=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),o={className:"params",begin:/\(/,end:/\)/,contains:["self",e.C_NUMBER_MODE,a]},s=e.COMMENT(/--/,/$/),l=[s,e.COMMENT(/\(\*/,/\*\)/,{contains:["self",s]}),e.HASH_COMMENT_MODE];return{name:"AppleScript",aliases:["osascript"],keywords:{keyword:"about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",literal:"AppleScript false linefeed return pi quote result space tab true",built_in:"alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name|0 paragraph paragraphs rest reverse running time version weekday word words year"},contains:[a,e.C_NUMBER_MODE,{className:"built_in",begin:n.concat(/\b/,(t=n).either.apply(t,i([/clipboard info/,/the clipboard/,/info for/,/list (disks|folder)/,/mount volume/,/path to/,/(close|open for) access/,/(get|set) eof/,/current date/,/do shell script/,/get volume settings/,/random number/,/set volume/,/system attribute/,/system info/,/time to GMT/,/(load|run|store) script/,/scripting components/,/ASCII (character|number)/,/localized string/,/choose (application|color|file|file name|folder|from list|remote application|URL)/,/display (alert|dialog)/])),/\b/)},{className:"built_in",begin:/^\s*return\b/},{className:"literal",begin:/\b(text item delimiters|current application|missing value)\b/},{className:"keyword",begin:n.concat(/\b/,(r=n).either.apply(r,i([/apart from/,/aside from/,/instead of/,/out of/,/greater than/,/isn't|(doesn't|does not) (equal|come before|come after|contain)/,/(greater|less) than( or equal)?/,/(starts?|ends|begins?) with/,/contained by/,/comes (before|after)/,/a (ref|reference)/,/POSIX (file|path)/,/(date|time) string/,/quoted form/])),/\b/)},{beginKeywords:"on",illegal:/[${=;\n]/,contains:[e.UNDERSCORE_TITLE_MODE,o]}].concat(i(l)),illegal:/\/\/|->|=>|\[\[/}}r.r(t),r.d(t,{default:()=>a})},"../node_modules/highlight.js/es/languages/applescript.js.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r("../node_modules/highlight.js/es/languages/applescript.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/applescript" instead of "highlight.js/lib/languages/applescript.js"'))}();const i=n.default}}]);