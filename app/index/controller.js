import Ember from 'ember';
import data from './data';

export default Ember.Controller.extend({
  data,
  currentUser: {
    favorites: []
  },
  isShowingModal: false,

  actions: {
    zoomByLoc(trip) {
      Ember.set(this, 'lat', trip.latitude);
      Ember.set(this, 'lng', trip.longitude);
      Ember.set(this, 'zoom', 5);
      this.get('scroller').scrollVertical('.leaflet-container');
    },
    scroll(trip) {
      this.get('scroller').scrollVertical(`.${trip.id}`);
    },
    favorite(pic) {
      if (this.currentUser.favorites.includes(pic)) {
        this.currentUser.favorites.removeObject(pic);
      } else {
        this.currentUser.favorites.pushObject(pic);
      }
    },
    toggleModal() {
      this.toggleProperty('isShowingModal');
      if (this.isShowingModal) {
        document.querySelector('body').className = 'stop-scrolling';
      } else {
        document.querySelector('body').className = document.querySelector('body').className.replace(/(?:^|\s)stop-scrolling(?!\S)/g, '')
      }
    },
    location(trip) {
      return [trip.latitude, trip.longitude]
    }
  }
});
