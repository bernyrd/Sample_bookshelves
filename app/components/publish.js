import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PublishComponent extends Component {
    @action
    publish(){
        alert('Your story has been publish. Thankyou')
    }
}
