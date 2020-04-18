import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('login', { path: '/' });
  this.route('content', function() {
    this.route('shelves');
  });
  this.route('home');
  this.route('shelves');
  this.route('firstpage');
  this.route('bang');
  this.route('comedy');
  this.route('fantasy');
  this.route('horro');
  this.route('horror');
  this.route('love');
  this.route('sci-fi');
  this.route('suspense');
  this.route('thriller');
  this.route('publish');
});
