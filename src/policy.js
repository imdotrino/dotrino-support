// What the native Dotrino apps let a page show. Their WebView sets `window.DotrinoNative.platform()`
// ('ios' or 'android'); a browser has no `DotrinoNative`.

const nativePlatform = () => {
  try {
    const n = typeof window !== 'undefined' ? window.DotrinoNative : null
    return n && typeof n.platform === 'function' ? n.platform() : null
  } catch {
    return null
  }
}

// Inside the iOS Dotrino app there are no donation links: outside In-App Purchase, App Review only
// accepts donations to approved nonprofits (guidelines 3.1.1 / 3.2.2), and it rejected the app for
// it on 2026-10-15.
export function noDonations() {
  return nativePlatform() === 'ios'
}

// Inside ANY native Dotrino app (iOS or Android) nothing is sold: no buying, renewing or subscribing,
// and no links that lead to it. Apple requires In-App Purchase and Google Play requires Play Billing
// for digital goods, so a paid service is bought from the browser only (owner, 2026-10-18).
export function noPayments() {
  const p = nativePlatform()
  return p === 'ios' || p === 'android'
}
