const CAMPAINGS = [
  'Entre Deux Mondes'
]

const GENDERS = [
  'Femme',
  'Homme',
]

const RACES = [
  'Demi-Elfe',
  'Elfe',
  'Gnome',
  'Halfling',
  'Humain',
  'Nain',
  'Orc',
]

const Campaign = () => ({
  name: null,

  load: async function (tp) {
    if (!this.name && CAMPAINGS.length === 1) {
      this.name = CAMPAINGS[0]
    }

    if (this.name) {
      return this
    }

    const choice = await tp.system.suggester(CAMPAINGS, CAMPAINGS)
    this.name = choice || CAMPAINGS[0]
    return this
  },

  chooseGender: async function (tp) {
    const choice = await tp.system.suggester(GENDERS, GENDERS)
    if (!choice) {
      return 'Homme'
    }
    return choice
  },

  chooseRace: async function (tp) {
    const choice = await tp.system.suggester(RACES, RACES)
    if (!choice) {
      return 'Humain'
    }
    return choice
  },
})

module.exports = Campaign
