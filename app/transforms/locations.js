import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    if (typeof serialized === 'string') {
      return serialized.split(';').map(s => s.trim());
    }

    return serialized;
  },

  serialize(deserialized) {
    if (typeof deserialized === 'string') {
      return deserialized.split(';').map(s => s.trim());
    }

    return deserialized;
  }
});
