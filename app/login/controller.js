import Ember from 'ember';
import userValidator from './validation';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  userValidator,
  actions: {
    async loginUser(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('You must put in valid information');
      }

      await changeset.save();

      await this.get('session').authenticate('authenticator:token', {
        identification: this.get('model.username'),
        password: this.get('model.password'),
      });
    }
  }
});
