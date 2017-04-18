import DS from 'ember-data';

export default DS.Model.extend({
  hometown: DS.attr('string'),
  homestate: DS.attr('string'),
  country: DS.attr('string'),
  bio: DS.attr('string'),
});
