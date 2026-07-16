// Moneda por defecto del ecosistema Dotrino: rasterización de moneda.svg (root del
// paquete) a PNG 256x256 con transparencia. 256px = nítida del trigger de 38px hasta
// el preview de 240px. La app consumidora puede sobreescribir con el atributo `coin`.
// Para regenerar: inkscape moneda.svg --export-type=png -w 256 -h 256 -o src/coin.png
//
// Hasta la 0.7 la moneda viajaba EMBEBIDA como data-URI base64 dentro de este módulo:
// 99.783 bytes (75,6 KB gzip) de JS, el 83 % del bundle del topbar. Un base64 de 100 KB
// dentro de un módulo JS es lo peor de los dos mundos: infla un 33 % sobre el binario,
// no comprime (ya es PNG), no se cachea aparte, hay que parsearlo como JS, y ni siquiera
// el atributo `no-support` evitaba bajarlo porque el import es estático.
//
// Ahora es un asset de verdad, resuelto contra la URL de ESTE módulo: funciona igual
// bundleado (Vite/Rollup lo emiten y reescriben la URL) que servido crudo por jsDelivr
// (donde `import.meta.url` ya es la URL del CDN). El navegador la baja como imagen:
// en paralelo, cacheable por separado y sin bloquear el parseo del JS.
export const COIN_URL = new URL('./coin.png', import.meta.url).href
