(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{383:function(a,o,t){"use strict";t.r(o);var e={data:function(){return{usarTexturas:!0}}},r=t(0),s=Object(r.a)(e,(function(){var a=this,o=a._self._c;return o("div",{staticClass:"another-map"},[o("dai-tarjeta-contenedor-mapa",{scopedSlots:a._u([{key:"header",fn:function(){return[o("div",[o("p",[a._v("Da lick en el boton para alternar la textura")]),a._v(" "),o("button",{staticClass:"dai-map-button",on:{click:function(o){a.usarTexturas=!a.usarTexturas}}},[a._v("\n                    "+a._s(a.usarTexturas?"quitar texturas":"poner texturas")+"\n                ")])]),a._v(" "),o("dai-leyenda-mapa",{attrs:{para:["estados2"],"mostrar-boton-alterna-todos":!0}})]},proxy:!0}])},[a._v(" "),o("dai-mapa",{attrs:{extension:[-118.365119934082,14.5320978164673,-86.7104034423828,32.7186546325684]}},[o("dai-capa-xyz"),a._v(" "),o("dai-capa-geojson",{attrs:{id:"estados2",url:a.$withBase("/centroides-estados.geojson"),"reglas-estilo-capa":[{clasificacion:"categorias",columna:"estados_grado_marg",acomodoCategorias:["Muy bajo","Bajo","Medio","Alto","Muy alto"],propiedadObjetivo:"relleno",colores:"Reds"},{clasificacion:"cuantiles",columna:"estados_pob18ymas_rural",propiedadObjetivo:"proporcion",proporciones:[5,8,12,15],clases:4,tituloVariable:"Cantidad de problación"}],"estilo-capa":{circle:{stroke:{color:a.usarTexturas?"#022562":"white",width:a.usarTexturas?3:1},radius:1,fill:{color:"white"}}},"usar-texturas-en-relleno":a.usarTexturas,estiloTexturaRelleno:{color:"#022562",size:1.5,spacing:4,fill:{color:"#DFC9A1"}}}})],1)],1)],1)}),[],!1,null,null,null);o.default=s.exports}}]);