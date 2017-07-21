import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
        saveTicketToCourse() {
          var params = {
            names: this.get('names') ? this.get('names') : "",
            question: this.get('question') ? this.get('question') : "",
            course: this.get('course_id'),
            date_added: Date.now()
          };
          this.sendAction('saveTicketToCourse', params);
      }
    },
    didRender: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
            $("input#ember525").ready(function() {
                $("input#ember525").click();
            });
        });
    },
});
