"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[8744,2489],{"../node_modules/highlight.js/es/languages/elm.js":(e,n,i)=>{function s(e){const n={variants:[e.COMMENT("--","$"),e.COMMENT(/\{-/,/-\}/,{contains:["self"]})]},i={className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},s={begin:"\\(",end:"\\)",illegal:'"',contains:[{className:"type",begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},n]};return{name:"Elm",keywords:["let","in","if","then","else","case","of","where","module","import","exposing","type","alias","as","infix","infixl","infixr","port","effect","command","subscription"],contains:[{beginKeywords:"port effect module",end:"exposing",keywords:"port effect module where command subscription exposing",contains:[s,n],illegal:"\\W\\.|;"},{begin:"import",end:"$",keywords:"import as exposing",contains:[s,n],illegal:"\\W\\.|;"},{begin:"type",end:"$",keywords:"type alias",contains:[i,s,{begin:/\{/,end:/\}/,contains:s.contains},n]},{beginKeywords:"infix infixl infixr",end:"$",contains:[e.C_NUMBER_MODE,n]},{begin:"port",end:"$",keywords:"port",contains:[n]},{className:"string",begin:"'\\\\?.",end:"'",illegal:"."},e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,i,e.inherit(e.TITLE_MODE,{begin:"^[_a-z][\\w']*"}),n,{begin:"->|<-"}],illegal:/;/}}i.r(n),i.d(n,{default:()=>s})},"../node_modules/highlight.js/es/languages/elm.js.js":(e,n,i)=>{i.r(n),i.d(n,{default:()=>l});var s=i("../node_modules/highlight.js/es/languages/elm.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/elm" instead of "highlight.js/lib/languages/elm.js"'))}();const l=s.default}}]);