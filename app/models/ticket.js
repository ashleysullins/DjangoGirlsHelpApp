import DS from 'ember-data';

export default DS.Model.extend({
  names: DS.attr(),
  question: DS.attr(),
  course: DS.belongsTo('course', {async: true}),
  date_added: DS.attr()
});
