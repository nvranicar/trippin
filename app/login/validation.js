import { validateFormat, validatePresence, validateLength } from 'ember-changeset-validations/validators'

export default {
  username: [
    validatePresence(true)
  ],

  password: [
    validatePresence(true),
    validateLength({min: 8}),
  ]
}
