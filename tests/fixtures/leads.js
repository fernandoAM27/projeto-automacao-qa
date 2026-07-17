const leads = {
  valid: {
    name: 'Fernando Machado',
    email: 'fernando.qa@example.com'
  },

  invalidEmail: {
    name: 'Fernando Machado',
    email: 'fernando.qa.com'
  },

  emptyName: {
    name: '',
    email: 'fernando.qa@example.com'
  },

  emptyEmail: {
    name: 'Fernando Machado',
    email: ''
  },

  emptyFields: {
    name: '',
    email: ''
  }
}

module.exports = { leads }
