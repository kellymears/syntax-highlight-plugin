"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[5506,1006],{"../node_modules/highlight.js/es/languages/diff.js":(e,s,i)=>{function a(e){var s=e.regex;return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,match:s.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)},{className:"comment",variants:[{begin:s.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}i.r(s),i.d(s,{default:()=>a})},"../node_modules/highlight.js/es/languages/diff.js.js":(e,s,i)=>{i.r(s),i.d(s,{default:()=>n});var a=i("../node_modules/highlight.js/es/languages/diff.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/diff" instead of "highlight.js/lib/languages/diff.js"'))}();const n=a.default}}]);