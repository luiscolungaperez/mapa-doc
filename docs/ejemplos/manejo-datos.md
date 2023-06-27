# Manejo de datos

## Aplicando filtros

## Recibiendo datos vacios

<manejo-datos-2-recibiendo-datos-vacios />

```html
<template>
    <div class="another-map">
        <dai-tarjeta-contenedor-mapa>
            <template #header>
                <p>Da click en el boton para llenar o vaciar la capa</p>
                <button @click="vaciar=!vaciar">{{vaciar?'llenar':'vaciar'}}</button>

                <dai-leyenda-mapa para="centroides" />
            </template>
            <dai-mapa
            :extension="[-118.365119934082,14.5320978164673,-86.7104034423828,32.7186546325684]" 
            >
                <dai-capa-xyz/>
                <dai-capa-geojson 
                id="centroides"
                :datos="centroidesComputados"
                :reglas-estilo-capa="{
                    clasificacion:'cuantiles',
                    columna : 'estados_pob18ymas',
                    propiedadObjetivo: 'proporcion',
                    clases:4,
                    proporciones:[4,8,12,16]
                }"
                />
            </dai-mapa>
        </dai-tarjeta-contenedor-mapa>
    </div>
</template>

<script>
import centroides from "../capas/centroides-estados.json"
export default {
    data: function (){
        return {
            centroides:centroides,
            vaciar:true
        }
    },
    computed: {
        centroidesComputados:function(){
            return !this.vaciar ? this.centroides : {"type": "FeatureCollection",features:[]}
        }
    }
}
</script>
```

---


<manejo-datos-3-datos-vacios-sin-simbologia />

```html
<dai-tarjeta-contenedor-mapa>
    <template #header>
        <p>Da click en el boton para llenar o vaciar la capa</p>
        <button @click="vaciar_poligonos=!vaciar_poligonos">{{vaciar_poligonos?'llenar poligonos':'vaciar poligonos'}}</button>
        <dai-leyenda-mapa para="poligonos" />

        <hr v-width-control="'100%'">

        <button @click="vaciar_centroides=!vaciar_centroides">{{vaciar_centroides?'llenar centroides':'vaciar centroides'}}</button>
        <dai-leyenda-mapa para="centroides" />
    </template>
    <dai-mapa
    :extension="[-118.365119934082,14.5320978164673,-86.7104034423828,32.7186546325684]" 
    >
        <dai-capa-xyz/>
        <dai-capa-geojson 
        id="poligonos"
        :datos="poligonosComputados"
        :estilo-capa="{
            fill:{color:'#D9D7F1'},
            stroke:{color:'white',width:1}
        }"
        />
        <dai-capa-geojson 
        id="centroides"
        :datos="centroidesComputados"
        :estilo-capa="{
            circle:{
                fill:{color:'#E7FBBE'},
                stroke:{color:'#FFCBCB',width:1},
                radius:5
            }
        }"
        tipo-geometria="Point"
        />
    </dai-mapa>
</dai-tarjeta-contenedor-mapa>
```

```javascript
import poligonos from "../capas/sample-edos.json"
import centroides from "../capas/centroides-estados.json"
export default {
    data: function (){
        return {
            poligonos:poligonos,
            vaciar_poligonos:true,
            centroides:centroides,
            vaciar_centroides:true
        }
    },
    computed: {
        poligonosComputados:function(){
            return !this.vaciar_poligonos ? this.poligonos : {"type": "FeatureCollection",features:[]}
        },
        centroidesComputados:function(){
            return !this.vaciar_centroides ? this.centroides : {"type": "FeatureCollection",features:[]}
        }
    }
}
```