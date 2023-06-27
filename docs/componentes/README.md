
# Mapa

## dai-mapa

Componente de mapa interactivo

### Uso

```html
<dai-mapa>
    <!-- Aqui van las capas y componentes que quedaran dentro del mapa -->
</dai-mapa>
```
Los componentes que pueden ir dentro del mapa son: [Las capas](./capas.md), o tambien [el control de informacion (dai-info-mapa)](./controles.md#dai-info-mapa).

### Propiedades

#### centro

- Type: `Array`
- Default: `[0,0]`

Centro en coordenadas a las que el mapa se acercara. Es una array en formato `[x,y]`, en EPSG:4326, es decir `[longitud,latitud]`. 

Tener en cuenta que si la propiedad `extension` se define, esta propiedad se igonora.

#### zoom

- Type: `Number`
- Default: `1`

Nivel de acercamiento al mapa, va de *0* a *28* donde *0* es el nivel donde se ve todo el mundo y *28* es el nivel mas cerca, el maximo zoom permitido. Hay que tener en cuenta que la mayoria de servicios regularmente soportan hasta el nivel 20. En [Zoom levels](https://wiki.openstreetmap.org/wiki/Zoom_levels) puede ver una referencia de los zooms y las areas que representan 

Tener en cuenta que si la propiedad `extension` se define, esta propiedad se igonora.

#### extension

- Type: `Array`
- Default: `undefined`

La extensión de coordenadas maximas y minimas para centrar el mapa. Debe contar con la siguiente estrucura `[minx, miny, maxx, maxy]`.

#### max-zoom

- Type: `Number`
- Default: `20`

Nivel de acercamiento maximo del mapa, va de *0* a *28* donde *0* es el nivel donde se ve todo el mundo y *28* es el nivel mas cerca.

#### min-zoom

- Type: `Number`
- Default: `1`

Nivel de acercamiento maximo del mapa, va de *0* a *28* donde *0* es el nivel donde se ve todo el mundo y *28* es el nivel mas cerca.

#### niveles

- Type: `Array<String>`
- Default: `[]`

Lista de los niveles que tendra el mapa. Servira para que todo el componente en general tenga un status general de en que nivel esta actualmente el mapa.

Los niveles mas usados son `nacional`,`estatal`,`municipal`, pero puede ser cualquier valor.

#### nivel-actual

- Type: `String`
- Default: `undefined`

Nivel actual que toma el mapa. Cuando `niveles` esta definido por default toma el valor del primer elemento. El objetivo de esta propiedad es poder asignar rapidamente el varlo de nivel al componente. 

Pensemos en un caso como el siguiente. Al ejecutar el metodo `cambiarDeNivel` el mapa inmediatamente cambiaria de nivel. y con el evento `@cambioNivel` se podra escuchar cuando cambie. Recuerda que el boton reset del mapa regresa al primer nivel, en tal caso sera muy util usar .sync para que se reasigne la variable

```html
<dai-mapa :niveles="['nacional','estatal']" :nivel-actual.sync="nivel" @cambioNivel="metodoCambioNivel" >
    ...capas
</dai-mapa>
```
```javascript
export default {
    data: function() {
        return {
            nivel:"estatal"
        }
    },
    methods:{
        cambiarDeNivel: function (){
            this.nivel = "nacional"
        },
        metodoCambioNivel: function (){
            // hacer todo lo que necesitemos 
        }
    }
}
```
#### zoom-on-scroll

- Type: `Boolean`
- Default: `true`

Define si el zoom  del mapa reacciona al scroll,

### Eventos
#### @click
Reacciona cuando se da click en cualquier parte del mapa. retorna una obecto evento que contiene la coordenada en la que se clickeo. `{coordinate:[x,y],target:...}`

#### @reset_view

Reacciona cuando se da click en el boton de centrar al mapa, util cuando se necesita resetar, apagar, prender capas al accionar este boton.

#### @cambioNivel
Se emite cuando el nivel del mapa cambio, ideal para definir acciones cuando el usuario cambia de nivel

### Metodos

#### cerrarPopup() 
Forza el cierre del popup actual si es que esta activo

#### forceResizeMap(vistaInicial)

Redefine las dimensiones del mapa, ideal cuando el contenedor el mapa cambia de tamaño y el area del mapa necesite hacer lo mismo.
NOTA: cuando la pantalla se redimenciona , el mapa ya cuenta con la funcionalidad de redimensionarse.

Parametros 
- **vistaInicial**  boolean (default false) . Define si al redismensionar el mapa se debera regresar a la vista inicial del mapa.


#### resetMap()
Emite y acciona el evento de resetear el mapa, equivalente a dar click en el boton reset del mapa <span class="dai-icon-centrar"></span>


#### setNivel(nivel)
Le define el nivel al mapa

Parametros
- **nivel** string (default undefined) nombre del nivel que se desea asignar al mapa, si no existe dentro de los niveles disponibles del mapa no se efectua ninguna accion

#### setNivelRetroceso()
Retrocede una nivel hacia atras 

## dai-tarjeta-contenedor-mapa

Componente contenedor del mapa interactivo y sus controles

### Uso

```html
<dai-tarjeta-contenedor-mapa>
    <template v-slot:header>
        <!--aqui va cualquier contenido-->
    </template>
    <dai-mapa>
        <!--aqui van las capas del mapa y/o el control de información-->
    </dai-mapa>
    <template v-slot:footer>
        <!--aqui va cualquier contenido-->
    </template>
</dai-tarjeta-contenedor-mapa>
```
los elementos que deben ir dentro de `dai-tarjeta-contenedor-mapa` son `<dai-mapa>` (requerido) y 2 elememtos`<template>` (opcionales) con la  directiva *v-slot* para definir a que parte de la tarjeta se acomoda :

- **v-slor:header** para definir el contenido del encabezado.
- **v-slor:footer** para definir el contenido del pie de la tarjeta.

### Propiedades

#### colapsada

- Type: `Boolean`
- Default: `true`

Indica si la tarjeta incialmente (o en el ciclo de vida del componente) se mantiene colapsada o no.

#### altura-colapsada

- Type: `String`
- Default: `60vh`

La altura del componente al esta es su estado *colapsado*, en sintaxis de css, es decir se podra poner una altura de 500px, 20rems, etc.


#### etiqueta-colapso

- Type: `String`
- Default: `<span class="dai-icon-collapsed size-font-25rem-x7"></span>`

Etiqueta que se mantiene como boton al final del footer cuando el componente está en su estado de colapso. Admite sintaxis html. Por default es un icono de _+_.


#### etiqueta-no-colapso

- Type: `String`
- Default: `<span class="dai-icon-uncollapsed size-font-25rem-x7"></span>`

Etiqueta que se mantiene como boton al final del footer cuando el componente está en su estado de no colapso. Admite sintaxis html. Por default es un icono de _-_.


#### es-version-escritorio-en-pantalla-larga

- Type: `Boolean`
- Default `false`

Indica si cuando la pantalla corresponde a la version de escritorio (mas de 970 pixeles), debe redisrtibuirse la posicion de sus elementos: *footer y header a la izquierda y Mapa a la derecha con mas amplitud*.

Debido a que el mapa esta diseñado primordialmente para pantallas mobile, este parametro no esta por default activado, hay que definiro explicitamente.