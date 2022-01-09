const races = [
  'Demi-Elfe',
  'Elfe',
  'Gnome',
  'Halfling',
  'Humain',
  'Nain',
  'Orc',
]

const Race = () => ({
  choose: async (tp) => {
    const choice = await tp.system.suggester(races, races)
    if (!choice) {
      return 'Humain'
    }
    return choice
  },

  races
})

module.exports = Race
