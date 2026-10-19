// La política de pagos sin DOM: `noDonations` solo en iOS, `noPayments` en cualquier app nativa.
import test from 'node:test'
import assert from 'node:assert/strict'
import { noDonations, noPayments } from '../src/policy.js'

const as = (platform) => { globalThis.window = platform === undefined ? {} : { DotrinoNative: { platform: () => platform } } }

test('en el navegador se puede donar y comprar', () => {
  as(undefined)
  assert.equal(noDonations(), false)
  assert.equal(noPayments(), false)
})

test('en la app iOS: ni donar ni comprar', () => {
  as('ios')
  assert.equal(noDonations(), true)
  assert.equal(noPayments(), true)
})

test('en la app Android: se dona, pero no se compra (Play exige su facturación)', () => {
  as('android')
  assert.equal(noDonations(), false)
  assert.equal(noPayments(), true)
})

test('un puente roto no tumba la página', () => {
  globalThis.window = { DotrinoNative: { platform: () => { throw new Error('x') } } }
  assert.equal(noPayments(), false)
  delete globalThis.window
  assert.equal(noPayments(), false)
})
