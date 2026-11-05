// Lo que este paquete usa de fuera y no trae tipos en este repo.

/** El puente que pone el WebView de las apps nativas de Dotrino (`dotrino-native`). */
interface Window {
  DotrinoNative?: { platform?: () => 'ios' | 'android' | string }
}

/** Peer opcional: solo se importa para contar la apertura de la app (best-effort). */
declare module '@dotrino/store' {
  export const Store: {
    connect (): Promise<{ recordOpen (appId: string): Promise<unknown> }>
  }
}
