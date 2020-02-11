/* eslint-disable no-bitwise */
export const get = (obj, path, defaultValue) => {
  const travel = regexp =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj)
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)
  return result === undefined || result === obj ? defaultValue : result
}
export function isEmpty(obj) {
  if (typeof obj === 'object') {
    return !Object.entries({}).length
  }
  if (Array.isArray(obj)) {
    return !obj.length
  }
  return true
}
export function convertHex(_hex, opacity = 100) {
  const hex = _hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = `rgba(${r},${g},${b},${opacity})`
  return result
}

export const randomizePosition = max => {
  const x = Math.floor(Math.random() * max.x)
  const y = Math.floor(Math.random() * max.y)
  return { x, y }
}
