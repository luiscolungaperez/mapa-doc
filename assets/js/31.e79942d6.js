(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{422:function(t,e,a){"use strict";a.r(e);var s=a(0),i=Object(s.a)({},(function(){var t=this._self._c;return t("DaiTarjetaContenedorMapa",{scopedSlots:this._u([{key:"header",fn:function(){return[t("DaiLeyendaMapa",{attrs:{para:["cluster-basico","sin-cluster"]}})]},proxy:!0}])},[this._v(" "),t("DaiMapa",[t("DaiCapaXyz"),this._v(" "),t("DaiCapaGeojson",{attrs:{id:"sin-cluster",titulo:"Capa sin cluster",url:this.$withBase("/centroides-estados.geojson"),"estilo-capa":{circle:{fill:{color:"white"},stroke:{color:"black",width:1},radius:4}}}}),this._v(" "),t("DaiCapaGeojsonCluster",{attrs:{id:"cluster-basico",titulo:"Capa con cluster",url:this.$withBase("/centroides-estados.geojson"),"estilo-capa":{circle:{fill:{color:"red"},stroke:{color:"black",width:1},radius:5},textStyle:{text:"-",fill:{color:"white"}}},usarTexturasEnRelleno:!1,"props-asigna-estilo":["textStyle.text","circle.radius"],"fn-asigna-estilo":t=>[t.features.length.toString(),t.features.length+5]}})],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);