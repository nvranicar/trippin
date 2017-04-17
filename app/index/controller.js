import Ember from 'ember';
import data from './data';

export default Ember.Controller.extend({
  data,
  scroller: Ember.inject.service(),
  lat: 38.82259097617713,
  lng: 9.140625000000002,
  zoom: 2,
  ironYard: [
    36.152706, -86.776111
  ],
  bounds: [
    [
      -89.98155760646617, -200
    ],
    [89.99346179538875, 200]
  ],
  currentUser: {
    favorites: []
  },
  isShowingModal: false,

  actions: {
    zoomByLoc(trip) {
      Ember.set(this, 'lat', trip.crd[0]);
      Ember.set(this, 'lng', trip.crd[1]);
      Ember.set(this, 'zoom', 5);
      this.get('scroller').scrollVertical('.map');
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
    }
  }
});
