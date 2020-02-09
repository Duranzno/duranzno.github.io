export const capitalize = s => s && s[0].toUpperCase() + s.slice(1)

export const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home'
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          }
    },
    { links: [], home: null }
  )
export const setLimitLength = (maxLength = 250) => str => {
  if (str.length >= maxLength) {
    return `${str.substr(0, maxLength - 3)}...`
  }
  return str
}
