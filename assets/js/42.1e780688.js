(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{366:function(a,e,t){"use strict";t.r(e);var i={data:function(){return{puntos:{type:"FeatureCollection",features:[]},malla_visible:!0}},mounted:function(){const a=this.$withBase("/large_dataset.geojson");fetch(a).then(a=>a.json()).then(a=>{this.puntos=a})}},l=t(0),o=Object(l.a)(i,(function(){var a=this,e=a._self._c;return e("DaiTarjetaContenedorMapa",{scopedSlots:a._u([{key:"header",fn:function(){return[e("label",{attrs:{for:""}},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.malla_visible,expression:"malla_visible"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(a.malla_visible)?a._i(a.malla_visible,null)>-1:a.malla_visible},on:{change:function(e){var t=a.malla_visible,i=e.target,l=!!i.checked;if(Array.isArray(t)){var o=a._i(t,null);i.checked?o<0&&(a.malla_visible=t.concat([null])):o>-1&&(a.malla_visible=t.slice(0,o).concat(t.slice(o+1)))}else a.malla_visible=l}}}),a._v(" apagar-prender malla")]),a._v(" "),e("DaiLeyendaMapa",{attrs:{para:["normal"]}}),a._v(" "),e("DaiLeyendaMapa",{attrs:{para:["cluster-hexbin"],"mostrar-boton-alterna-todos":!0}})]},proxy:!0}])},[a._v(" "),e("DaiMapa",{attrs:{extension:[-118.365119934082,14.5320978164673,-86.7104034423828,32.7186546325684]}},[e("DaiCapaXyz"),a._v(" "),e("DaiCapaGeojsonHexbinDinamico",{attrs:{id:"cluster-hexbin",titulo:"Capa con hexbin",renderizarComoImagen:!0,datos:a.puntos,diametroPixeles:25,"reglas-estilo-capa":{columna:"features_count",clasificacion:"cuantiles",clases:4},"estilo-capa":{textStyle:{text:"-"}},"props-asigna-estilo":["textStyle.text"],"fn-asigna-estilo":a=>[a.features_count+""],visible:a.malla_visible,contenidoTooltip:a=>a.features_count+" hay aqui"}}),a._v(" "),e("DaiCapaGeojson",{attrs:{id:"normal",titulo:"Capa normal",renderizarComoImagen:!0,datos:a.puntos,"estilo-capa":{circle:{fill:{color:"white"},stroke:{color:"black",width:1},radius:4}},visible:!1}})],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);