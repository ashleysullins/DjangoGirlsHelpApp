import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeTicket(ticket) {
      if(confirm('Are you sure???')) {
        this.sendAction('closeTicket', ticket);
        }
      }
    }
});
