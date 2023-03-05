import { Temporal, toTemporalInstant } from '@js-temporal/polyfill';

if (!('Temporal' in window)) {
  // @ts-expect-error polyfill
  window.Temporal = Temporal;
}

if (!('toTemporalInstant' in Date.prototype)) {
  // @ts-expect-error polyfill
  // eslint-disable-next-line no-extend-native
  Date.prototype.toTemporalInstant = toTemporalInstant;
}

declare global {

  interface Window {
    Temporal: typeof Temporal
  }

  interface Date {
    toTemporalInstant: typeof toTemporalInstant
  }
}
