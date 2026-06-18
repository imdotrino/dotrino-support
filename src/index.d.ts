export interface SupportLink {
  label?: string
  href: string
}

/**
 * Custom element `<dotrino-support>`: modal de soporte autohosteado,
 * reutilizable por cualquier app del ecosistema Dotrino. Sin JS de
 * terceros ni cookies.
 *
 * Atributos para "Reporta un error" (opcional): `repo` ("usuario/repo" o URL
 * completa del repo) o `bug-href` (URL completa a los issues). Si alguno está
 * presente, se añade una cara de bug al flipper y una sección al modal con un
 * enlace directo a la página de issues del repositorio.
 *
 * Atributo `discord` (opcional): URL de invitación a Discord (p. ej.
 * "https://discord.gg/xxxx"). Si está presente, el modal muestra una sección
 * de comunidad con un enlace a Discord.
 *
 * Contador de aperturas (cross-app): al montarse registra la apertura de la app
 * en el store compartido (`store.dotrino.com`), que el hub `dotrino.com` usa
 * para su tab "Recientes". 100% local al navegador, sin servidor ni terceros.
 *   - `app`: id de la app a contar (default: `location.hostname`).
 *   - `no-count`: si está presente, no registra la apertura.
 * El registro es best-effort vía import dinámico del store: si no hay bundler
 * (carga vanilla por CDN) o el store no está disponible, no cuenta pero tampoco
 * rompe la UI de soporte.
 */
export declare class DotrinoSupport extends HTMLElement {
  /** Abre el modal y emite 'cc-support-open'. */
  open(): void
  /** Cierra el modal y emite 'cc-support-close'. */
  close(): void
}

declare global {
  interface HTMLElementTagNameMap {
    'dotrino-support': DotrinoSupport
  }
}

export default DotrinoSupport
