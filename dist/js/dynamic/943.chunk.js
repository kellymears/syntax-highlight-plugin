"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[943],{"../node_modules/highlight.js/es/languages/graphql.js":(e,a,n)=>{function s(e){var a=e.regex;return{name:"GraphQL",aliases:["gql"],case_insensitive:!0,disableAutodetect:!1,keywords:{keyword:["query","mutation","subscription","type","input","schema","directive","interface","union","scalar","fragment","enum","on"],literal:["true","false","null"]},contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{scope:"punctuation",match:/[.]{3}/,relevance:0},{scope:"punctuation",begin:/[\!\(\)\:\=\[\]\{\|\}]{1}/,relevance:0},{scope:"variable",begin:/\$/,end:/\W/,excludeEnd:!0,relevance:0},{scope:"meta",match:/@\w+/,excludeEnd:!0},{scope:"symbol",begin:a.concat(/[_A-Za-z][_0-9A-Za-z]*/,a.lookahead(/\s*:/)),relevance:0}],illegal:[/[;<']/,/BEGIN/]}}n.r(a),n.d(a,{default:()=>s})}}]);