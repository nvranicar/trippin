import Ember from 'ember';
import data from './data';

const { inject: { service }, Component } = Ember;

export default Ember.Controller.extend({
  lat: 38.82259097617713,
  lng: 9.140625000000002,
  zoom: 2,
  topo: true,
  ironYard: [36.152706, -86.776111],
  bounds: [[-89.98155760646617, -200], [89.99346179538875, 200]],
  data,
  scroller: Ember.inject.service(),
  session: service('session'),
  currentUser: service('current-user'),


  actions: {
    zoomByLoc(trip) {
       Ember.set(this, 'zoom', 6);
       Ember.set(this, 'lat', trip.lat);
       Ember.set(this, 'lng', trip.lng);
       this.get('scroller').scrollVertical('.map');
    },
    scroll(trip) {
      this.get('scroller').scrollVertical(`.${trip.id}`);
    },
  }
});
