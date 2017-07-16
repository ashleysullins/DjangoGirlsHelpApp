import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    dismissTicket(ticket) {
      if(confirm('Are you sure???')) {
        this.sendAction('dismissTicket', ticket);
      }
    }
  }
});
