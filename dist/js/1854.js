"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[1854,8554],{"../node_modules/highlight.js/es/languages/openscad.js":(e,n,s)=>{function a(e){const n={className:"keyword",begin:"\\$(f[asn]|t|vp[rtd]|children)"},s={className:"number",begin:"\\b\\d+(\\.\\d+)?(e-?\\d+)?",relevance:0},a=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),i={className:"function",beginKeywords:"module function",end:/=|\{/,contains:[{className:"params",begin:"\\(",end:"\\)",contains:["self",s,a,n,{className:"literal",begin:"false|true|PI|undef"}]},e.UNDERSCORE_TITLE_MODE]};return{name:"OpenSCAD",aliases:["scad"],keywords:{keyword:"function module include use for intersection_for if else \\%",literal:"false true PI undef",built_in:"circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign"},contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,{className:"meta",keywords:{keyword:"include use"},begin:"include|use <",end:">"},a,n,{begin:"[*!#%]",relevance:0},i]}}s.r(n),s.d(n,{default:()=>a})},"../node_modules/highlight.js/es/languages/openscad.js.js":(e,n,s)=>{s.r(n),s.d(n,{default:()=>i});var a=s("../node_modules/highlight.js/es/languages/openscad.js");!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/openscad" instead of "highlight.js/lib/languages/openscad.js"'))}();const i=a.default}}]);