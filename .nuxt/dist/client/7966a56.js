(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{399:function(t,e,n){var content=n(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(85).default)("44dc70bf",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";n.r(e);n(41),n(412);var o={components:{VueCountryDropdown:n(411).a},props:{menuItems:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{menuVisible:!1}},methods:{toggleMenu:function(){document.documentElement.classList.toggle("menu-show"),this.menuVisible=!this.menuVisible}}},r=(n(415),n(86)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("header",[e("div",{staticClass:"header-top"},[e("div",{staticClass:"header-logo"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo.png",alt:"Logo"}})])],1)]),t._v(" "),e("div",{staticClass:"header-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center justify-content-md-center justify-content-end"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"header-menu"},[e("div",{staticClass:"nav-toggle d-lg-none d-md-block",on:{click:t.toggleMenu}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")]),t._v(" "),e("ul",t._l(t.menuItems,(function(n,o){return e("li",{key:o,class:{active:n.active}},[e("nuxt-link",{attrs:{to:n.link}},[t._v(t._s(n.name))])],1)})),0)])])])])]),t._v(" "),t.menuVisible?e("div",{staticClass:"overlay",on:{click:t.toggleMenu}}):t._e()])}),[],!1,null,"162e07be",null);e.default=component.exports;installComponents(component,{Header:n(409).default})},412:function(t,e,n){"use strict";var o=n(2),r=n(413);o({target:"String",proto:!0,forced:n(414)("link")},{link:function(t){return r(this,"a","href",t)}})},413:function(t,e,n){"use strict";var o=n(8),r=n(36),l=n(24),c=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var v=l(r(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+d(l(o),c,"&quot;")+'"'),f+">"+v+"</"+e+">"}},414:function(t,e,n){"use strict";var o=n(3);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},415:function(t,e,n){"use strict";n(399)},416:function(t,e,n){var o=n(84)((function(i){return i[1]}));o.push([t.i,".nav-toggle[data-v-162e07be]{cursor:pointer}.overlay[data-v-162e07be]{background-color:rgba(0,0,0,.5);bottom:0;left:0;position:fixed;right:0;top:0;z-index:98}",""]),o.locals={},t.exports=o}}]);