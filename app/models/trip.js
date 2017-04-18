import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  locations: DS.hasMany('locations'),
  pictures: DS.hasMany('picture'),
});
