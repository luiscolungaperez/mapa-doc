(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{360:function(a,e,t){"use strict";t.r(e);var o={data:function(){return{capa_prendida:"dark"}},methods:{cambioSelector:function(a){console.log("Este es el nuevo valor",a)}}},r=t(0),n=Object(r.a)(o,(function(){var a=this,e=a._self._c;return e("div",{staticClass:"another-map"},[e("dai-tarjeta-contenedor-mapa",{scopedSlots:a._u([{key:"header",fn:function(){return[e("h3",[a._v("Control de seleccion")]),a._v(" "),e("dai-selector-mapa",{directives:[{name:"width-control",rawName:"v-width-control",value:"100%",expression:"'100%'"}],staticClass:"control-large",on:{change:a.cambioSelector},model:{value:a.capa_prendida,callback:function(e){a.capa_prendida=e},expression:"capa_prendida"}},[e("option",{attrs:{value:"dark"}},[a._v("Capa base oscura")]),a._v(" "),e("option",{attrs:{value:"light"}},[a._v("Capa base clara")])])]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}])},[a._v(" "),e("dai-mapa",{attrs:{zoom:3}},[e("dai-capa-xyz",{attrs:{visible:"dark"===a.capa_prendida,url:"https://{a-c}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"}}),a._v(" "),e("dai-capa-xyz",{attrs:{visible:"light"===a.capa_prendida,url:"https://{a-c}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png"}})],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);