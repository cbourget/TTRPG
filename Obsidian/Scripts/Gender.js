const genders = [
  'Femme',
  'Homme',
]

const Gender = () => ({
  choose: async (tp) => {
    const choice = await tp.system.suggester(genders, genders)
    if (!choice) {
      return 'Homme'
    }
    return choice
  },

  genders
})

module.exports = Gender
