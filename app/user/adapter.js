import ApplicationAdapter from '../application/adapter';

export default ApplicationAdapter.extend({
  urlForQueryRecord(query) {
    if (query.me) {
      delete query.me;
      return `${this._super(...arguments)}/current`;
    }

    return this._super(...arguments);
  }
});
