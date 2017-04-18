import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  locations: DS.attr('locations'),
  // dates: DS.attr('date'),
  // details: DS.attr('string'),
});
