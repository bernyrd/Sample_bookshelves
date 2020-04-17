import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import fetch from 'fetch';

export default class LoginboxComponent extends Component {
    @tracked name;
    @tracked pass;

    @action
    createBook(){
        alert('Mahal na mahal ko si ' + this.name)
        alert('Wag ka ng magalit. Pag nabasa mo to sabihin mo Iloveyou bebe')
    }

    @action
    updateUser(event){
        this.name = event.target.value;
    
    }
    
}
