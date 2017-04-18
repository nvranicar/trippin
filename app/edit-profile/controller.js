import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    async updateProfile(changeset) {
      await changeset.save();
    }
  }
});
