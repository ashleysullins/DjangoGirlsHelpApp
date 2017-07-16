import Ember from 'ember';

export default Ember.Component.extend({
  startTimer: false,

  actions: {
    setStartTimer() {
      setTimeout(function() {
        //this.set('startTimer', true);
        alert("hi");
      }, 1000);
    },
    saveTicketToCourse() {
      var params = {
        names: this.get('names') ? this.get('names') : "",
        question: this.get('question') ? this.get('question') : "",
        course: this.get('course_id'),
        date_added: Date.now()
      };
      this.sendAction('saveTicketToCourse', params);
      this.sendAction('setStartTimer');
    }
  }
});
