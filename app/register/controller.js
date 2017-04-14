import Ember from 'ember';
import userValidator from './validation';

export default Ember.Controller.extend({
  userValidator,

  actions: {
    async saveUser(changeset) {
      await changeset.validate();

      if (changeset.get('isInvalid')) {
        return alert('You must put in valid information');
      }

      await changeset.save();

      const user = this.store.createRecord('user', this.model);

      await user.save();

      this.transitionToRoute('user-profile');
    }
  }
});
