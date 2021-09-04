/* Make a table row*/
export const row = (props, object, addons) =>
  Object.keys(object)
    .filter((key) => props.includes(key))
    .map((_, index) => props.find((el) => el == props[index]))
    .reduce((init, curr) => [...init, { children: object[curr] }], [])
    .concat(addons)
