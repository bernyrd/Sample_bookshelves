import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class LoginRoute extends Route {
    @tracked value;

    @action
    createBook(){
        alert(this.value)
    }
    
    @action
    updateTitle(event){
        this.value = event.target.value;
    }

}
