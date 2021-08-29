export const id = (prefix) =>
  prefix + '-' + Math.random().toString(36).substr(2, 9)
