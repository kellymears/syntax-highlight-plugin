"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[7022,9970],{"../node_modules/highlight.js/es/languages/apache.js":(e,a,n)=>{function s(e){var a={className:"number",begin:/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/};return{name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,contains:[e.HASH_COMMENT_MODE,{className:"section",begin:/<\/?/,end:/>/,contains:[a,{className:"number",begin:/:\d{1,5}/},e.inherit(e.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",begin:/\w+/,relevance:0,keywords:{_:["order","deny","allow","setenv","rewriterule","rewriteengine","rewritecond","documentroot","sethandler","errordocument","loadmodule","options","header","listen","serverroot","servername"]},starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},contains:[{className:"meta",begin:/\s\[/,end:/\]$/},{className:"variable",begin:/[\$%]\{/,end:/\}/,contains:["self",{className:"number",begin:/[$%]\d+/}]},a,{className:"number",begin:/\b\d+/},e.QUOTE_STRING_MODE]}}],illegal:/\S/}}n.r(a),n.d(a,{default:()=>s})},"../node_modules/highlight.js/es/languages/apache.js.js":(e,a,n)=>{n.r(a),n.d(a,{default:()=>i});var s=n("../node_modules/highlight.js/es/languages/apache.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/apache" instead of "highlight.js/lib/languages/apache.js"'))}();const i=s.default}}]);