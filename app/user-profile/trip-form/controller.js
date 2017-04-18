import Ember from 'ember';
import Controller from 'ember-controller';
import moment from 'moment';

import config from 'trippin/config/environment';

const apiUrl = `${config.DS.host}/trips`;

export default Ember.Controller.extend({
  filesystem: Ember.inject.service(),
  session: Ember.inject.service(),
  selectedFiles: [],
  formValues: {},

  actions: {
    async saveTrip(changeset) {
      await changeset.save();

      // debugger;

      const fetch = this.get('filesystem.fetch');
      const token = this.get('session.session.content.authenticated.token');

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: {
          name: this.model.name,
          location: this.model.location,
          'cover-photo': this.model.coverPhoto[0],
          'photos[]': Array.from(this.model.photos),
        }
      }).then(res => res.json()).then((data) => {
        const upload = this.store.pushPayload(data);
      });

      this.transitionToRoute('user-profile');
    },

    changeMe(d) {
      debugger;
    }
  }
});
