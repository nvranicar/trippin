import Ember from 'ember';
import data from './data';

export default Ember.Controller.extend({
  lat: 38.82259097617713,
  lng: 9.140625000000002,
  zoom: 2,
  topo: true,
  ironYard: [36.152706, -86.776111],
  data,

  actions: {
     zoomByLoc(trip) {
       Ember.set(this, 'lat', trip.crd[0]);
       Ember.set(this, 'lng', trip.crd[1]);
       Ember.set(this, 'zoom', 5);
    },
  }
});
