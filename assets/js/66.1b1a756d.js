(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{377:function(a,t,s){"use strict";s.r(t);var r={data:function(){return{usarTexturas:!0}}},e=s(0),o=Object(e.a)(r,(function(){var a=this,t=a._self._c;return t("div",{staticClass:"another-map"},[t("dai-tarjeta-contenedor-mapa",{scopedSlots:a._u([{key:"header",fn:function(){return[t("div",[t("p",[a._v("Da lick en el boton para alternar la textura")]),a._v(" "),t("button",{staticClass:"dai-map-button",on:{click:function(t){a.usarTexturas=!a.usarTexturas}}},[a._v("\n                    "+a._s(a.usarTexturas?"quitar texturas":"poner texturas")+"\n                ")])]),a._v(" "),t("dai-leyenda-mapa",{attrs:{para:["estados_tamanos"],"mostrar-boton-alterna-todos":!0}})]},proxy:!0}])},[a._v(" "),t("dai-mapa",{attrs:{extension:[-118.365119934082,14.5320978164673,-86.7104034423828,32.7186546325684]}},[t("dai-capa-xyz"),a._v(" "),t("dai-capa-geojson",{attrs:{id:"estados_tamanos",url:a.$withBase("/centroides-estados.geojson"),"reglas-estilo-capa":[{clasificacion:"cuantiles",columna:"estados_pob18ymas_rural",propiedadObjetivo:"proporcion",proporciones:[5,8,12,15],clases:4,tituloVariable:"Cantidad de problación"}],"estilo-capa":{circle:{stroke:{color:a.usarTexturas?"black":"white",width:1},radius:1,fill:{color:"#4285f4"}}},"usar-texturas-en-relleno":a.usarTexturas}})],1)],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);