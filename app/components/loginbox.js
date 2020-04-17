import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';

export default class LoginboxComponent extends Component {
    @tracked name;
    @tracked pass;

    @action
    createBook(){
        alert('You successfully login ' + this.name)
        alert('The site is under maintenance. Please click "Click me" to contine. Thankyou')
    }

    @action
    updateUser(event){
        this.name = event.target.value;
    
    }
    
}
