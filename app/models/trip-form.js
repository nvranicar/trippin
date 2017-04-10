import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  friends: DS.attr('array'),
  locations: DS.attr('array'),
  date: DS.attr('string'),
  details: DS.attr('text'),
});
