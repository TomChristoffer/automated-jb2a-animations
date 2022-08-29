import { sound } from "./sound.js";
import { video } from "./video.js";

/**
 * Creates default explosion data.
 *
 * @returns {DataExplosion}
 */
export function explosion() {
   return {
      enable: false,
      video: { dbSection: "static", menuType: 'chains', animation: 'diamond', variant: '01', color: 'blue' },
      sound: sound(),
      options: {
         below: false,
         isMasked: false,
         opacity: 1,
         radius: 1.5,
         zIndex: 1
      }
   }
}
/**
 * @typedef {object} DataExplosion
 *
 * @property {boolean=false}        enable -
 *
 * @property {DataVideo}            video -
 *
 * @property {DataSound}            sound -
 *
 * @property {DataExplosionOptions} options -
 */

/**
 * @typedef DataExplosionOptions
 *
 * @property {boolean}     below -
 *
 * @property {number}      delay -
 *
 * @property {boolean}     isMasked -
 *
 * @property {number}      opacity -
 *
 * @property {number}      radius -
 *
 * @property {number}      zIndex -
 */
