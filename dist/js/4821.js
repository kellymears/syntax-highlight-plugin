"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[4821,3686],{"../node_modules/highlight.js/es/languages/gcode.js":(e,s,n)=>{function a(e){const s={$pattern:"[A-Z_][A-Z0-9_.]*",keyword:"IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR"},n=e.inherit(e.C_NUMBER_MODE,{begin:"([-+]?((\\.\\d+)|(\\d+)(\\.\\d*)?))|"+e.C_NUMBER_RE}),a=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT(/\(/,/\)/),n,e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),{className:"name",begin:"([G])([0-9]+\\.?[0-9]?)"},{className:"name",begin:"([M])([0-9]+\\.?[0-9]?)"},{className:"attr",begin:"(VC|VS|#)",end:"(\\d+)"},{className:"attr",begin:"(VZOFX|VZOFY|VZOFZ)"},{className:"built_in",begin:"(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",contains:[n],end:"\\]"},{className:"symbol",variants:[{begin:"N",end:"\\d+",illegal:"\\W"}]}];return{name:"G-code (ISO 6983)",aliases:["nc"],case_insensitive:!0,keywords:s,contains:[{className:"meta",begin:"%"},{className:"meta",begin:"([O])([0-9]+)"}].concat(a)}}n.r(s),n.d(s,{default:()=>a})},"../node_modules/highlight.js/es/languages/gcode.js.js":(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});var a=n("../node_modules/highlight.js/es/languages/gcode.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/gcode" instead of "highlight.js/lib/languages/gcode.js"'))}();const i=a.default}}]);