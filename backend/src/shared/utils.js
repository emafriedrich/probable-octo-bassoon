const isHexa = (string) => {
  const hexaRegex = /^([0-9A-Fa-f])+$/g
  return hexaRegex.test(string)
}

module.exports = {
  isHexa
}
