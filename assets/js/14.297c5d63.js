(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{356:function(a,i,n){"use strict";n.r(i);var s={data:function(){return{capa_dark_visible:!0,capa_dark_opacidad:.2,capa_estados_zindex:1,capa_osm_visible:!1}}},t=n(0),d=Object(t.a)(s,(function(){var a=this,i=a._self._c;return i("div",{staticClass:"another-map"},[i("dai-tarjeta-contenedor-mapa",{scopedSlots:a._u([{key:"header",fn:function(){return[i("p",[a._v("Hay 3 capas, alterna sus propiedades: ")]),a._v(" "),i("p",[i("strong",[a._v("Capa base estilo dark ")]),a._v(" "),i("button",{staticClass:"dai-map-button",on:{click:function(i){a.capa_dark_visible=!a.capa_dark_visible}}},[a._v("\n                    prender / apagar\n                ")]),a._v("\n                visible= "+a._s(a.capa_dark_visible)+"\n                "),i("button",{staticClass:"dai-map-button",on:{click:function(i){a.capa_dark_opacidad=1==a.capa_dark_opacidad?0:a.capa_dark_opacidad+.2}}},[a._v("\n                    opacidad +20%\n                ")]),a._v("\n                opacidad= "+a._s(a.capa_dark_opacidad)+",\n                z-index= 3\n            ")]),a._v(" "),i("p",[i("strong",[a._v("Capa estados")]),a._v(" "),i("button",{staticClass:"dai-map-button",on:{click:function(i){a.capa_estados_zindex=4}}},[a._v("\n                    enviar al frente\n                ")]),a._v(" "),i("button",{staticClass:"dai-map-button",on:{click:function(i){a.capa_estados_zindex=1}}},[a._v("\n                    enviar hasta atras\n                ")]),a._v("\n                z-index= "+a._s(a.capa_estados_zindex)+"\n            ")]),a._v(" "),i("p",[i("strong",[a._v("Capa OSM")]),a._v(" "),i("button",{staticClass:"dai-map-button",on:{click:function(i){a.capa_osm_visible=!a.capa_osm_visible}}},[a._v("\n                    prender / apagar\n                ")]),a._v("\n                visible= "+a._s(a.capa_osm_visible)+",\n                z-index= 2\n            ")])]},proxy:!0}])},[a._v(" "),i("dai-mapa",{attrs:{extension:[-118.365119934082,14.5320978164673,-86.7104034423828,32.7186546325684]}},[i("dai-capa-xyz",{attrs:{id:"capa_dark",visible:a.capa_dark_visible,opacidad:a.capa_dark_opacidad,"z-index":3,url:"https://{a-c}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"}}),a._v(" "),i("dai-capa-geojson",{attrs:{id:"capa_estados","z-index":a.capa_estados_zindex,url:a.$withBase("/sample-edos.geojson")}}),a._v(" "),i("dai-capa-xyz-osm",{attrs:{id:"capa_osm",visible:a.capa_osm_visible,"z-index":2}})],1)],1)],1)}),[],!1,null,null,null);i.default=d.exports}}]);