import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginRoute extends Route {
    @tracked username;

    @action
        pressed(){

            var username = this.get('username');
            alert('You login successfully ' + username);

        }
}
