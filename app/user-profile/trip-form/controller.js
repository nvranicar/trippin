import Ember from 'ember';
import Controller from 'ember-controller';
import moment from 'moment';

import config from 'trippin/config/environment';

const apiUrl = `${config.DS.host}/trip`;

export default Ember.Controller.extend({
  filesystem: Ember.inject.service(),
  selectedFiles: [],
  formValues: {},

  actions: {
    async saveTrip(changeset) {
      changeset.save();

      // debugger;

      const fetch = this.get('filesystem.fetch');

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          accept: 'application/json'
        },
        body: this.model
      }).then(res => res.json()).then((data) => {
        const upload = this.store.pushPayload(data);
      });
    },

    changeMe(d) {
      debugger;
    }
  }
});
