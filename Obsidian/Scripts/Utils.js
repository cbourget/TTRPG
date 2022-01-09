const Utils = () => ({
  camelCase: (str) => {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, '-')
  },

  kebabCase: (str) => {
    return this.camelCase(str).toLowerCase();
  },
})

module.exports = Utils
