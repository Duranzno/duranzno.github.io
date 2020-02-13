/* eslint-disable no-bitwise */
export const get = (obj, path, defaultValue) => {
  const travel = regexp =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      )
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)
  return result === undefined || result === obj ? defaultValue : result
}
export function isEmpty(obj) {
  if (typeof obj === "object") {
    return !Object.entries({}).length
  }
  if (Array.isArray(obj)) {
    return !obj.length
  }
  return true
}
