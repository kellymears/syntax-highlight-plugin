"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[4137],{"../node_modules/highlight.js/es/languages/parser3.js":(e,a,s)=>{function n(e){const a=e.COMMENT(/\{/,/\}/,{contains:["self"]});return{name:"Parser3",subLanguage:"xml",relevance:0,contains:[e.COMMENT("^#","$"),e.COMMENT(/\^rem\{/,/\}/,{relevance:10,contains:[a]}),{className:"meta",begin:"^@(?:BASE|USE|CLASS|OPTIONS)$",relevance:10},{className:"title",begin:"@[\\w\\-]+\\[[\\w^;\\-]*\\](?:\\[[\\w^;\\-]*\\])?(?:.*)$"},{className:"variable",begin:/\$\{?[\w\-.:]+\}?/},{className:"keyword",begin:/\^[\w\-.:]+/},{className:"number",begin:"\\^#[0-9a-fA-F]+"},e.C_NUMBER_MODE]}}s.r(a),s.d(a,{default:()=>n})}}]);