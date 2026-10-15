// Inside the iOS Dotrino app (its WebView sets `window.DotrinoNative.platform()` to 'ios') there
// are no donation links: outside In-App Purchase, App Review only accepts donations to approved
// nonprofits (guidelines 3.1.1 / 3.2.2), and it rejected the app for it on 2026-10-15.
export function noDonations() {
  try {
    const n = typeof window !== 'undefined' ? window.DotrinoNative : null
    return !!(n && typeof n.platform === 'function' && n.platform() === 'ios')
  } catch {
    return false
  }
}
