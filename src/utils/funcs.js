export function convertHex(_hex, opacity = 100) {
  // Checks if the functions is using a CSS variable with the structure "var(--name, #HEX)"
  // it extracts the value with regex or if it's not a variable just takes the value
  const hex = /(, #)/.test(_hex) ? _hex.slice(0, -1).split(', #')[1] : _hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = `rgba(${r},${g},${b},${opacity})`
  return result
}

export const randomizePosition = max => {
  const x = Math.floor(Math.random() * max.x + 40)
  const y = Math.floor(Math.random() * (max.y / 2) + 40)
  return { x, y }
}
