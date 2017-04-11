import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  friends: DS.attr(),
  locations: DS.attr(),
  dates: DS.attr('date'),
  details: DS.attr('string'),
});
