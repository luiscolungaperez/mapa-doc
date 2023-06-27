import {
    DaiMap,
    DaiCardMapContainer,

    DaiXyzLayer,
    DaiXyzLayerOsm,
    DaiGeojsonLayer,
    DaiCapaGeojsonCluster,
    DaiCapaGeojsonPuntosDesplazados,
    DaiCapaGeojsonHexbin,
    DaiWmsLayer,
    DaiTopojsonLayer,

    DaiLeyendaMapa,
    DaiMapSelector,
    DaiMapOpacity,
    DaiMapSwitch,
    DaiMapSearcher,
    DaiMapInfo
} from "./components"

import {
    WidthControl
} from "./directives"

import "./styles/main.scss"
export default function plugin(Vue){
    if (plugin.installed) {
        return
    }
    plugin.installed = true
    Vue.use(DaiMap)
    Vue.use(DaiCardMapContainer)

    Vue.use(DaiXyzLayer)
    Vue.use(DaiXyzLayerOsm)
    Vue.use(DaiGeojsonLayer)
    Vue.use(DaiCapaGeojsonCluster)
    Vue.use(DaiCapaGeojsonPuntosDesplazados)
    Vue.use(DaiCapaGeojsonHexbin)
    Vue.use(DaiWmsLayer)
    Vue.use(DaiTopojsonLayer)

    Vue.use(DaiLeyendaMapa)
    Vue.use(DaiMapSelector)
    Vue.use(DaiMapOpacity)
    Vue.use(DaiMapSwitch)
    Vue.use(DaiMapSearcher)
    Vue.use(DaiMapInfo)

    //directivas
    Vue.directive(WidthControl.name,WidthControl);

}

export {
    plugin as install,
    //componentes
    DaiMap,
    DaiCardMapContainer,

    DaiXyzLayer,
    DaiXyzLayerOsm,
    DaiGeojsonLayer,
    DaiCapaGeojsonCluster,
    DaiCapaGeojsonPuntosDesplazados,
    DaiCapaGeojsonHexbin,
    DaiWmsLayer,
    DaiTopojsonLayer,

    DaiLeyendaMapa,
    DaiMapSelector,
    DaiMapOpacity,
    DaiMapSwitch,
    DaiMapSearcher,
    DaiMapInfo,

    //directivas
    WidthControl

}