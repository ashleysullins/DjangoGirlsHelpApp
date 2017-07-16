import DS from 'ember-data';

export default DS.Model.extend({
  course: DS.attr(),
  tickets: DS.hasMany('ticket', {async: true}),
});
