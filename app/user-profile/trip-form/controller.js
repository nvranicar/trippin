import Ember from 'ember';
import Controller from 'ember-controller';
import moment from 'moment';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    async saveTrip() {
      const trip = this.store.createRecord('trip', this.formValues);

      await trip.save();

      this.transitionToRoute('/user-profile.index');
    }
  }
});
