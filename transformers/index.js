function returnFilterAttributes (props) {
  const result = {}

  for (key in props) {
    if (props[key]) {
      result[key] = props[key]
    }
  }

  return result
}

module.exports = {
  returnFilterAttributes,
}
