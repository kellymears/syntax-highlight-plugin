"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[863,7],{"../node_modules/highlight.js/es/languages/accesslog.js":(e,s,n)=>{function a(e){const s=e.regex,n=["GET","POST","HEAD","PUT","DELETE","CONNECT","OPTIONS","PATCH","TRACE"];return{name:"Apache Access Log",contains:[{className:"number",begin:/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,relevance:5},{className:"number",begin:/\b\d+\b/,relevance:0},{className:"string",begin:s.concat(/"/,s.either(...n)),end:/"/,keywords:n,illegal:/\n/,relevance:5,contains:[{begin:/HTTP\/[12]\.\d'/,relevance:5}]},{className:"string",begin:/\[\d[^\]\n]{8,}\]/,illegal:/\n/,relevance:1},{className:"string",begin:/\[/,end:/\]/,illegal:/\n/,relevance:0},{className:"string",begin:/"Mozilla\/\d\.\d \(/,end:/"/,illegal:/\n/,relevance:3},{className:"string",begin:/"/,end:/"/,illegal:/\n/,relevance:0}]}}n.r(s),n.d(s,{default:()=>a})},"../node_modules/highlight.js/es/languages/accesslog.js.js":(e,s,n)=>{n.r(s),n.d(s,{default:()=>l});var a=n("../node_modules/highlight.js/es/languages/accesslog.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/accesslog" instead of "highlight.js/lib/languages/accesslog.js"'))}();const l=a.default}}]);