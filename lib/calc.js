'use strict'

/**
 * Calculates x, y coordinate pairs for a hyperbola given
 * a and b.
 *
 * https://mysite.du.edu/~jcalvert/math/hyperb.htm
 *
 * Equation:
 *    y^2       x^2
 *    ---   -   ---   =   1
 *    b^2       a^2
 *
 * @param {number|Object} a length of the transverse axis is 2 a or could be an
 * object with the following properties: `{ a, b, minX, maxX }` which map to the
 * parameters
 * @param {number} b length of the conjugate axis is 2 b
 * @param {number} minX mim x
 * @param {number} maxX max x
 * @returns {Array.<Object>} `{ x, y }` coordinate pairs
 */
function hyperbola (a, b, minX, maxX) {
  if (typeof a === 'object') {
    b = parseInt(a.b)
    minX = parseInt(a.minX)
    maxX = parseInt(a.maxX)
    a = parseInt(a.a)
  }
  return hyperbolaCalc(a, b, minX, maxX)
}

function hyperbolaCalc (a, b, minX, maxX) {
  // Solving equation for y as a and b are known and we'll
  // iterate over a range of xs.
  const firstAsymptote = []
  const secondAsymptote = []
  for (let x = minX; x <= maxX; x++) {
    const ySquared = b * b + ((x * x * b * b) / a * a)
    const y = Math.sqrt(ySquared)
    firstAsymptote.push({ x, y: y })
    secondAsymptote.push({ x, y: -y })
  }
  return firstAsymptote.concat(secondAsymptote)
}

module.exports = { hyperbola }
