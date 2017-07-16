import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('course');
  },

  actions: {
    saveTicketToCourse(params) {
      var newTicket = this.store.createRecord('ticket', params);
      var course = params.course;
      course.get('tickets').addObject(newTicket);
      newTicket.save().then(function() {
        return course.save();
      });
      this.transitionTo('success', newTicket.id);
    }
  }
});
