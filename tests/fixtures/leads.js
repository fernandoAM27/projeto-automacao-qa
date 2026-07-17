const leads = {
  valid: {
    name: 'Fernando Machado',
    email: 'fernando.qa@example.com'
  },

  invalidEmail: {
    name: 'Fernando Machado',
    email: 'fernandoarraismachado.com'
  },

  emptyName: {
    name: '',
    email: 'fernandoarraismachado@yahoo.com.br'
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
