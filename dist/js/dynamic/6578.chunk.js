"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[6578,7189],{"../node_modules/highlight.js/es/languages/oxygene.js":(e,n,t)=>{function a(e){var n={$pattern:/\.?\w+/,keyword:"abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained"},t=e.COMMENT(/\{/,/\}/,{relevance:0}),a=e.COMMENT("\\(\\*","\\*\\)",{relevance:10}),s={className:"string",begin:"'",end:"'",contains:[{begin:"''"}]},r={className:"string",begin:"(#\\d+)+"},i={beginKeywords:"function constructor destructor procedure method",end:"[:;]",keywords:"function constructor|10 destructor|10 procedure|10 method|10",contains:[e.inherit(e.TITLE_MODE,{scope:"title.function"}),{className:"params",begin:"\\(",end:"\\)",keywords:n,contains:[s,r]},t,a]};return{name:"Oxygene",case_insensitive:!0,keywords:n,illegal:'("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',contains:[t,a,e.C_LINE_COMMENT_MODE,s,r,e.NUMBER_MODE,i,{scope:"punctuation",match:/;/,relevance:0}]}}t.r(n),t.d(n,{default:()=>a})},"../node_modules/highlight.js/es/languages/oxygene.js.js":(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var a=t("../node_modules/highlight.js/es/languages/oxygene.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/oxygene" instead of "highlight.js/lib/languages/oxygene.js"'))}();const s=a.default}}]);