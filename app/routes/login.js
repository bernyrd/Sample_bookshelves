import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class LoginRoute extends Route {
    @action
        pressed(){
            alert('You login successfully')
        }
}
