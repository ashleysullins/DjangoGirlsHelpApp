import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('teachers');
  this.route('success', {path: '/success/:ticket_id'});
  this.route('course', {path: '/course/:course_id'});
  this.route('ticket', {path: '/ticket/:ticket_id'});
});

export default Router;
