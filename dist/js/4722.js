"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[4722],{"../node_modules/highlight.js/es/languages/haskell.js":(e,n,a)=>{function s(e){const n={variants:[e.COMMENT("--","$"),e.COMMENT(/\{-/,/-\}/,{contains:["self"]})]},a={className:"meta",begin:/\{-#/,end:/#-\}/},s={className:"meta",begin:"^#",end:"$"},i={className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},l={begin:"\\(",end:"\\)",illegal:'"',contains:[a,s,{className:"type",begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},e.inherit(e.TITLE_MODE,{begin:"[_a-z][\\w']*"}),n]},t="([0-9]_*)+",c="([0-9a-fA-F]_*)+",o={className:"number",relevance:0,variants:[{match:`\\b(${t})(\\.(${t}))?([eE][+-]?(${t}))?\\b`},{match:`\\b0[xX]_*(${c})(\\.(${c}))?([pP][+-]?(${t}))?\\b`},{match:"\\b0[oO](([0-7]_*)+)\\b"},{match:"\\b0[bB](([01]_*)+)\\b"}]};return{name:"Haskell",aliases:["hs"],keywords:"let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec",contains:[{beginKeywords:"module",end:"where",keywords:"module where",contains:[l,n],illegal:"\\W\\.|;"},{begin:"\\bimport\\b",end:"$",keywords:"import qualified as hiding",contains:[l,n],illegal:"\\W\\.|;"},{className:"class",begin:"^(\\s*)?(class|instance)\\b",end:"where",keywords:"class family instance where",contains:[i,l,n]},{className:"class",begin:"\\b(data|(new)?type)\\b",end:"$",keywords:"data family type newtype deriving",contains:[a,i,l,{begin:/\{/,end:/\}/,contains:l.contains},n]},{beginKeywords:"default",end:"$",contains:[i,l,n]},{beginKeywords:"infix infixl infixr",end:"$",contains:[e.C_NUMBER_MODE,n]},{begin:"\\bforeign\\b",end:"$",keywords:"foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe",contains:[i,e.QUOTE_STRING_MODE,n]},{className:"meta",begin:"#!\\/usr\\/bin\\/env runhaskell",end:"$"},a,s,e.QUOTE_STRING_MODE,o,i,e.inherit(e.TITLE_MODE,{begin:"^[_a-z][\\w']*"}),n,{begin:"->|<-"}]}}a.r(n),a.d(n,{default:()=>s})}}]);