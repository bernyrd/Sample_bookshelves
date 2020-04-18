import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class PublishRoute extends Route {
    @action
    publish(){
        alert('Your story has been publish. Thankyou')
    }
}
