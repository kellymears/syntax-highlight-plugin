"use strict";(self.webpackChunk_roots_bud=self.webpackChunk_roots_bud||[]).push([[6849],{"../node_modules/highlight.js/es/languages/twig.js":(e,r,t)=>{function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){var r=e.regex,t=["absolute_url","asset|0","asset_version","attribute","block","constant","controller|0","country_timezones","csrf_token","cycle","date","dump","expression","form|0","form_end","form_errors","form_help","form_label","form_rest","form_row","form_start","form_widget","html_classes","include","is_granted","logout_path","logout_url","max","min","parent","path|0","random","range","relative_path","render","render_esi","source","template_from_string","url|0"],n=["apply","autoescape","block","cache","deprecated","do","embed","extends","filter","flush","for","form_theme","from","if","import","include","macro","sandbox","set","stopwatch","trans","trans_default_domain","transchoice","use","verbatim","with"];n=n.concat(n.map((function(e){return"end".concat(e)})));var o={scope:"string",variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},i={scope:"number",match:/\d+/},s={begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:[o,i]},c={beginKeywords:t.join(" "),keywords:{name:t},relevance:0,contains:[s]},l={match:/\|(?=[A-Za-z_]+:?)/,beginScope:"punctuation",relevance:0,contains:[{match:/[A-Za-z_]+:?/,keywords:["abs","abbr_class","abbr_method","batch","capitalize","column","convert_encoding","country_name","currency_name","currency_symbol","data_uri","date","date_modify","default","escape","file_excerpt","file_link","file_relative","filter","first","format","format_args","format_args_as_text","format_currency","format_date","format_datetime","format_file","format_file_from_text","format_number","format_time","html_to_markdown","humanize","inky_to_html","inline_css","join","json_encode","keys","language_name","last","length","locale_name","lower","map","markdown","markdown_to_html","merge","nl2br","number_format","raw","reduce","replace","reverse","round","slice","slug","sort","spaceless","split","striptags","timezone_name","title","trans","transchoice","trim","u|0","upper","url_encode","yaml_dump","yaml_encode"]}]},m=function(e,t){var n;return{beginScope:{1:"template-tag",3:"name"},relevance:t.relevance||2,endScope:"template-tag",begin:[/\{%/,/\s*/,(n=r).either.apply(n,a(e))],end:/%\}/,keywords:"in",contains:[l,c,o,i]}},u=m(n,{relevance:2}),_=m([/[a-z_]+/],{relevance:1});return{name:"Twig",aliases:["craftcms"],case_insensitive:!0,subLanguage:"xml",contains:[e.COMMENT(/\{#/,/#\}/),u,_,{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:["self",l,c,o,i]}]}}t.r(r),t.d(r,{default:()=>o})}}]);