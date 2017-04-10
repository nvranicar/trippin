import Ember from 'ember';

export default Ember.Controller.extend({
  isAuthenticated: true,
  actions: {
    logout() {
      this.isAuthenticated = false;
    }
  }
});
