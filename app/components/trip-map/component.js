import Ember from 'ember';

export default Ember.Component.extend({
  scroller: Ember.inject.service(),
  tagName: '',
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
});
