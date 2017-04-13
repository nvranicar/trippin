import Ember from 'ember';
import Controller from 'ember-controller';
import moment from 'moment';

export default Ember.Controller.extend({
  filesystem: Ember.inject.service(),
  selectedFiles: [],
  formValues: {},

  actions: {
    upload(file) {
      const fetch = this.get('filesystem.fetch');

      fetch('#', {
        method: 'POST',
        headers: {
          accept: 'application/json'
        },
        body: {
          'profile-image': file[0]
        }
      }).then(res => res.json()).then((data) => {
        const upload = this.store.pushPayload(data);
      });
    },

    async saveTrip() {
      const trip = this.store.createRecord('trip', this.formValues);
      await trip.save().then(() => {
        this.transitionToRoute('/user-profile.index');
      })
    },

    changeMe(d) {
      debugger;
    }
  }
});
