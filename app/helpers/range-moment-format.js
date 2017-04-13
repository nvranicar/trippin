import Ember from 'ember';

export function rangeMomentFormat([{start, end}, format]/*, hash*/) {
  const s = moment(start);
  const e = moment(end);
  return `${s.format(format)} -  ${e.format(format)}`;
}

export default Ember.Helper.helper(rangeMomentFormat);
