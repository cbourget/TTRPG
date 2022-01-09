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

  load: async (tp) => {
    if (!this.name && CAMPAINGS.length === 1) {
      this.name = CAMPAINGS[0]
    }

    if (this.name) {
      return this
    }

    const choice = await tp.system.suggester(CAMPAINGS, CAMPAINGS)
    if (!choice) {
      choice = CAMPAINGS[0]
    }
    this.name = choice
    return this
  },

  chooseCampaign: async (tp) => {
    const choice = await tp.system.suggester(GENDERS, GENDERS)
    if (!choice) {
      return 'Homme'
    }
    return choice
  },

  chooseGender: async (tp) => {
    const choice = await tp.system.suggester(GENDERS, GENDERS)
    if (!choice) {
      return 'Homme'
    }
    return choice
  },

  chooseRace: async (tp) => {
    const choice = await tp.system.suggester(RACES, RACES)
    if (!choice) {
      return 'Humain'
    }
    return choice
  },
})

module.exports = Campaign
